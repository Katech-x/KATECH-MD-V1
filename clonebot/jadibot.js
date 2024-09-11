require("../settings")
require("./settings")
const store = makeInMemoryStore({ "logger": pino({ "level": "silent" }).child({ "level": "silent" })})
const nodeCache = new NodeCache()
const { color, bgcolor } = require("../all/color");
const useCODE = true
const useQR = !useCODE

const client = {}

const jadibot = async (anggazyy, m, from) => {
  const { state, saveCreds } = await useMultiFileAuthState(`./src/jadibot/${m.sender.split("@")[0]}`)
  try {
    async function startJadibot() {
      const { version, isLatest } = await fetchLatestBaileysVersion()
      client[from] = require("./clone").makeWASocket({
        version,
        keepAliveInternalMs: 30000,
        printQRInTerminal: useQR && !useCODE,
        generateHighQualityLinkPreview: true,
        msgRetryCounterCache: nodeCache,
        markOnlineOnConnect: true,
        defaultQueryTimeoutMs: undefined,
        logger: pino({ level: "fatal" }),
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.04"]
      })
      store.bind(client[from].ev)
      
      if (useCODE && !client[from].user && !client[from].authState.creds.registered) {
        setTimeout(async () => {
          code = await client[from].requestPairingCode(m.sender.split("@")[0])
          code = code?.match(/.{1,4}/g)?.join("-") || code
          anggazyy.sendMessage(from, { text: `Kode Pairing @${m.sender.split("@")[0]} Adalah : ${code}\n\n*TUTORIAL*\n\n1. Cliquez sur les trois points dans le coin supérieur droit\n2. Appuyez sur WhatsApp Web\n3. "Lien avec le numéro de téléphone uniquement"\n\n  Le code expire dans 20 secondes\n\n*SI VOUS VOULEZ ARRÊTER TAPEZ .stopjadibot*`, mentions: [m.sender] }, { quoted: m })
        }, 3000)
      }
      
      client[from].ev.on("connection.update", async up => {
        const { lastDisconnect, connection } = up
        const reason = new Boom(lastDisconnect?.error)?.output.statusCode
        if (connection == "open") {
          console.log("Terhubung ( " + client[from].user?.["id"]["split"](":")[0] + " )")
        }
        if (connection === "close") {
          if (reason === DisconnectReason.restartRequired) {
            console.log("Redémarrage requis, redémarrage en cours...")
            return startJadibot()
          } else if (reason === DisconnectReason.timedOut) {
            console.log(color("Délai de connexion expiré, reconnexion..."))
            return startJadibot()
          } else {
            return anggazyy.sendMessage(from, { text: "Vous n'êtes plus un robot." })
          }
        }
      })
      
      client[from].ev.process(async (events) => {
        if (events['messages.upsert']) {
          const upsert = events['messages.upsert']
          for (let msg of upsert.messages) {
            if (!msg.message) {
              return
            }
            if (msg.key.remoteJid === 'status@broadcast') {
              if (msg.message?.protocolMessage) return
              console.log(`Afficher l'état ${msg.pushName} ${msg.key.participant.split('@')[0]}`)
              await client[from].readMessages([msg.key])
              await delay(1000)
              return await client[from].readMessages([msg.key])
            }
            const m = smsg(client[from], msg)
            require("../katech")(client[from], m, store)
          }
        }
      })
      
      client[from].ev.on('group-participants.update', async (anu) => {
        try {
          var isWelcome = welcome.includes(anu.id)
        } catch {
          var isWelcome = false
        }
        if (isWelcome) {
          console.log(anu)
          const metadata = await client[from].groupMetadata(anu.id)
          const participants = anu.participants
          for (let num of participants) {
            try {
              ppuser = await client[from].profilePictureUrl(num, 'image')
            } catch {
              ppuser = 'https://s4.aconvert.com/convert/p3r68-cdx67/a6k4w-2fgto.jpg'
            }
            if (anu.action == 'add') {
              const txtwel = `Welcome @${num.split("@")[0]}, J'espère que tu te sens chez toi et toujours en bonne santé`
              await client[from].sendMessage(anu.id, { image: { url: ppuser }, caption: txtwel, contextInfo: { forwardingScore: 9999999, isForwarded: true, mentionedJid: [num] }})
            } else if (anu.action == 'remove') {
              const txtlea = `Au revoir @${num.split("@")[0]}, n'oublie pas tes amis ici, j'espère que tu es toujours en bonne santé`
              await client[from].sendMessage(anu.id, { image: { url: ppuser }, caption: txtlea, contextInfo: { forwardingScore: 9999999, isForwarded: true, mentionedJid: [num] }})
            }
          }
        }
      })
      
      client[from].ev.on('creds.update', saveCreds)
    }
    return startJadibot()
  } catch (e) {
    console.log(e)
  }
}

async function stopjadibot(anggazyy, from) {
  if (!Object.keys(client).includes(from)) {
    return anggazyy.sendMessage(from, { text: "Vous n'êtes pas sur la liste, c'est donc un bot." })
  }
  try {
    client[from].end("Stop")
  } catch {}
  delete client[from]
  rimraf.sync(`./database/jadibot/${from.split("@")[0]}`)
}

async function listjadibot(anggazyy, m) {
  let from = m.key.remoteJid
  let mentions = []
  let text = "List Jadi Bot :\n"
  for (let jadibot of Object.values(client)) {
    mentions.push(jadibot.user.jid)
    text += ` × @${jadibot.user.jid.split("@")[0]}\n`
  }
  return anggazyy.sendMessage(from, { text: text.trim(), mentions, })
}

module.exports = { jadibot, stopjadibot, listjadibot }