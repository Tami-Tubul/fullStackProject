const usersDal = require("../DALs/usersFileDAL")
const permissionsDal = require("../DALs/permissionsFileDAL")
const usersMongo = require("./usersMongo")
const date = require("../reusableCode/calculateDate")

const getAllUsers = async () => {
    let allUsers = await usersDal.getUsers()
    let usersPermissions = await permissionsDal.getPermissions()
    let usersDataFromMongo = await usersMongo.getUsersFromMongo()
    let fullUsersData = allUsers.map(x => {
        return { _id: x._id, firstName: x.firstName, lastName: x.lastName, userName: usersDataFromMongo.find(y => y._id == x._id).userName, password: usersDataFromMongo.find(y => y._id == x._id).password, createdDate: x.createdDate, sessionTimeOut: x.sessionTimeOut, permissions: usersPermissions.find(y => y._id == x._id).permissions }
    })
    return fullUsersData;

}

const getUserByID = async (id) => {

    let allUsers = await usersDal.getUsers()
    let user = allUsers.find(x => x._id == id)

    let usersPermissions = await permissionsDal.getPermissions()
    let userPermissions = usersPermissions.find(y => y._id == id)

    let usersDataFromMongo = await usersMongo.getUsersFromMongo()
    let userDataFromMongo = usersDataFromMongo.find(y => y._id == id)

    let fullUserData = { _id: user._id, firstName: user.firstName, lastName: user.lastName, userName: userDataFromMongo.userName, password: userDataFromMongo.password, createdDate: user.createdDate, sessionTimeOut: user.sessionTimeOut, permissions: userPermissions.permissions }

    return fullUserData;
}

const addUser = async (obj) => {
    let newUserName = { userName: obj.userName, password: "" }
    let status = await usersMongo.addUserToMongo(newUserName)

    if (status == "created!") {

        let allUsersFromMongo = await usersMongo.getUsersFromMongo()
        let newUserID = allUsersFromMongo.find(x => x.userName == newUserName.userName)._id

        let newUser = { _id: newUserID, firstName: obj.firstName, lastName: obj.lastName, createdDate: date.todayDate(), sessionTimeOut: obj.sessionTimeOut }
        let allUsers = await usersDal.getUsers()
        allUsers.push(newUser)
        let statusUsers = await usersDal.saveUsers({ "users": allUsers })

        let newPermissions = { _id: newUserID, permissions: obj.permissions }
        let allPermissions = await permissionsDal.getPermissions()
        allPermissions.push(newPermissions)
        let statusPermissions = await permissionsDal.savePermissions({ "permissions": allPermissions })

        if (statusUsers && statusPermissions == "Done!")
            return { status: status, userId: newUserID, createdDate: newUser.createdDate };
    }


}

const editUser = async (id, obj) => {

    let updatedUserName = { userName: obj.userName, password: obj.password }

    let status = await usersMongo.updateUserOnMongo(id, updatedUserName)

    if (status == "updated!") {

        let updatedUser = { _id: id, firstName: obj.firstName, lastName: obj.lastName, createdDate: obj.createdDate, sessionTimeOut: obj.sessionTimeOut }
        let allUsers = await usersDal.getUsers()
        let userIndex = allUsers.findIndex(x => x._id == id)
        if (userIndex > -1) {
            allUsers[userIndex] = updatedUser;
        }
        let statusUsers = await usersDal.saveUsers({ "users": allUsers })

        let updatedPermissions = { _id: id, permissions: obj.permissions }
        let allPermissions = await permissionsDal.getPermissions()
        let permissionsIndex = allPermissions.findIndex(x => x._id == id)
        if (permissionsIndex > -1) {
            allPermissions[permissionsIndex] = updatedPermissions;
        }
        let statusPermissions = await permissionsDal.savePermissions({ "permissions": allPermissions })

        if (statusUsers && statusPermissions == "Done!")
            return status;
    }


}

const deleteUser = async (id) => {

    let status = await usersMongo.deleteUserFromMongo(id)

    if (status == "deleted!") {

        let allUsers = await usersDal.getUsers()
        let userIndex = allUsers.findIndex(x => x._id == id)
        if (userIndex > -1) {
            allUsers.splice(userIndex, 1);
        }
        let statusUsers = await usersDal.saveUsers({ "users": allUsers })

        let allPermissions = await permissionsDal.getPermissions()
        let permissionsIndex = allPermissions.findIndex(x => x._id == id)
        if (permissionsIndex > -1) {
            allPermissions.splice(permissionsIndex, 1)
        }
        let statusPermissions = await permissionsDal.savePermissions({ "permissions": allPermissions })

        if (statusUsers && statusPermissions == "Done!")
            return status;
    }
}

module.exports = { getAllUsers, getUserByID, addUser, editUser, deleteUser }