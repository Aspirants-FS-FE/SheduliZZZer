export default class APIConnector {
  constructor(URL) {
    this.URL = URL;
  }

  getData(additionalURL, params, callback) {
    const fullURL = this.URL + additionalURL + this.encodeURL(params);
    fetch(fullURL, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.log(error));
  }

  encodeURL(params) {
    const startSymbol = '?';
    return startSymbol + Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }
}
