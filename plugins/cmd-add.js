let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] ОТВЕТЬТЕ НА НАКЛЕЙКУ ИЛИ ИЗОБРАЖЕНИЕ, К КОТОРОМУ ВЫ ХОТИТЕ ДОБАВИТЬ КОМАНДУ ИЛИ ТЕКСТ*'
if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] ВЫ МОЖЕТЕ НАЗНАЧАТЬ КОМАНДЫ ИЛИ ТЕКСТЫ ТОЛЬКО СТИКЕРАМ ИЛИ ИЗОБРАЖЕНИЯМ*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Ошибка использования отсутствует текст*\n\n*Правильное использование команды:*\n*—◉ ${usedPrefix + command} <texto> <ответчик наклейка с изображением>*\n\n*Пример правильного использования команды:*\n*—◉ ${usedPrefix + command} <#меню> <ответчик наклейка с изображением>*\n\n\n*`
 let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗]*ТОЛЬКО ВЛАДЕЛЕЦ МОЖЕТ ВНЕСТИ ИЗМЕНЕНИЯ*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] ТЕКСТ/КОМАНДА, ПРИСВОЕННЫЕ СТИКЕРУ/ИЗОБРАЖЕНИЮ, БЫЛИ ПРАВИЛЬНО ДОБАВЛЕНЫ В БАЗУ ДАННЫХ*`)
}
handler.command = ['setcmd', 'добавитькоманду', 'cmdadd', 'cmdset']
handler.rowner = true

export default handler
