import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
await m.reply(`╭「➻❥⎝⎝✧ХУЛИГАН✧⎠⎠➻❥」\n│➯ *(♦️)*ВВЕДИТЕ ТЕКСТ АУДИО, КОТОРОЕ ВЫ ХОТИТЕ ВОСПРОИЗВЕСТИ*\n︎╰───────────────╯\n\n\n`)
let pp = imagen3
let vn = './Audios/рожа.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭「➻❥⎝⎝✧ХУЛИГАН✧⎠⎠➻❥」
│➯ *Привет,➟${taguser}
│➯ *Создатель:➟Серёга
│➯ **Номер*➟79384135617
︎╰───────────────╯
💥᭢━━━━━━━━━᭥💥᭢
╭「➻❥ *голосовые бота* ➻❥」
° ඬ⃟🔊 _*спать*
° ඬ⃟🔊 _*правила*
° ඬ⃟🔊 _*мечтаю*
° ඬ⃟🔊 _*люблю*
° ඬ⃟🔊 _*надоел*
° ඬ⃟🔊 _*я тут*
° ඬ⃟🔊 _*сломайся*
° ඬ⃟🔊 _*кайфую*
° ඬ⃟🔊 _*устала*
° ඬ⃟🔊 _*чистка*
° ඬ⃟🔊 _*дурак*
° ඬ⃟🔊 _*страшная*
° ඬ⃟🔊 _*завтра*
° ඬ⃟🔊 _*мотивацыя*
° ඬ⃟🔊 _*Не любят*
° ඬ⃟🔊 _*интересно*
° ඬ⃟🔊 _*дура*
° ඬ⃟🔊 _*ботя*
° ඬ⃟🔊 _*Админы*
° ඬ⃟🔊 _*отвали*
° ඬ⃟🔊 _*что за группа*
° ඬ⃟🔊 _*бухаю*
° ඬ⃟🔊 _*хочу*
° ඬ⃟🔊 _*кушаю*
° ඬ⃟🔊 _*жопа*
° ඬ⃟🔊 _*красотка*
° ඬ⃟🔊 _*молчуны*
° ඬ⃟🔊 _*родная*
° ඬ⃟🔊 _*группа*
° ඬ⃟🔊 _*пошол я работать*
° ඬ⃟🔊 _*ебать*
° ඬ⃟🔊 _*ты кто*
° ඬ⃟🔊 _*аууу есть кто*
° ඬ⃟🔊 _*фууу*
° ඬ⃟🔊 _*завтра на работу*
° ඬ⃟🔊 _*иди сюда*
° ඬ⃟🔊 _*классно*
° ඬ⃟🔊 _*не пиши в личку*
° ඬ⃟🔊 _*пизда тебе*
│➯⎝⎝✧ХУЛИГАН✧⎠⎠✍
︎╰───────────────╯`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(меню2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audios|keyaudio|keyaudios)$/i
handler.exp = 50
handler.fail = null

export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}