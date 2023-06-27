import axios from 'axios';


const getAllItems = (url, token) => {
   return axios.get(url, {
      headers: { 'x-access-token': token }
   })
}

const getItem = (url, id, token) => {
   return axios.get(url + "/" + id, {
      headers: { 'x-access-token': token }
   })
}

const addItem = (url, obj, token) => {
   return axios.post(url, obj, {
      headers: { 'x-access-token': token }
   })
}

const editItem = (url, id, obj, token) => {
   return axios.put(url + "/" + id, obj, {
      headers: { 'x-access-token': token }
   })
}

const deleteItem = (url, id, token) => {
   return axios.delete(url + "/" + id, {
      headers: { 'x-access-token': token }
   })
}

const utils = { getAllItems, getItem, addItem, editItem, deleteItem };

export default utils;