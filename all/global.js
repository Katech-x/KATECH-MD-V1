
/*

        🚯Cette race de bug bot est importante !! 🗿

 * Script : réalisé par X-TECH 🗿
 * Script : Strictement protégé !
 * Remarque : ce script n'est pas gratuit, respectez le créateur.
 *Merci à  X-TECH, Mr Death, Arthur Sasaki, Sigma Sasaki, Kerm, Limule Solitarius.
 * Merci d'avoir contribué à ce script :)
 * Propriétaire principal : https://t.me/lionel_desmond
 * Ma chaîne : https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41
 * Sécurité du scripts (résistant aux insectes aériens)
 * Attention : merci d'avoir acheté ce script diabolique
              J'espère que vous vous sentez à l'aise avec ce script
              n'achetez jamais chez quelqu'un d'autre
              acheter directement auprès du propriétaire (XTECH)
 *Merci...
 

*/

require("./module")
require("../settings")
require("./color")
require("./exif")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})