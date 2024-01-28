export default class Post {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
  
    async getAll() {
      return this.apiCaller.get('posts');
    }
  
    async getOne(postId) {
      return this.apiCaller.get(`posts/${postId}`);
    }
  }