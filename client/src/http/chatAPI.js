import { $authost, $host } from "./index";

export const fetchChats = async (user) => {
    const {data} = await $host.post('api/chat', {user});
    return (data.rows);
}

export const createChat = async (user, userId) => {
    const {data} = await $host.post('api/chat/createroom', {user, userId});
    return (data);
}

export const searchChat = async (name) =>{
    const {data} = await $host.post('api/chat/search', {name});
    return (data.rows);
}

export const getChat = async (id) =>{
    const {data} = await $host.post('api/chat/get', {id});
    return (data.rows);
}