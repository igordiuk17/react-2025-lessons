// import {IPost} from "../models/IPosts.ts";
// import {IUsers} from "../models/IUsers.ts";
import {IbaseResponsModel} from "../models/IbaseResponsModel.ts";
import {IPost} from "../models/IPosts.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const getAll= async <T,>(endpoint:string):Promise<T> =>{
    return await fetch(`${baseUrl}${endpoint}`).then(res=>res.json())
}
getAll<IbaseResponsModel & {posts:IPost[]}>('/posts')
