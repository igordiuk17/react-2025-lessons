import {useEffect, useState} from "react";
import {IUsers} from "../../models/AUsers.ts";
import {getUser} from "../../servises/UsersApiServises.ts";

export const UsersComponent=()=>{
    const [users,setUsers]= useState<IUser[]>([]);
    useEffect(()=>{
        getUsers().then( ({users}:IUsersResponse)=>{
            console.log(users)
            setUsers(users)
        });
    },deps:[]);
    return(
        <div>
            {users.map((user:IUser)=><UserComponent user{user} key={user.id}/>) }

        </div>
    );
};