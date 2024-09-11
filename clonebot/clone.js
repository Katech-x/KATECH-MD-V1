require("../settings")
require("./settings")
const store = makeInMemoryStore({ "logger": pino({ "level": "silent" }).child({ "level": "silent" })})

exports.makeWASocket = (connectionUpdate, options = {}) => {
  const anggazyy = makeWASocket(connectionUpdate)
  
  anggazyy.name = `${botname}`
  anggazyy.number = anggazyy.user?.["id"]["split"](":")[0] + "@s.whatsapp.net"
  anggazyy.owner = {
    "name": `${X-TECH} WhatsApp`,
    "number": `${2250500107362}@s.whatsapp.net`
  }
  
  anggazyy.reply = async (mesegs, teks, urlImage) => {
    if (!urlImage) {
    try {
      await anggazyy.sendMessage(mesegs.chat, {
      "text": teks
      }, { "quoted": mesegs })
    } catch (error) {
      console.log("Il y a une erreur" + error)
    }
    } else {
    try {
      await anggazyy.sendMessage(mesegs.chat, {
      "image": { "url": '' + urlImage },
      "caption": teks
      }, { "quoted": mesegs })
    } catch (error) {
      console.log("Il y a une erreur" + error)
    }
    }
  }
  
  anggazyy.groups = async () => {
    const pArtiCpnts = await anggazyy.groupFetchAllParticipating()
    return Object.values(pArtiCpnts)
  }
  
  anggazyy.showGroups = async msgse => {
    const getDlgc = await anggazyy.groups()
    try {
    const All1 = getDlgc.map((txty1, txty2) => {
      const meksh = ["*NOM*: " + txty1.subject + "\n*ID*: " + txty1.id.split("@")[0] + "@g.us" + "\n*NOMBRE DE MEMBRES*: " + txty1.participants.length + " Membre"].join("\n\n")
      return meksh
    }).join("\n\n")
    anggazyy.reply(msgse, "List Group\n\n" + All1)
    } catch (Ror) {
    anggazyy.reply(msgse, "List Group\n\n" + Ror)
    console.log("ERROR! " + "List Group\n" + Ror)
    }
  }
  
  anggazyy.pushContacts = async (nsgegs, idgcnye, txt1ortxt2) => {
    try {
    const mtData = await anggazyy.groupMetadata(idgcnye)
    let { participants } = mtData
    participants = participants.map(v => v.id)
    const Txt1 = txt1ortxt2.split("|")[0]
    const Txt2 = parseInt((txt1ortxt2.split("|")[1] || 15) + "000")
    if (!Txt1 || !Txt2 || isNaN(Txt2)) {
      return anggazyy.reply(nsgegs, "PUSH CONTACTS\n\n" + "*Le format que vous avez fourni n'est pas valide*\n*Contoh*: .pushcontacts Hello ... Pesan|5*")
    } else {
      await anggazyy.reply(nsgegs, "PUSH CONTACTS\n\n" + "*Démarrer les contacts push*:\n*Target*: " + participants.length + " members\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2)
      let prtcpnts = 0
      const stIntvral = setInterval(async () => {
      if (prtcpnts === participants.length) {
        await anggazyy.reply(nsgegs, "PUSH CONTACTS\n\n" + "*Push Contacts selesai*\n*" + prtcpnts + " le message a été envoyé avec succès*")
        return clearInterval(stIntvral)
      } else {
        if (Object.keys(nsgegs.message)[0] === "imageMessage") {
        const urlImeg = await downloadMediaMessage(nsgegs, "buffer", {}, { "logger": pino })
        await anggazyy.sendMessage(participants[prtcpnts], { "image": urlImeg, "caption": '' + Txt1 })
        } else {
        await anggazyy.sendMessage(participants[prtcpnts], { "text": '' + Txt1 })
        }
        prtcpnts++
      }
      }, Txt2)
    }
    } catch (conError) {
    anggazyy.reply(nsgegs, "CONTACTS PUSH\n" + conError)
    }
  }
  
  anggazyy.sendChatAllGroup = async (mesegesp, tx1tx2) => {
    const getidnya = await anggazyy.groupFetchAllParticipating()
    const groups = Object.entries(getidnya).slice(0).map((entry) => entry[1])
    const anu = groups.map((v) => v.id)
    try {
    const Txt1 = tx1tx2.split("|")[0]
    const Txt2 = parseInt((tx1tx2.split("|")[1] || 15) + "000")
    if (!Txt1 || !Txt2 || isNaN(Txt2)) {
      return anggazyy.reply(mesegesp, "CHAT ALL GROUP\n\n" + "*Le format que vous avez fourni n'est pas valide*\n*Contoh*: .jpm Hello🔗 ... Pesan|5*")
    } else {
      await anggazyy.reply(mesegesp, "CHAT ALL GROUP\n\n" + "*Début de la diffusion.jpm Bonjour... Message|5*:\n*Cible*: " + anu.length + " groups\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2)
      let idgcwy = 0
      const stIntvral = setInterval(async () => {
      if (idgcwy === anu.length) {
        await anggazyy.reply(mesegesp, "DISCUTER TOUS LES GROUPES\n\n" + "*Diffusion terminée*\n*" + idgcwy + " pesan telah berhasil dikirim*")
        return clearInterval(stIntvral)
      } else {
        if (Object.keys(mesegesp.message)[0] === "imageMessage") {
        const urlImeg = await downloadMediaMessage(mesegesp, "buffer", {}, { "logger": pino })
        await anggazyy.sendMessage(anu[idgcwy], { "image": urlImeg, "caption": '' + Txt1 })
        } else {
        await anggazyy.sendMessage(anu[idgcwy], { "text": '' + Txt1 })
        }
        idgcwy++
      }
      }, Txt2)
    }
    } catch (ErrorK) {
    anggazyy.reply(mesegesp, "DISCUTER TOUS LES GROUPES\n\n" + ErrorK)
    }
  }
  
  anggazyy.saveContacts = async (messgs, Prtcipnts) => {
    try {
    const getPrtpnts = Prtcipnts.map((send1, send2) => {
      const SvdQ = "[" + send2 + "] Auto saved by " + anggazyy.name + " (" + send1.id.split("@")[0x0] + ")"
      const hsilDtbs = ["BEGIN:VCARD", "VERSION:3.0", "FN:" + SvdQ, "ORG:" + anggazyy.name, "TEL;type=CELL;type=VOICE;waid=" + send1.id.split("@")[0x0] + ":+" + send1.id.split("@")[0x0], "END:VCARD", ''].join("\n")
      return hsilDtbs
    }).join('')
    await anggazyy.sendMessage(messgs.key.remoteJid, { "document": Buffer.from(getPrtpnts, "utf8"), "fileName": "contacts.vcf", "caption": "*Veuillez appuyer pour enregistrer le contact*", "mimetype": "text/x-vcard" }, { "quoted": messgs })
    } catch (SvdError) {
    anggazyy.reply(messgs, "AUTO SAVE CONTACTS\n\n" + '' + SvdError)
    }
  }
  
  anggazyy.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
    let decode = jidDecode(jid) || {}
    return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
  }
  
  if (anggazyy.user && anggazyy.user.id) anggazyy.user.jid = anggazyy.decodeJid(anggazyy.user.id)
  anggazyy.chats = {}
  anggazyy.contacts = {}
  
  anggazyy.downloadM = async (m, type, filename = '') => {
    if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
    const stream = await downloadContentFromMessage(m, type)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    if (filename) await fs.promises.writeFile(filename, buffer)
    return filename && fs.existsSync(filename) ? filename : buffer
  }
  
  anggazyy.downloadMediaMessage = async (message) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    return buffer
  }
  
  anggazyy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }
  
  anggazyy.sendStimg = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    buffer = await writeExifImg(buff, options)
    } else {
    buffer = await imageToWebp(buff)
    }
    await anggazyy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
  }

  anggazyy.sendStvid = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    buffer = await writeExifVid(buff, options)
    } else {
    buffer = await videoToWebp(buff)
    }
    await anggazyy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
  }
  Object.defineProperty(anggazyy, 'name', {
    value: { ...(options.chats || {}) },
    configurable: true,
  })
  if (anggazyy.user?.id) anggazyy.user.jid = anggazyy.decodeJid(anggazyy.user.id)
  store.bind(anggazyy.ev)
  return anggazyy
}