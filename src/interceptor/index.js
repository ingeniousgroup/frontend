import axios from "axios";
window.alert('Welocome in Kirayewala...!');
const newAxios = axios.create({
    baseURL : 'https://kirayewalabackend.onrender.com/',
    timeout : 5000,
    headers : {
        "Content-Type":'application/json'
    },
});
export default newAxios;