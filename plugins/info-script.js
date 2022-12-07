import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `❏ *📮 Script VICTOR BOT*\n│• *Script :*\n│↳ Private ya hihihiヾ(〃^∇^)ﾉ\n│• *Node_Modules:*\n│↳ https://semawur.com/mwuPPdYT\n│↳ Ato tekan *npm  i/yarn install*\n│• *Base :* \n│↳ github.com/bochilgaming/games-wabot-md/\n *• Free Panel:*\n http://bit.ly/3VehFES\n ┗──────────═┅═──────────\n\n• *Mau script? Chat Owner!*\n• Jika menemukan bug Bot, harap lapor owner\n• Websites VICTOR BOT: https://www.tiktok.com/@leviatnansyah?_t=8UnaVTcn97p&_r=1 Jangan, lupa join grup ya\n• Bot ini free untuk digunakan di grup ini, kalo mau memasukan BOT ke grup lain minta izin owner dulu ya:)`
let kled = `https://telegra.ph/file/ff053a2dff6c14bcb0578.jpg`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'Script><.pdf',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':1000,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':sig,
'mediaType':2,
'previewType':'pdf',
'title':'VICTOR BOT',
'body':titlebot,
'thumbnail':await(await fetch(kled)).buffer(),
'sourceUrl':'https://instagram.com/levisuaran?igshid=YmMyMTA2M2Y='}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat, buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler
