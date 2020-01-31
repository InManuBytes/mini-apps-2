const Server = {
  address: 'http://localhost:3000/events/',
  // server-side pagination: GET /endpoint?_page=7 and
  // full-text search GET /endpoint?q=SEARCH_TERM
  // so we should be able to do GET /events?q=SEARCH_TERM&_page=PAGE_NUMBER&_limit=PER_PAGE_RESULTS
  // do a simple fetch?
  pagination: (pageNumber) => {
    return `_page=${pageNumber}`;
  },
  fullTextSearch: (searchTerm) => {
    return `q=${searchTerm}`;
  },
  // TODO allow user to change results per page
  // QUESTION: does json server return the total number of results + pages?
  // QUESTION: why does it say it can be converted to an async function?
  search: (searchTerm, pageNumber) => {
    // create query-string
    const pageString = Server.pagination(pageNumber);
    const searchString = Server.fullTextSearch(searchTerm);
    // TO DO create a more dynamically built query-string that goes through the arguments?
    const queryString = `?${searchString}&${pageString}&_limit=20`;
    const searchURL = `${Server.address}${queryString}`;
    return fetch(searchURL)
      .then(result => {
        console.log(result);
      })
      // TO DO figure out a better way to deal with errors
      .catch(err => console.log(err));
  }

};

export default Server;