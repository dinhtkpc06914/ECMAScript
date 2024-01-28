export default class Comment {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
  
    async getAll() {
      return this.apiCaller.get('comments');
    }
  
    async getOne(idComments) {
      return this.apiCaller.get(`comments/${idComments}`);
    }
  }