const membersApiDal = require("../DALs/membersApiDAL")

const getAllMembers = async () => {
    let resp = await membersApiDal.getMembers()
    return resp.data;
}

const getMemberByID = async (id) => {
    let resp = await membersApiDal.getMemberByID(id)
    return resp.data;
}

const addMember = async (obj) => {
    let resp = await membersApiDal.addMember(obj)
    return resp.data;
}

const updateMember = async (id,obj) => {
    let resp = await membersApiDal.updateMember(id, obj)
    return resp.data;
}

const deleteMember = async (id) => {
    let resp = await membersApiDal.deleteMember(id)
    return resp.data;
}

module.exports = { getAllMembers, getMemberByID, addMember ,updateMember ,deleteMember}