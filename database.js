const fs = require("fs")
const pathDatabase = `./database.json`

const DatabaseRes = JSON.parse(fs.readFileSync(pathDatabase, "utf-8"))

exports.access = function (chat) {
  const dbCheck = DatabaseRes.chat
  let res = ""
  for(let i in dbCheck) {
    res += dbCheck[i].chat + " "
  }
  const getEd = res.split(" ").indexOf(chat)
  return dbCheck[getEd]?.access || false
}
exports.addaccess = function (chat) {
  const dbCheck = DatabaseRes.chat
  const addChat = {
    chat: chat,
    access: true,
    antilink: false,
    high_feature: false,
    nsfw: false,
    only_id: false,
  }
  dbCheck.push(addChat)
  fs.writeFileSync(pathDatabase, JSON.stringify(dbCheck), "utf-8")
}
exports.settings = function (chat) {
  const dbCheck = DatabaseRes.chat
  let res = ""
  for(let i in dbCheck) {
    res += dbCheck[i].chat + " "
  }
  const getEd = res.split(" ").indexOf(chat)
  return dbCheck[getEd]
}