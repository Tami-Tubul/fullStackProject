const membersWS_Dal = require("../DALs/membersWS_DAL");
const membersModel = require("../DALs/membersModel");

const loadMembersToMongoDB = async () => {
    membersModel.count(async function (err, count) {
        if (!err && count === 0) {
            let resp = await membersWS_Dal.getMembers()
            let allMembers = resp.data;
            let membersDB = allMembers.map(x => {
                return { name: x.name, email: x.email, city: x.address.city }
            })
            membersModel.insertMany(membersDB, function (err, docs) {
                if (err) {
                    throw err;
                }
                else {
                     console.log("data inserted!!")
                }
            })
        }
    })

}


const getAllMemebers = () => {
    return new Promise((resolve, reject) => {
        membersModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getMemeberByID = (id) => {
    return new Promise((resolve, reject) => {
        membersModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const addMember = (obj) => {
    return new Promise((resolve, reject) => {
        let member = membersModel({
            name: obj.name,
            email: obj.email,
            city: obj.city
        })
        member.save(function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("created!")
            }
        })
    })
}

const updateMember = (id, obj) => {
    return new Promise((resolve, reject) => {
        membersModel.findByIdAndUpdate(id,
            {
                name: obj.name,
                email: obj.email,
                city: obj.city
            }
            , function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("updated!")
                }
            })
    })
}

const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        membersModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("deleted!")
            }
        })
    })
}




module.exports = { loadMembersToMongoDB, getAllMemebers, getMemeberByID, addMember, updateMember, deleteMember }