import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "79531126750@g.us","inviteCode": "m","groupName": "P", "caption": '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 2000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `*??? ??????s??????* @${m.sender.split("@")[0]}, *????? ?? ?????? ?? ??x?? ??? ???????? ?????s ?????????s -.-!*`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `[?]s? ??????? ?? ???s??? ??? ???????? ?????s ?????????s??*\n`, `${isBotAdmin ? '' : 'Я не администратор, я ничего не могу сделать:/'}`, author, ['[??s??????? ???? ?????s]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin && bot.restrict) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `*?????? ?? ???? ???? ?????*${"\n".repeat(400)}\n=>?????? : wa.me/${m.sender.split("@")[0]}\n=>????s  : ${name}\n*[?]????? ?? ?????? ?? ??x?? ??? ???????? ?????s ?????????s ??? ????? ???s????? ?????s ?? ??s ??s??s?????s *`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[?] *???? ???????? ???????s ?? ????????0, ?? ????? ????? ??? ???????? ?? ???? ??s????????!*')
    }
    return !0
}
