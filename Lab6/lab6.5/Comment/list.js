import {Comments} from "./base.js";
export let myAPI = (API_URL) =>{
    let urlComments = new Comments(API_URL);
    urlComments.getAll();
    urlComments.getOne(1);
}