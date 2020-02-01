import React, { Component } from 'react';
import './styles.css';
import Layout from './layout';
import LineGraph from './LineGraph';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: {},
      stock: 'bpi',
    };
  }

  componentDidMount() {
    const { server }  = this.props;
    // const { stock } = this.state;
    return server.getPrices()
      .then(prices => {
        this.setState( { prices: prices.bpi })
      })
  }

  render() {
    const { stock, prices } = this.state;
    return (
      <Layout>
        <h2 className="leading-none font-bold text-2xl xs:text-2x1 md:text-5xl lg:6x1 uppercase">
          {stock}
        </h2>
        <LineGraph prices={prices} />
      </Layout>
    );
  }
}

export default App;

