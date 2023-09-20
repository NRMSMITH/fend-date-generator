import axios from 'axios';

const API = axios.create({
    baseURL: `https://date-generator.onrender.com/api`
});

export const getDates = () => {
    return API
    .get('/dates')
    .then((res) => {
        return res.data;
    })
}

export const postDate = (date) => {
    return API
    .post('/dates', date)
    .then((res) => {
        return res.data
    })
}

export const deleteDate = (id) => {
    return API
    .delete(`/dates/${id}`)
    .then((res) => {
        return res.data
    })
}