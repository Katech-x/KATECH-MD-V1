/*

     

 * Script : réalisé par X-TECH 🚯
 * Script : Strictement protégé !
 * Remarque : ce script n'est pas gratuit, respectez le créateur.
 *Merci à X-TECH, KERM ET ARTHUR.
 
 * Attention : Merci d'avoir acheté ce script du diable
              J'espère que vous vous sentez à l'aise avec ce script
              n'achetez jamais chez quelqu'un d'autre
              acheter directement auprès du propriétaire (KATECH)
 *Thank You...
 

*/
require("./all/module.js")
const { color } = require('./all/function')
const version = require("@whiskeysockets/baileys/package.json").version
//========== Setting Owner ==========//
global.owner = ["2250500107362","237656520674","22898555306","22897669189","242067274660","237698581946","22871255034"]
global.namaowner = "X-TECH"
global.namaowner2 = "KERM"

//======== Setting Bot & Link ========//
global.namabot = "_*KATECH MD V1*_" 
global.botname = "_*KATECH MD V1*_"
global.namabot2 = "KATECH MD V1"
global.namaowner = "KATECH MD V1 By Team Katech" // ini untuk funticon reply dll/respon cmd
global.linkfoto = "https://s4.aconvert.com/convert/p3r68-cdx67/a6k4w-2fgto.jpg" // untuk foto di cmd menu/spesialmenu/bugmenu
global.version = "KATECH MD V1"
global.foother = "KATECH MD V1"
global.idsaluran = "120363333825266715@g.us"
global.linkgc = 'https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45'
global.linksaluran = "https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41"
global.linkyt = '-'
global.linktele = "-"
global.packname = "KATECH MD V1"
global.author = "KATECH DEV"
global.newsletterName = "KATECH DEV"
global.target = 'https://www.en.sfcnavy.gov.bd/public/files/assets/ckeditor/kcfinder/upload.php'
global.premium = ["2250500107362","237656520674","22898555306","22897669189","242067274660","237698581946","22871255034"] // Premium User
global.wm = "KATECH MD V1"
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','∆']

//========== Setting Event ==========//
global.welcome = true
global.autoread = true 
global.anticall = false
global.autoreadsw = true
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========== Setting Foto ===========//

//========== Setting Panell & Gausah isi kalo gadaa ==========//
//========== Setting Panell & Gausah isi kalo gadaa ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""

global.fake = {
	anonim: 'https://s4.aconvert.com/convert/p3r68-cdx67/a6k4w-2fgto.jpg',
	thumbnailUrl: 'https://s4.aconvert.com/convert/p3r68-cdx67/a6k4w-2fgto.jpg',
	thumbnail: fs.readFileSync('./media/anggazyy.jpg'),
	docs: fs.readFileSync('./media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
    ch: 'https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41',
	gh: 'https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45',
	
}
//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = false
global.gopay = false
global.ovo = false
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Erreur! il y a une erreur Maître.",
"done": "C'est fait Maître", 
"wait": "S'il vous plaît, attendez une minute Maître.", 
"group": "*• Groupe uniquement* Cette fonctionnalité est réservée aux groupes !", 
"private": "*• Chat privé* Cette fonctionnalité est uniquement destinée aux chats privés !", 
"anggazyyprem": "*~ Katech System :*\n\n- Utilisateurs Premium uniquement, mec🗿.",
"admin": "*• Administrateur uniquement* Cette fonctionnalité est réservée aux administrateurs de groupe !", 
"adminbot": "*• Bot Admin* Cette fonctionnalité peut être utilisée lorsque le bot devient administrateur", 
"owner": "*Surtout cher propriétaire*", 
"query": "*Saisir la requête.*",
"developer": "*• Développeur uniquement* Cette fonctionnalité est réservée aux développeurs"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})