export default class APIConnector {
  static getData(call) {
    const URL = 'https://shedu-api.azurewebsites.net';
    const callback = function(data) {
      console.log(call);
      call(data);
    }
    fetch(URL + '/get_data', { method: 'GET' })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
  }
}
