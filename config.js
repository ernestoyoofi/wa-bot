const headers = function (Info) {
  return `${Info.bot.salam} @${Info.wa.number} ๐`
}
const getmenu = function (Info) {
return `${headers(Info)}

โโโใ Details ใโโโ
โ ยป API : https://wa.me/${Info.wa.number}
โ ยป Nama : ${Info.wa.name}
โ ยป Waktu : ${Info.bot.time}
โโโโโโโโโโโ
โโโใ Info Bot ใโโ
โ ยป Platform : ${Info.bot.platform}
โ ยป Tipe Os : ${Info.bot.ostype}
โ ยป Runtime : ${Info.bot.run_env}
โ ยป Os Runtime : ${Info.bot.run_os}
โโโโโโโโโโโ`
}

const acakmenu = `โโโใ Menu Acak ใโโโ
โ Tidak Ada :/
โโโโโโโโโโโโ`
const downloadmenu = `
โโโใ Menu Download ใโโ
โ ยป .tiktok <url> *[!]* *( MP4 )*
โ ยป .ytmp3 <url> *[!]* *( !128Kbps )*
โ ยป .ytmp4 <url> *[!]* *( !720P )*
โโโโโโโโโโโโโ`
const searchmenu = `โโใ Menu Pencarian ใโโ
โ ยป .google <query>     *[!]*
โ ยป .brainly <query>     *[!]*
โ ยป .ytsearch <query> *[!]*
โโโโโโโโโโโโ`
const devmenu = `โโโใ Menu Developer ใโโ
โ ยป .fetchurl <url>    *[GET]*
โ ยป .posturl <url>     *[POST]*
โ ยป .github <username> *[API]*
โ ยป .gitclone <url>    *[API]*
โโโโโโโโโโโโโ`
const thanksto = `Berterimakasihlah kepada pembuatan

โโใ Creators ใโโ
โ ยป WhatsApp Bot Project
โ   โข github.com/ernestoyoofi
โโโโโโโโโโโโ
โโใ Node_Modules ใโโ
โ ยป google-it
โ   โข github.com/PatNdeedham
โ ยป @adiwajshing/baileys
โ   โข github.com/adiwajshing
โ ยป Axios ( Organisasi / Perusahaan)
โ   โข github.com/axios
โ ยป  brainly-scraper-v2
โ   โข github.com/hansputera
โโโโโโโโโโโ
โโใ Rest Api ใโโ
โ ยป Github API ( Organisasi / Perusahaan )
โ   โข docs.github.com/rest
โ ยป Zenz APIS
โ   โข zenzapis.xyz
โโโโโโโโโโโโ`

exports.menu = {
  getmenu: function (info) {
    return `${getmenu(info)}`
  },
  allmenu: function (info) {
    return`${headers(info)}

${acakmenu}
${downloadmenu}
${searchmenu}
${devmenu}
${thanksto}`
  }
}

// Alert
const group = "Hanya digunakan digrup"
const private = "Hanya digunakan diprivasi chat"
const admin = "Hanya Admin"
const process = "Tunggu Bentar"
const success = "Tuh Kak"
const error = "Fitur Errror"

exports.alertText = {
 group,
 private,
 admin,
 process,
 success,
 error
}
exports.clientConfig = {
 user_agent: "Chino Punya Saya !",
 footer: "I Need Money !"
}
exports.zenapis = {
  key: 'ec9ac315bd29',
}