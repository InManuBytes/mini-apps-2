import React, { Component } from 'react';

// custom components
import EventsTimeline from './timeline';
// components from antd
import { Input, Pagination, Layout, Row, Col, Divider } from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentPage: 1, // default page to 1
      events: [],
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onPageChange(page) {
    console.log(page);
    this.setState({
      currentPage: page,
    });
  }

  onSearchTermChange(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  onSearch(term) {
    // our server is imported as props in the index file
    const { server } = this.props;
    // on a new search we reset the search to page 1
    return server.search(term, 1)
      .then(result => {
        this.setState({ events: result });
      })
      .catch(err => console.log(err));
  }

  // QUESTION: on mount, should it just display all events?

  render() {
    const { events } = this.state;
    return (
      <div>
        <Layout>
          <Header style={{ color: 'white', position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row>
              <Col xs={0} sm={10} md={8} lg={8} xl={6}>
                Historical Events Finder
              </Col>
              <Col xs={0} sm={2} md={8} lg={8} xl={10}>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Search
                  placeholder="enter a key word"
                  onChange={this.onSearchTermChange}
                  // this property allows us to send the input search term with either the icon click or enter
                  onSearch={searchTerm => this.onSearch(searchTerm)}
                />
              </Col>
            </Row>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            {/* TO DO connect search input to state and to url */}
            {/* TO DO when there is nothing being searched pagination should not appear, maybe display a message? */}
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <EventsTimeline events={events} />
            </div>
            <div style={{ background: '#fff', padding: 24}} >
              <Divider />
              <Pagination
                size="small"
                current={this.state.currentPage}
                onChange={this.onPageChange}
                total={20}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
              />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Manu ©2020</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;

