import {useEffect } from "react";
import {getAll} from "../../servises/general.api.service.ts";
import {IbaseResponsModel} from "../../models/IbaseResponsModel.ts";
import {IUser} from "../../models/IUser.ts";
import {useState} from "react";

export const UsersComponent = () => {
    const [users,setUsers]= useState()<IUser[]>([]);
    useEffect(()=>{
        getAll<IbaseResponsModel & {users:IUser[]}>('/users')
            .then(value=>setUsers (value.users))
    },[])
    return (
        <div>
            {
                users.map((user:IUser)=><div key={user.id}>{user.username}</div>)
            }

        </div>
    );
};