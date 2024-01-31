import {Post} from "./base.js";

export let myAPI = (API_URL) =>{
    let urlPost = new Post(API_URL);
    urlPost.getAll();
    urlPost.getOne(1);
}
 
