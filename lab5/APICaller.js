
  export default class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
      }
      async get(endpoint) {    
          const response = await fetch (`${this.baseUrl}/${endpoint}`);
          const data = await response.json();
          return data;
      }
  }