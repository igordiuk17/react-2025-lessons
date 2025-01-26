const baseUrl = import.meta.env.VITE_BASE_URL;
export const getPosts= async ()=> await fetch(`${baseUrl}/Posts`)
    .then(res=>res.json());