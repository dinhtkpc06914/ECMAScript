console.log('-----------------Lab của trần đình------------------');



import * as showpost from "./Post/index.js";
import * as showComments from './Comment/index.js';

showpost.myAPI('http://localhost:3000/');
showComments.myAPI('http://localhost:3000/');