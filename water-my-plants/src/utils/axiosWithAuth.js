import axios from 'axios';

export const getToken = () => {
    localStorage.getItem('token');
};

export const axiosWithAuth = () => {
    return axios.create({
        //config object, will need to update this to our baseURL herokuapp from backend
        baseURL: 'https://',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};