let handler = async (m, { conn }) => {	
await conn.fetchBlocklist().then(async data => {
let txt = `*≡ Lista de bloqueados*\n*LIST OF BANS*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
for (let i of data) {
txt += `▢ @${i.split("@")[0]}\n`}
txt += "└───────────"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
throw 'Нет заблокированных любовей'})}
handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['списокблок', 'listblock'] 
handler.rowner = true

export default handler
