console.log('-------------Bài lab của đình trần vn cuộc sống ở nhật---------------');


import APICaller from './modules/APICaller.js';
import Comment from './modules/comment.js';
import Post from './modules/post.js';

const apiCaller = new APICaller('http://localhost:3000');
const commentAPI = new Comment(apiCaller);
const postAPI = new Post(apiCaller);

commentAPI.getAll().then(comments => console.log('Tất cả bình luận:', comments));
commentAPI.getOne(1).then(comment => console.log('Bình luận với id là 1:', comment));
postAPI.getAll().then(posts => console.log('Tất cả post:', posts));
postAPI.getOne(2).then(post => console.log('Post với id là 2:', post));