import APIConnector from './APIConnector';

export default class Entity {
  constructor(additionalURL) {
    this.api = new APIConnector('https://shedu-api.azurewebsites.net');
    this.additionalURL = additionalURL;
  }

  list() {}

  create() {}

  get(params, callback) {
    return this.api.getData(this.additionalURL, params, callback);
  }

  remove() {}
}
