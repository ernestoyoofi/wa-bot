/*
* Sorce Code : github.com/ernestoyoofi/wa-bot
* License    : MIT
* Author     : @ernestoyoofi
*/

// WhatsApp Modules API
const makeWASocket = require('@adiwajshing/baileys').default
const { DisconnectReason, useSingleFileAuthState } = require('@adiwajshing/baileys')
const { Boom } = require('@hapi/boom')

// Defaults Modules

const fs = require('fs')
const path = require("path")
const dirnamePath = path.resolve();

// Config Import

const config = require("./config.js")
const { fulltimes, fulltimesForConsole, yes_or_no, timescall, consoleClr, back_false, reveres_false } = require("./plugin")
const db = require("./database.js")

// Modules Installed
const axios = require("axios")
const googleIt = require("google-it")
const { Brainly } = require("brainly-scraper-v2");

const brain = new Brainly("id");

// Start Running
async function connectToWhatsApp () {
    // Auth QR Code
    const { state, saveState } = useSingleFileAuthState('./session.json')

    // Socket
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        browser: [config.clientConfig.user_agent, 'Chronme', '10.15.7']
    })

    // Update State

    sock.ev.on('creds.update', saveState)

    // Update Connection

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if(connection === 'close') {
            const shouldReconnect = lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
            console.log(consoleClr.FgRed('connection closed due to ' + lastDisconnect.error + ', reconnecting ' + shouldReconnect))
            if(shouldReconnect) {
              connectToWhatsApp()
              console.log(consoleClr.FgRed('Restart Client !'))
            }
        } else if(connection === 'open') {
            console.log(consoleClr.FgGreen('Koneksi Terhubung !'))
        }
    })

    // Socket Message

    sock.ev.on('messages.upsert', async (res) => {
      try {
        let rsl = res.messages[0]
        let msga = rsl.message?.conversation || rsl.message?.text || rsl.message?.extendedTextMessage?.text || rsl.message?.listResponseMessage?.title
        let chatId = rsl.key.remoteJid
        let sender = rsl.key.participant || rsl.key.remoteJid
        let pushname = rsl.pushName || "_Unknow User_"
        let command = msga.split(" ")[0].toLowerCase()
        let listcommand = rsl.message?.listResponseMessage?.title

        // True / False 
        let privasi = reveres_false(rsl.key.participant) 
        let group = back_false(rsl.key.participant) 

        function InfoDetails() {
          const os = require("os")
          return {
            wa: {
              name: pushname,
              number: sender?.split("@")[0]
            },
            bot: {
              platform: os.platform(),
              ostype: os.type(),
              salam: timescall(new Date().getHours(), "Selamat "),
              time: fulltimes,
              run_env: process.uptime(),
              run_os: os.uptime()
            }
          }
        }
        // Check Validation
        console.log(rsl)
        console.log(consoleClr.FgBlue(`https://wa.me/${sender?.split("@")[0]} \nName : ${pushname} \nGroup: ${group} \nMessage : ${msga}`))

        // Enable

        if(command === ".enablegroup") {
          db.addaccess(chatId)
        }

        // Check DB
        if(db.access(chatId)) {
          if(command === ".setting") {
            sock.sendMessage(chatId, { text: `┌─「 Settings 」──
│ » Id chat : ${yes_or_no(db.settings(chatId).chat)}
│ » Akses : ${yes_or_no(db.settings(chatId).access)}
│ » Antilink : ${yes_or_no(db.settings(chatId).antilink)}
│ » Fitur : ${yes_or_no(db.settings(chatId).high_feature)}
│ » NFSW Fitur : ${yes_or_no(db.settings(chatId).high_feature)}
│ » Hanya +62 : ${yes_or_no(db.settings(chatId).only_id)}
└───────────` }, { quoted: rsl })
          }
          if(command === ".menu") {
            const sections = [
              {
              title: "Semua Menu",
              rows: [
                  {
                    title: "All Menu",
                    description: "📃 Perlihatkan Semua List Yang Ada",
                    rowId: ".allmenu"
                  }
                ]
              }
            ]
            const listMessage = {
              text: `${config.menu.getmenu(InfoDetails())}`,
              footer: config.clientConfig.footer,
              buttonText: "List Menu",
              sections
            }
            sock.sendMessage(chatId, listMessage, { quoted: rsl, mentions: sender })
          }
          if(command === ".neko") {
            axios.get(`https://zenzapis.xyz/randomanime/neko?apikey=${config.zenapis.key}`).then(results => {
            const option = results.headers['content-type']?.split("/")[0]
            sock.sendMessage(chatId, {
              text: config.alertText.process
            })
            if(option === "image") {
              sock.sendMessage(chatId, {
                image: {
                  url: `https://zenzapis.xyz/randomanime/neko?apikey=${config.zenapis.key}`
                },
                caption: config.alertText.success
              },
              {
                quoted: rsl
              })
            } else {
              sock.sendMessage(chatId, {
                text: JSON.stringify(results.data, null, 2)
              },
              {
                quoted: rsl
              })
            }
          })
          }
          // NSFW Only
          if(db.settings(chatId).nfsw === true) {

          }
        }

      } catch(err) {
        const time = fulltimesForConsole
        const ErrText = `${err}

Location : ${dirnamePath}/logs/${time}-Error_Project.log`
        fs.writeFileSync(`./logs/${time}-Error_Project.log`, ErrText, "utf-8")
        console.log(consoleClr.FgRed(ErrText))
      }
    })
}
// Run Functions
connectToWhatsApp()
