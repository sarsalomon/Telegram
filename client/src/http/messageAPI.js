import { $authost, $host } from "./index";

export const fetchMessages = async (user, userId) => {
    const {data} = await $host.post('api/message/get/', {user, userId});
    return (data.rows);
}

export const sendMessage = async (info) => {
    const {data} = await $host.post('api/message/send/', info);
    return (data);
}