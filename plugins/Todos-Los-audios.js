let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './Audios/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(люблю|Люблю)/gi)) {
let vn = './Audios/люблю.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(мечтаю|Мечтаю)/gi)) {    
let vn = './Audios/мечта.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(правила|Правила)/gi)) {    
let vn = './Audios/правила.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    

    
if (!chat.isBanned && chat.audios && m.text.match(/(спать|Спать)/gi)) {    
let vn = './Audios/спать.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
   
if (!chat.isBanned && chat.audios && m.text.match(/(Сломайся|сломайся)/gi)) {    
let vn = './Audios/сломайся.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
    
if (!chat.isBanned && chat.audios && m.text.match(/(Я тут|я тут)/gi)) {    
let vn = './Audios/ятут.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(отвали|Отвали|Надоел|надоел)/gi)) {    
let vn = './Audios/отцтань.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Кайф|кайф)/gi)) {    
let vn = './Audios/кайф.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Секс|секс)/gi)) {    
let vn = './Audios/секс.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(познакомимся|Познакомимся)/gi)) {    
let vn = './Audios/поз.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(хочу|Хочу)/gi)) {    
let vn = './Audios/хочу.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(спам|Спам)/gi)) {    
let vn = './Audios/спам.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(бухаю|Бухаю)/gi)) {    
let vn = './Audios/бухаю.mp4'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(что за группа|Что за группа)/gi)) {    
let vn = './Audios/что.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Ведро с болтами|ведро с болтами)/gi)) {    
let vn = './Audios/сье.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Отвали|отвали)/gi)) {    
let vn = './Audios/отвали.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
    
if (!chat.isBanned && chat.audios && m.text.match(/(Админы)/gi)) {    
let vn = './Audios/админы.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ботя|Ботя)/gi)) {    
let vn = './Audios/бот.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
    
if (!chat.isBanned && chat.audios && m.text.match(/(Дура|дура)/gi)) {    
let vn = './Audios/дура.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Интересно|интересно)/gi)) {    
let vn = './Audios/интересно.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Не любит|не любит|любит|Любит|Не любят|не любят)/gi)) {    
let vn = './Audios/любят.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Мотивацыя|мотивацыя)/gi)) {    
let vn = './Audios/мотивацыя.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(потом|Потом|Завтра|завтра)/gi)) {    
let vn = './Audios/потом.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(страшная|Страшная)/gi)) {    
let vn = './Audios/страшная.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(тупой|Тупой|Дурак|дурак|тупая|Тупая)/gi)) {    
let vn = './Audios/тупой.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(удалю|Удалю|Чистка|чистка)/gi)) {    
let vn = './Audios/удалю.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(устал|Устал|устала|Устала)/gi)) {    
let vn = './Audios/устал.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(группа|Группа)/gi)) {    
let vn = './Audios/группа.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(роднуль|Роднуль|родная|Родная)/gi)) {    
let vn = './Audios/роднуль.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(молчуны|Молчуны|общаться|Общаться)/gi)) {    
let vn = './Audios/молчуны.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(жопа|Жопа)/gi)) {    
let vn = './Audios/жопа.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(красотка|Красотка|красавица|Красавица)/gi)) {    
let vn = './Audios/красотка.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(кушаю|Кушаю|обед|Обед)/gi)) {    
let vn = './Audios/обедаю.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Пошла я работать|Пошла я работать|Пошол я работать|пошол я работать)/gi)) {    
let vn = './Audios/пошла я работать.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(досвидули|Досвидули)/gi)) {    
let vn = './Audios/досвее.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    



if (!chat.isBanned && chat.audios && m.text.match(/(ебать|Ебать)/gi)) {    
let vn = './Audios/ебать.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(ты кто|Ты кто)/gi)) {    
let vn = './Audios/ты кто.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(аууу есть кто|Аууу есть кто)/gi)) {    
let vn = './Audios/аууу.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
if (!chat.isBanned && chat.audios && m.text.match(/(фууу|Фууу)/gi)) {    
let vn = './Audios/фуу.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
if (!chat.isBanned && chat.audios && m.text.match(/(иди сюда|Иди сюда)/gi)) {    
let vn = './Audios/иди сюда.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(классно|Классно)/gi)) {    
let vn = './Audios/класс.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (!chat.isBanned && chat.audios && m.text.match(/(не пиши в личку|Не пиши в личку)/gi)) {    
let vn = './Audios/не пиши в личку.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(пизда тебе|Пизда тебе)/gi)) {    
let vn = './Audios/пизда.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(утром на работу|Утром на работу)/gi)) {    
let vn = './Audios/завтра.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(🎄|🌲)/gi)) {    
let vn = './Audios/Bot елка.mp4'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(Bot maricon|Botmaricon|bot maricon|bot marica|Bot marica|marica|Marica|maricon|Maricon)/gi)) {    
let vn = './Audios/Bot maricon.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Bot-puto|Puto-Bot|Bot puto|bot puto|puto bot|puto-bot|Puto-Bot)/gi)) {    
let vn = './Audios/Bot puto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(Bts|BTS|bts|Fan-de-bts|fan-de-bts)/gi)) {    
let vn = './Audios/Bts.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(Buenos días|Buenos-dias|Buenos-Dias|Buenos días|buenos días|buenos dias|Buenos dias|buen dia|Buen dia)/gi)) {    
let vn = './Audios/Buenos-dias2'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(bunny|Bunny)/gi)) {    
let vn = './Audios/Bunny.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(cállese|Cállese|callece señora|callese señora|Callese señora)/gi)) {    
let vn = './Audios/cállese.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(cancion hades|Cancion hades)/gi)) {    
let vn = './Audios/cancion de hades.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(cancion hades2|Cancion hades2)/gi)) {    
let vn = './Audios/cancion de hades2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la concha de tu madre|concha de tu|andate a la concha de tu madre Andate a la concha de tu madre)/gi)) {    
let vn = './Audios/concha de tu madre.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(sss|Sss)/gi)) {    
let vn = './Audios/Sss.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(confeti|Confeti|confe ti|Confe ti|confe-ti|Confe-ti)/gi)) {    
let vn = './Audios/confeti.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Cringe|cringe)/gi)) {    
let vn = './Audios/Cringemp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(cuándo se muera|Cuándo se muera|cuando se muera|Cuando se muera)/gi)) {    
let vn = './Audios/cuándo se muera.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

   
 if (!chat.isBanned && chat.audios && m.text.match(/(Darling|darling)/gi)) {    
let vn = './Audios/Darling.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Musica desamor|musica desamor)/gi)) {    
let vn = './Audios/desamor.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(detengase admin|Detengase admin)/gi)) {    
let vn = './Audios/detengase admin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(dormir|Dormir)/gi)) {    
let vn = './Audios/dormiri.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
       
         
 if (!chat.isBanned && chat.audios && m.text.match(/(El amor|el amor|Hay el amor|hay el amor)/gi)) {    
let vn = './Audios/El amor.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(El amor no existe|el amor no existe)/gi)) {    
let vn = './Audios/El amor no existe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(El mundo|el mundo)/gi)) {    
let vn = './Audios/El mundo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(El pepe|el pep|Pepe|pepe)/gi)) {    
let vn = './Audios/el pepe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
                
  if (!chat.isBanned && chat.audios && m.text.match(/(es todo lo que tienes que decir|Es todo lo que tienes que decir)/gi)) {    
let vn = './Audios/Es todo lo que tienes que decir.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(eso tilin|Eso tilin)/gi)) {    
let vn = './Audios/eso tilin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Éxtasis|estaxsi|éstaxsi|extasi)/gi)) {    
let vn = './Audios/Estaxsi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Esto va a ser épico|esto va a ser épico|esto va a ser epico|Esto va a ser epico)/gi)) {    
let vn = './Audios/esto va a ser épico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Estupido|estupido|estúpido|Estúpido)/gi)) {    
let vn = './Audios/estúpido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Facha|facha|queda detenido por exceso de facha|exceso de facha)/gi)) {    
let vn = './Audios/Facha.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(eres fuerte|Eres fuerte)/gi)) {    
let vn = './Audios/fuerte.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(gambare|Gambare)/gi)) {    
let vn = './Audios/Gambare.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(gay|Gay)/gi)) {    
let vn = './Audios/gay2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(gracias bot|Gracias bot)/gi)) {    
let vn = './Audios/Gracias bot.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(hasta mañana|Hasta mañana|hazta mañana|Hazta mañana)/gi)) {    
let vn = './Audios/ha.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(hace frío|Hace frío)/gi)) {    
let vn = './Audios/Hace frío.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Hades es un Dios|hades es un dios|Hades es un dios)/gi)) {    
let vn = './Audios/Hades es un Dios.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Homero chino|homero chino)/gi)) {    
let vn = './Audios/Homero chino.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(invocar|Invocar)/gi)) {    
let vn = './Audios/Invocar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(quiero morir me|jaja quiero|Jaja quiero|Quiero morir me)/gi)) {    
let vn = './Audios/jaja quiero.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(jashire|Jashire)/gi)) {    
let vn = './Audios/jashire.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Jesucristo|jesucristo)/gi)) {    
let vn = './Audios/Jesucristo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(konede|Konede|conede|Conede|.Animes|.animes)/gi)) {    
let vn = './Audios/Konede.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(kya|Kya)/gi)) {    
let vn = './Audios/Kya.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la voz de hombre|La voz de hombre|la-vox-de-hombre|La-voz-de-hombre)/gi)) {    
let vn = './Audios/la-voz-de-hombre.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(La bebecita|la bebecita)/gi)) {    
let vn = './Audios/La bebecita.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la lechuza|La lechuza)/gi)) {    
let vn = './Audios/La lechuza.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(la biblia|La biblia)/gi)) {    
let vn = './Audios/La biblia.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la mamare|La mamare)/gi)) {    
let vn = './Audios/La mamare.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Lala|lala)/gi)) {    
let vn = './Audios/lala.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(llamando a seguridad|Llamando a seguridad)/gi)) {    
let vn = './Audios/llamando a seguridad.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
                    
if (!chat.isBanned && chat.audios && m.text.match(/(Lol|lol)/gi)) {    
let vn = './Audios/Lol.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(maldita-puta|Mladita-puta|maldita Puta|Maldita puta|maldita puta)/gi)) {    
let vn = './Audios/maldita-puta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(manco|Manco)/gi)) {    
let vn = './Audios/manco.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(manos|Manos)/gi)) {    
let vn = './Audios/Manos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(mariana|Mariana)/gi)) {    
let vn = './Audios/mariana.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(me los voy a coger|Me los vpy a coger)/gi)) {    
let vn = './Audios/me-los-voy-a-coger.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(amiga|Amiga|mi amiga|Mi amiga)/gi)) {    
let vn = './Audios/mi amiga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(miau|Miau)/gi)) {    
let vn = './Audios/Miau.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(mimir|Mimir)/gi)) {    
let vn = './Audios/mimir.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(mitamita|Mitamita|mita mita)/gi)) {    
let vn = './Audios/mitamita.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(mmm|Mmm)/gi)) {    
let vn = './Audios/mmm.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(mujer|Mujer|mujeres|Mujeres)/gi)) {    
let vn = './Audios/Mujer.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    if (!chat.isBanned && chat.audios && m.text.match(/(mus)/gi)) {    
let vn = './Audios/mus.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(musica|Musica)/gi)) {    
let vn = './Audios/Musica.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Musica de espera|musica de espera)/gi)) {    
let vn = './Audios/Musica de espera.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Gawr gura cantando|gawr gura cantando)/gi)) {    
let vn = './Audios/naa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(nadie te pregunto|Nadie te pregunto)/gi)) {    
let vn = './Audios/nadie te pregunto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(nico-nico-ni|niconi|Niconi|Nico-nico-ni)/gi)) {    
let vn = './Audios/Niconi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(nivel|Nivel|su nivel|Su nivel)/gi)) {    
let vn = './Audios/nivel.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no digas mamadas|No digas mamadas|No digas mamadas meriyein|no digas mamafas meriyein)/gi)) {    
let vn = './Audios/no-digas-mamadas-meriyein.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(no esta|No esta)/gi)) {    
let vn = './Audios/No esta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no le vuelvo a hablar|No le vuelvo a hablar|no funciona|No funciona)/gi)) {    
let vn = './Audios/no funciona.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(no pedi tu opinión|No pedi tu opinión|no pedi tu opinion|No pedi tu opiniom)/gi)) {    
let vn = './Audios/No pedí tu opinión.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no soy pati|No soy pati|no soy pa ti|No soy pa ti)/gi)) {    
let vn = './Audios/No soy pati.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no soy real|No soy real)/gi)) {    
let vn = './Audios/No soy real.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(No te acerques|no te acerques)/gi)) {    
let vn = './Audios/no te acerques.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(nos vale|Nos vale)/gi)) {    
let vn = './Audios/Nos vale.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Nyanpasu|nyanpasu)/gi)) {    
let vn = './Audios/Nyanpasu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(O mosa|o mosa|omosa|Omosa)/gi)) {    
let vn = './Audios/O mosa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(reglas|Reglas|soy nuevo|Soy nuevo)/gi)) {    
let vn = './Audios/Regalas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(ok|Ok)/gi)) {    
let vn = './Audios/Ok.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(omg|Omg|Omaiga|omaiga)/gi)) {    
let vn = './Audios/Omaiga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Orale|orale)/gi)) {    
let vn = './Audios/orale.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Oxxo|oxxo)/gi)) {    
let vn = './Audios/Oxxo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(pack|Pack|no chupala|No chupala)/gi)) {    
let vn = './Audios/Pack.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Pero esto|pero esto)/gi)) {    
let vn = './Audios/pero esto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    if (!chat.isBanned && chat.audios && m.text.match(/(pespes|Pespes|pes-pes|Pes-pes)/gi)) {    
let vn = './Audios/pespes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(pikachu|Pikachu|picachu|Picachu)/gi)) {    
let vn = './Audios/pikachu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(pokemon|Pokemon)/gi)) {    
let vn = './Audios/pokemon.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Porque|Por que|porque|por que)/gi)) {    
let vn = './Audios/Por que.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(primo|Primo)/gi)) {    
let vn = './Audios/Primo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(que linda noche|Que linda noche)/gi)) {    
let vn = './Audios/Que linda noche.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Que pasa|que pasa|todo bien|Todo bien)/gi)) {    
let vn = './Audios/Que pasa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Que sucede|que sucede)/gi)) {    
let vn = './Audios/Que sucede.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(que tonta eres|Que tonta eres)/gi)) {    
let vn = './Audios/Que tonta eres.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(que rico sabe|Que rico sabe|Qué rico sabe|qué rico sabe)/gi)) {    
let vn = './Audios/qué rico sabe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(risa|Risa|risas|Rosas)/gi)) {    
let vn = './Audios/risa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(risa diabólica|Risa diabólica|risa diabolica|Risa diabolica)/gi)) {    
let vn = './Audios/Risa diabolica.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/()Rutina|rutina/gi)) {    
let vn = './Audios/rutina.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(se enojan|Se enojan)/gi)) {    
let vn = './Audios/se enojan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(senpai|Senpai)/gi)) {    
let vn = './Audios/senpai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(sexual|Sexual)/gi)) {    
let vn = './Audios/Secual.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(sigues con vida|Sigues con vida)/gi)) {    
let vn = './Audios/sigues con vida.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(sonrisas|Sonrisas)/gi)) {    
let vn = './Audios/sonrisas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(talcho|Talcho)/gi)) {    
let vn = './Audios/talcho.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tafa|Tara)/gi)) {    
let vn = './Audios/Tara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Te pasas|te pasas)/gi)) {    
let vn = './Audios/te pasas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Te sabes|te sabes)/gi)) {    
let vn = './Audios/te sabes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(te siento mia|Te siento mia|Te siento mía|te siento mía)/gi)) {    
let vn = './Audios/Te siento mía.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Temon|temon)/gi)) {    
let vn = './Audios/Temon.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Tengo|tengo|calzones del admi|Calzones del admi)/gi)) {    
let vn = './Audios/Tengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tiene la cara|Tiene la cara)/gi)) {    
let vn = './Audios/tiene la cara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(:c|:C|toma para que dejes de llorar|Toma para que dejes de llorar|para que dejes de llorar|Para que dejes de llorar)/gi)) {    
let vn = './Audios/toma.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tori|Tori)/gi)) {    
let vn = './Audios/Tori.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(no trabajo|mañana no trabajo|Mañana no trabajo|Trabajo)/gi)) {    
let vn = './Audios/.trabajomp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tranquilo|Tranquilo)/gi)) {    
let vn = './Audios/tranquilo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(triste enojada toy|Triste enojada toy)/gi)) {    
let vn = './Audios/Trisre enojada toy.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tuturu|Tuturu)/gi)) {    
let vn = './Audios/tuturu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tututu|Tututu)/gi)) {    
let vn = './Audios/tututu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/uchinchi|Uchinchi()/gi)) {    
let vn = './Audios/uchinchi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Umai|umai)/gi)) {    
let vn = './Audios/umai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Un pato|un pato)/gi)) {    
let vn = './Audios/Un pato.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(una pregunta|Una pregunta|una-pregunta|Una-pregunta)/gi)) {    
let vn = './Audios/una-pregunta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}        
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(unga|Unga)/gi)) {    
let vn = './Audios/unga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Ven|ven|hici hacemos un mulero|Hici hacemos un muñeco)/gi)) {    
let vn = './Audios/ven.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(verdad que te engañe|Verdad que te engañe)/gi)) {    
let vn = './Audios/verdad-que-te-engane.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(woahh|Woahh)/gi)) {    
let vn = './Audios/woahh.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(y que agarra y qué me dice|Y que agarra y qué me dice)/gi)) {    
let vn = './Audios/y que agarra y qué me dice.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Ya paso|ya paso)/gi)) {    
let vn = './Audios/Ya paso.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(yoshi cancion|Yoshi cancion)/gi)) {    
let vn = './Audios/yoshi-cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(yutkl|Yutki)/gi)) {    
let vn = './Audios/yutki.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(ñaña|Ñaña)/gi)) {    
let vn = './Audios/ñaña.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(ñi|Ñi|Ña|ña)/gi)) {    
let vn = './Audios/ñi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
                   
 if (!chat.isBanned && chat.audios && m.text.match(/(omosa|Omosa)/gi)) {    
let vn = './Audios/O omosa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}                 
                      

if (!chat.isBanned && chat.audios && m.text.match(/(A bueno adios master|a bueno adios master)/gi)) {
let vn = './Audios/A bueno adios master.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}                                      


if (!chat.isBanned && chat.audios && m.text.match(/(abduzcan|Abduzcan)/gi)) {    
let vn = './Audios/abduzcan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(arigato|Arigato)/gi)) {    
let vn = './Audios/arigato.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Blackpink|blackpink)/gi)) {    
let vn = './Audios/Blackpink in your area.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Buenas tardes|buena tarde)/gi)) {    
let vn = './Audios/buenas tardes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Bueno si|bueno si)/gi)) {    
let vn = './Audios/bueno si.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(buenos dias|Buenos dias)/gi)) {    
let vn = './Audios/Buenos dias.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(chau chicos|Chau chicos)/gi)) {    
let vn = './Audios/chau chicos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(chuchupamela|chupamela|pamela)/gi)) {    
let vn = './Audios/chuchupamela.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(como le digo|Como le digo|Cómo le digo|cómo le digo)/gi)) {    
let vn = './Audios/cómo le digo que.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(como te amo|Como te amo|Cómo te amo|cómo te amo)/gi)) {    
let vn = './Audios/cómo te amo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(contexto|Contexto)/gi)) {    
let vn = './Audios/contexto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(desde morro|Desde morro)/gi)) {    
let vn = './Audios/desde morro.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(El rap de fernanfloo|el rap de fernanfloo)/gi)) {    
let vn = './Audios/el rap de fernanfloo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Elmo sabe donde vives|elmo sabe donde vives)/gi)) {    
let vn = './Audios/Elmo sabe donde vives.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(en caso de una investigación|En caso de una investigación)/gi)) {    
let vn = './Audios/En caso de una investigación.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(gokubff|Gokubff)/gi)) {    
let vn = './Audios/.goku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(joder|Joder)/gi)) {    
let vn = './Audios/joder.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(jueputa|Jueputa)/gi)) {    
let vn = './Audios/jueputa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Linda|linda)/gi)) {    
let vn = './Audios/linda.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(masivo|Masivo)/gi)) {    
let vn = './Audios/masivo-cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(me anda buscando|Me anda buscando)/gi)) {    
let vn = './Audios/Me anda buscando Anonymous.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(no me hables|No me hables)/gi)) {    
let vn = './Audios/no me hables.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(me vale verga paisa|Me vale verga paisa)/gi)) {    
let vn = './Audios/me vale verga paisa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(me vuelves loka|Me vuelves loka|me vuelves loca|Me vuelves loca)/gi)) {    
let vn = './Audios/me vuelves loka.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(no hables de porno|No hables de porno)/gi)) {    
let vn = './Audios/no hables de porno.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(nadie toca a mis chicos|Nadie toca a mis chicos)/gi)) {    
let vn = './Audios/nadie toca a mis chicos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(no me hagas usar esto|No me hagas usar esto)/gi)) {    
let vn = './Audios/no me hagas usar esto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(niconico|Niconico)/gi)) {    
let vn = './Audios/niconico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(no digas eso papu|No digas eso papu)/gi)) {    
let vn = './Audios/no digas eso papu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(okey|Okey)/gi)) {    
let vn = './Audios/Okey.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(no te dare mi poto|No te dare mi poto)/gi)) {    
let vn = './Audios/Otaku2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Pero esto ya es otro nivel|pero esto ya es otro nivel)/gi)) {    
let vn = './Audios/pero-esto-ya-es-otro-nivel.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(quién poronga|Quién poronga)/gi)) {    
let vn = './Audios/quién poronga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Se estan riendo de mi|se estan riendo de mi)/gi)) {    
let vn = './Audios/Se estan riendo de mi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(sexo2|Sexo2)/gi)) {    
let vn = './Audios/sexo2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(si no le gusta|Si no le gusta)/gi)) {    
let vn = './Audios/si no le gusta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Su nivel de pendejo|su nivel de pendejo)/gi)) {    
let vn = './Audios/Su nivel de pendejo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(todo bien|Todo bien)/gi)) {    
let vn = './Audios/Todo bien.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Traigan le una falda|traigan le una falda)/gi)) {    
let vn = './Audios/Traigan le una falda.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Tunometecabra|tunometecabra)/gi)) {    
let vn = './Audios/tunometecabrasaramambiche.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Una monedita|una monedita)/gi)) {    
let vn = './Audios/una monedita.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(usted esta detenido|Usted esta detenido)/gi)) {    
let vn = './Audios/usted esta detenido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Verdad que lo encañe|verdad que lo encañe)/gi)) {    
let vn = './Audios/verdad que lo encañe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(vamos a dormir|Vamos a dormir)/gi)) {    
let vn = './Audios/vamos a dormir.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Viernecito|viernecito)/gi)) {    
let vn = './Audios/viernecito.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Wenas|wenas)/gi)) {    
let vn = './Audios/wenas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(Wtf|wtf)/gi)) {    
let vn = './Audios/wtf.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(wtf y este|Wtf y este)/gi)) {    
let vn = './Audios/wtf y este.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(me podes explicar|Me podemos explicar)/gi)) {    
let vn = './Audios/y este quien.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(y este quien es|Y este quien es)/gi)) {    
let vn = './Audios/Y este quien es.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


if (!chat.isBanned && chat.audios && m.text.match(/(yamete-kudasai2|Yamete-kudasai2)/gi)) {    
let vn = './Audios/Yamete-kudasai2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})} 


   
return !0 }

export default handler