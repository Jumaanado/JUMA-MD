"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*😆𝗝𝗨𝗠𝗔 𝗜𝗦 𝗢𝗡𝗟𝗜𝗡𝗘🧐* 🙏 \n\n ' + "𝗝𝗨𝗠𝗔 𝗖𝗔𝗡𝗧 𝗦𝗟𝗘𝗘𝗣😴";
    let d = '                                                                           𝗛𝗘𝗔𝗟𝗧𝗛 𝗦𝗧𝗔𝗧𝗨𝗦✨';
    let varmess = z + d;
    const img ='https://files.catbox.moe/kcjrrr.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
