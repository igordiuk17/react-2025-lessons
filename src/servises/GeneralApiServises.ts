// import {IPost} from "../models/APosts.ts";
// import {IUsers} from "../models/AUsers.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const getAll= async <T,>(endpoint:string):Promise<T> =>{
    return await fetch(`${baseUrl}${endpoint}`).then(res=>res.json())
}
