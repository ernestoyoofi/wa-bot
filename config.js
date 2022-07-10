const headers = function (Info) {
  return `${Info.bot.salam} @${Info.wa.number} 👋`
}
const getmenu = function (Info) {
return `${headers(Info)}

┌──「 Details 」───
│ » API : https://wa.me/${Info.wa.number}
│ » Nama : ${Info.wa.name}
│ » Waktu : ${Info.bot.time}
└──────────
┌──「 Info Bot 」──
│ » Platform : ${Info.bot.platform}
│ » Tipe Os : ${Info.bot.ostype}
│ » Runtime : ${Info.bot.run_env}
│ » Os Runtime : ${Info.bot.run_os}
└──────────`
}

const acakmenu = `┌──「 Menu Acak 」───
│ Tidak Ada :/
└───────────`
const downloadmenu = `
┌──「 Menu Download 」──
│ » .tiktok <url> *[!]* *( MP4 )*
│ » .ytmp3 <url> *[!]* *( !128Kbps )*
│ » .ytmp4 <url> *[!]* *( !720P )*
└────────────`
const searchmenu = `┌─「 Menu Pencarian 」──
│ » .google <query>     *[!]*
│ » .brainly <query>     *[!]*
│ » .ytsearch <query> *[!]*
└───────────`
const devmenu = `┌──「 Menu Developer 」──
│ » .fetchurl <url>    *[GET]*
│ » .posturl <url>     *[POST]*
│ » .github <username> *[API]*
│ » .gitclone <url>    *[API]*
└────────────`
const thanksto = `Berterimakasihlah kepada pembuatan

┌─「 Creators 」──
│ » WhatsApp Bot Project
│   • github.com/ernestoyoofi
└───────────
┌─「 Node_Modules 」──
│ » google-it
│   • github.com/PatNdeedham
│ » @adiwajshing/baileys
│   • github.com/adiwajshing
│ » Axios ( Organisasi / Perusahaan)
│   • github.com/axios
│ »  brainly-scraper-v2
│   • github.com/hansputera
└──────────
┌─「 Rest Api 」──
│ » Github API ( Organisasi / Perusahaan )
│   • docs.github.com/rest
│ » Zenz APIS
│   • zenzapis.xyz
└───────────`

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