const jFile = require("jsonfile")

const getUsers = () => {
    return new Promise((resolve, reject) => {
        jFile.readFile(__dirname + '/../Data/users.json', function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data.users)
            }
        })
    })
}

const saveUsers = (obj) => {
    return new Promise((resolve, reject) => {
        jFile.writeFile(__dirname + '/../Data/users.json', obj, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("Done!")
            }
        })
    })
}

module.exports = { getUsers, saveUsers }