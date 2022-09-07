const axios = require("axios")

const getMembers = () => {
    return axios.get("http://localhost:4000/api/members")
}

const getMemberByID = (id) => {
    return axios.get("http://localhost:4000/api/members/" + id)
}

const addMember = (obj) => {
    return axios.post("http://localhost:4000/api/members", obj)
 
}

const updateMember = (id, obj) => {
    return axios.put("http://localhost:4000/api/members/" + id, obj)
    
}

const deleteMember = (id) => {
    return axios.delete("http://localhost:4000/api/members/" + id)
   
}

module.exports = { getMembers, getMemberByID, addMember, updateMember, deleteMember }