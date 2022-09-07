const jFile = require("jsonfile")

const getPermissions = () => {
    return new Promise((resolve, reject) => {
        jFile.readFile(__dirname + '/../Data/permissions.json', function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data.permissions)
            }
        })
    })
}

const savePermissions = (obj) => {
    return new Promise((resolve, reject) => {
        jFile.writeFile(__dirname + '/../Data/permissions.json', obj, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("Done!")
            }
        })
    })
}

module.exports = { getPermissions, savePermissions }