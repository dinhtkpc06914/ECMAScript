console.log('-------------Bài lab của đình trần vn cuộc sống ở nhật---------------');
class APICaller {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
    async get(endpoint) {    
        const response = await fetch (`${this.baseUrl}/${endpoint}`);
        const data = await response.json();
        return data;
    }
  }

  class Comment {
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
  
  class Post {
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
  const apiCaller = new APICaller('http://localhost:3000');
  const commentAPI = new Comment(apiCaller);
  const postAPI = new Post(apiCaller);

  commentAPI.getAll().then(comments => console.log('Tất cả bình luận:', comments));
  commentAPI.getOne(1).then(comment => console.log('Bình luận với id là 1:', comment));
  postAPI.getAll().then(posts => console.log('Tất cả post:', posts));
  postAPI.getOne(2).then(post => console.log('Post với id là 2:', post));