// const { fulltimes } = require("./plugin")
// console.log(fulltimes)
// const db = require("./database.js")
// if(db.access("120363041607764234@g.us")) {
//   console.log("Access Success")
// }
// const db = [
//  {
//   chat: "1234@wa.me",
//   access: true
//  },
//  {
//   chat: "1222@wa.me",
//   access: true
//  },
//  {
//   chat: "3333@wa.me",
//   access: true
//  }
// ]
// const Beedit = {
//   chat: "1234@wa.me",
//   access: true
// }
// const edit = {
//   chat: "1234@wa.me",
//   access: false
// }
// let resPet = []
// for(let i in db) {
//  resPet.push(db[i])
// }
// const forMated = JSON.stringify(resPet)
// console.log(forMated.replace(JSON.stringify(Beedit), JSON.stringify(edit)))
// const db = require("./database.js")
// const chatId = "120363024278036708@g.us"
// const text = `┌─「 Settings 」──
// │ » Id Chat : ${db.settings(chatId)}
// └───────────`
// console.log(db.settings(chatId))
const axios = require("axios")

axios.get(`https://zenzapis.xyz/randomanime/neko?apikey=ec9ac315bd29`).then(results => {
  const option = results.headers['content-type']?.split("/")[0]
  if(option === "image") {
    console.log("Image Url : https://zenzapis.xyz/randomanime/neko?apikey=ec9ac315bd29")
  } else {
    console.log(JSON.stringify(results.data, null, 2))
  }
})