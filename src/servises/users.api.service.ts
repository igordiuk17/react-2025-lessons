const baseUrl = import.meta.env.VITE_BASE_URL;
export const getUser= async ()=> await fetch(`${baseUrl}/Users`)
.then(res=>res.json());