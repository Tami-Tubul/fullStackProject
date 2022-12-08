import axios from 'axios';

const getAllItems = (url) => {
   return axios.get(url)
}

const getItem = (url, id) => {
   return axios.get(url + "/" + id)
}

const addItem = (url, obj) => {
   return axios.post(url, obj)
}

const editItem = (url, id, obj) => {
   return axios.put(url + "/" + id, obj)
}

const deleteItem = (url, id) => {
   return axios.delete(url + "/" + id)
}

const utils = { getAllItems, getItem, addItem, editItem, deleteItem };

export default utils;