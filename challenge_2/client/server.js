const Server = {
  address: 'http://localhost:4000/',
  getPrices: () => {
    // TO DO : send data about dates in body of request
    // TO DO : send stock name in body of request
    var url = `${Server.address}prices`;
    return fetch(url)
      .then(result => result.json())
      .catch(err => console.log(err));
  }

}

export default Server;