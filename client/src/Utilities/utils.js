import axios from 'axios';
import authService from './authService';

const token = authService.getToken();

const getAllItems = (url) => {
   return axios.get(url, {
      headers: { 'x-access-token': token }
    })
}

const getItem = (url, id) => {
   return axios.get(url + "/" + id , {
      headers: { 'x-access-token': token }
    })
}

const addItem = (url, obj) => {
   return axios.post(url, obj , {
      headers: { 'x-access-token': token }
    })
}

const editItem = (url, id, obj) => {
   return axios.put(url + "/" + id, obj , {
      headers: { 'x-access-token': token }
    })
}

const deleteItem = (url, id) => {
   return axios.delete(url + "/" + id , {
      headers: { 'x-access-token': token }
    })
}

const utils = { getAllItems, getItem, addItem, editItem, deleteItem };

export default utils;