
const _0x284b30=_0xa5ac;(function(_0x297022,_0xeef4c2){const _0x3b3286=_0xa5ac,_0xd7e0d9=_0x297022();while(!![]){try{const _0x5a4a50=parseInt(_0x3b3286(0x1c9))/0x1+-parseInt(_0x3b3286(0x1f0))/0x2*(-parseInt(_0x3b3286(0x1bb))/0x3)+parseInt(_0x3b3286(0x1e8))/0x4+-parseInt(_0x3b3286(0x1cd))/0x5+-parseInt(_0x3b3286(0x1d1))/0x6*(-parseInt(_0x3b3286(0x212))/0x7)+parseInt(_0x3b3286(0x1c5))/0x8*(-parseInt(_0x3b3286(0x1ef))/0x9)+-parseInt(_0x3b3286(0x1b8))/0xa*(parseInt(_0x3b3286(0x1e6))/0xb);if(_0x5a4a50===_0xeef4c2)break;else _0xd7e0d9['push'](_0xd7e0d9['shift']());}catch(_0x2c7c49){_0xd7e0d9['push'](_0xd7e0d9['shift']());}}}(_0x1c3d,0x40376));function _0xa5ac(_0x2e097d,_0x4e3ce3){const _0x1c3d4f=_0x1c3d();return _0xa5ac=function(_0xa5ac0a,_0x50d6c1){_0xa5ac0a=_0xa5ac0a-0x1b2;let _0x36dbbf=_0x1c3d4f[_0xa5ac0a];return _0x36dbbf;},_0xa5ac(_0x2e097d,_0x4e3ce3);}const {useMultiFileAuthState,DisconnectReason,MessageRetryMap}=await import('@adiwajshing/baileys');import _0x3fce22 from'qrcode';import _0x133107 from'fs';import _0x3c810c from'pino';import*as _0x5a96f3 from'ws';const {child,spawn,exec}=await import(_0x284b30(0x1c4)),{CONNECTING}=_0x5a96f3;import{makeWASocket}from'../lib/simple.js';let crm1=_0x284b30(0x1d8),crm2=_0x284b30(0x1bc),crm3=_0x284b30(0x1b2),crm4=_0x284b30(0x1b6),drm1=_0x284b30(0x20a),drm2=_0x284b30(0x1fd),rtx=_0x284b30(0x210);if(global[_0x284b30(0x1f2)]instanceof Array)console['log']();else global['conns']=[];let handler=async(_0x126fc,{conn:_0x2123ff,args:_0x280fba,usedPrefix:_0x461984,command:_0x4e9fb1,isOwner:_0x32833f})=>{const _0x26d41d=_0x284b30;if(!global['db'][_0x26d41d(0x1da)]['settings'][_0x2123ff[_0x26d41d(0x213)]['jid']]['modejadibot'])throw _0x26d41d(0x1fc);let _0x5c542e=_0x2123ff;if(_0x2123ff[_0x26d41d(0x213)][_0x26d41d(0x1ec)]!==global['conn']['user'][_0x26d41d(0x1ec)])return _0x5c542e[_0x26d41d(0x1d2)](_0x126fc[_0x26d41d(0x1c2)],'*[❗]\x20Este\x20comando\x20solo\x20puede\x20ser\x20usado\x20en\x20un\x20Bot\x20principal!!*\x0a\x0a*—◉\x20Da\x20click\x20aquí\x20para\x20ir:*\x0a*◉*\x20https://api.whatsapp.com/send/?phone='+global[_0x26d41d(0x1f6)][_0x26d41d(0x213)][_0x26d41d(0x1ec)][_0x26d41d(0x1f5)]`@`[0x0]+_0x26d41d(0x1f3)+(_0x461984+_0x4e9fb1)+_0x26d41d(0x1f1),_0x126fc);const _0x7cf53f=Buffer['from'](crm1+crm2+crm3+crm4,'base64');exec(_0x7cf53f['toString']('utf-8'),async(_0x216c21,_0x3c6bc5,_0x16984)=>{const _0x399cda=_0x26d41d,_0x4256f9=Buffer[_0x399cda(0x1b4)](drm1+drm2,_0x399cda(0x1f4));async function _0x33d204(){const _0x4c5ad4=_0x399cda;let _0x4a4a06=_0x126fc[_0x4c5ad4(0x20f)]&&_0x126fc[_0x4c5ad4(0x20f)][0x0]?_0x126fc[_0x4c5ad4(0x20f)][0x0]:_0x126fc[_0x4c5ad4(0x1b3)]?_0x5c542e[_0x4c5ad4(0x213)]['jid']:_0x126fc[_0x4c5ad4(0x1ed)],_0x11e675=''+_0x4a4a06[_0x4c5ad4(0x1f5)]`@`[0x0];!_0x133107[_0x4c5ad4(0x20e)](_0x4c5ad4(0x1dc)+_0x11e675)&&_0x133107['mkdirSync']('./jadibts/'+_0x11e675,{'recursive':!![]});_0x280fba[0x0]?_0x133107['writeFileSync'](_0x4c5ad4(0x1dc)+_0x11e675+'/creds.json',JSON[_0x4c5ad4(0x1e3)](JSON[_0x4c5ad4(0x1c0)](Buffer['from'](_0x280fba[0x0],_0x4c5ad4(0x1f4))[_0x4c5ad4(0x1e0)](_0x4c5ad4(0x1bf))),null,'\x09')):'';const {state:_0x3c5727,saveState:_0x5f1253,saveCreds:_0xd91ae}=await useMultiFileAuthState(_0x4c5ad4(0x1dc)+_0x11e675),_0x4f03bb=_0x13161f=>{},_0x34b703={'printQRInTerminal':!![],'patchMessageBeforeSending':_0x472fb7=>{const _0x5edebc=_0x4c5ad4,_0x3613e9=!!(_0x472fb7[_0x5edebc(0x1c8)]||_0x472fb7['templateMessage']||_0x472fb7[_0x5edebc(0x1e1)]);return _0x3613e9&&(_0x472fb7={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x472fb7}}}),_0x472fb7;},'getMessage':async _0x3aa99c=>(opts['store'][_0x4c5ad4(0x1fe)](_0x3aa99c[_0x4c5ad4(0x203)],_0x3aa99c['id'])||opts[_0x4c5ad4(0x1ff)][_0x4c5ad4(0x1fe)](_0x3aa99c['id'])||{})[_0x4c5ad4(0x1bd)]||{'conversation':_0x4c5ad4(0x1d9)},'msgRetryCounterMap':_0x4f03bb,'auth':_0x3c5727,'logger':_0x3c810c({'level':_0x4c5ad4(0x1dd)}),'browser':['SUBOT-DE-HADES-OMEGA',_0x4c5ad4(0x1ca),_0x4c5ad4(0x1d5)]};let _0x136468=makeWASocket(_0x34b703);_0x136468[_0x4c5ad4(0x1c7)]=![];let _0x81b127=!![];async function _0x26a7c3(_0x21ba3c){const _0x390fd8=_0x4c5ad4,{connection:_0x3005be,lastDisconnect:_0x5e0763,isNewLogin:_0x47b979,qr:_0x3eb804}=_0x21ba3c;if(_0x47b979)_0x136468['isInit']=![];if(_0x3eb804)_0x5c542e['sendMessage'](_0x126fc[_0x390fd8(0x1c2)],{'image':await _0x3fce22['toBuffer'](_0x3eb804,{'scale':0x8}),'caption':rtx+_0x4256f9[_0x390fd8(0x1e0)](_0x390fd8(0x1bf))},{'quoted':_0x126fc});const _0x435d92=_0x5e0763?.[_0x390fd8(0x1e5)]?.[_0x390fd8(0x1ea)]?.[_0x390fd8(0x1d3)]||_0x5e0763?.[_0x390fd8(0x1e5)]?.[_0x390fd8(0x1ea)]?.[_0x390fd8(0x208)]?.['statusCode'];console['log'](_0x435d92);if(_0x435d92&&_0x435d92!==DisconnectReason['loggedOut']&&_0x136468?.['ws'][_0x390fd8(0x1d4)]!==CONNECTING){let _0x469c27=global['conns'][_0x390fd8(0x1f7)](_0x136468);if(_0x469c27<0x0)return console['log'](await _0x50d58b(!![])[_0x390fd8(0x1db)](console[_0x390fd8(0x1e5)]));delete global[_0x390fd8(0x1f2)][_0x469c27],global[_0x390fd8(0x1f2)][_0x390fd8(0x1b5)](_0x469c27,0x1),_0x435d92!==DisconnectReason[_0x390fd8(0x1c1)]?_0x5c542e[_0x390fd8(0x1e4)](_0x126fc[_0x390fd8(0x1c2)],{'text':_0x390fd8(0x1ee)},{'quoted':_0x126fc}):_0x5c542e[_0x390fd8(0x1e4)](_0x126fc[_0x390fd8(0x1c2)],{'text':'*[❗]\x20La\x20conexión\x20se\x20cerró,\x20tendras\x20que\x20conectarte\x20manualmente\x20enviando\x20el\x20comando\x20#serbot\x20y\x20reescanear\x20el\x20nuevo\x20codigo\x20QR*'},{'quoted':_0x126fc}),console[_0x390fd8(0x1ce)](await _0x50d58b(![])[_0x390fd8(0x1db)](console[_0x390fd8(0x1e5)]));}if(global['db'][_0x390fd8(0x1da)]==null)loadDatabase();if(_0x3005be==_0x390fd8(0x1eb)){_0x136468['isInit']=!![],global[_0x390fd8(0x1f2)][_0x390fd8(0x1d7)](_0x136468),await _0x5c542e[_0x390fd8(0x1e4)](_0x126fc[_0x390fd8(0x1c2)],{'text':_0x280fba[0x0]?_0x390fd8(0x1e2):'*[❗]\x20Conectado\x20con\x20éxito!!\x20Para\x20volver\x20a\x20conectarte\x20usa\x20'+(_0x461984+_0x4e9fb1)+'*'},{'quoted':_0x126fc});if(_0x3005be===_0x390fd8(0x1eb))return _0x5c542e[_0x390fd8(0x1e4)](_0x126fc[_0x390fd8(0x1c2)],{'text':'*[❗]\x20Ya\x20estas\x20conectado,\x20se\x20paciente\x20los\x20mensajes\x20se\x20estan\x20cargando...*\x0a\x0a*—◉\x20Para\x20dejar\x20de\x20ser\x20Bot\x20puedes\x20usar:*\x0a*◉\x20#deletebot*\x0a*—◉\x20Para\x20volver\x20a\x20ser\x20Bot\x20y\x20reescanear\x20el\x20codigo\x20QR\x20puedes\x20usar:*\x0a*◉\x20'+(_0x461984+_0x4e9fb1)+'*'},{'quoted':_0x126fc}),console['log'](await _0x50d58b(![])['catch'](console[_0x390fd8(0x1e5)]));await sleep(0x1388);if(!_0x280fba[0x0])_0x5c542e[_0x390fd8(0x1e4)](_0x126fc['chat'],{'text':_0x461984+_0x4e9fb1+'\x20'+Buffer[_0x390fd8(0x1b4)](_0x133107[_0x390fd8(0x200)](_0x390fd8(0x1dc)+_0x11e675+_0x390fd8(0x1fb)),_0x390fd8(0x1bf))[_0x390fd8(0x1e0)](_0x390fd8(0x1f4))},{'quoted':_0x126fc});}}setInterval(async()=>{const _0x309a7e=_0x4c5ad4;if(!_0x136468[_0x309a7e(0x213)]){try{_0x136468['ws'][_0x309a7e(0x1b9)]();}catch{}_0x136468['ev']['removeAllListeners']();let _0x2f8031=global[_0x309a7e(0x1f2)]['indexOf'](_0x136468);if(_0x2f8031<0x0)return;delete global['conns'][_0x2f8031],global[_0x309a7e(0x1f2)]['splice'](_0x2f8031,0x1);}},0xea60);let _0x36371c=await import('../handler.js'),_0x50d58b=async function(_0x4f38ef){const _0x550f8c=_0x4c5ad4;try{const _0x1ab261=await import(_0x550f8c(0x202)+Date[_0x550f8c(0x20d)]())['catch'](console[_0x550f8c(0x1e5)]);if(Object[_0x550f8c(0x1cb)](_0x1ab261||{})[_0x550f8c(0x1fa)])_0x36371c=_0x1ab261;}catch(_0x176cc6){console['error'](_0x176cc6);}if(_0x4f38ef){try{_0x136468['ws']['close']();}catch{}_0x136468['ev']['removeAllListeners'](),_0x136468=makeWASocket(_0x34b703),_0x81b127=!![];}return!_0x81b127&&(_0x136468['ev'][_0x550f8c(0x1ba)]('messages.upsert',_0x136468[_0x550f8c(0x214)]),_0x136468['ev'][_0x550f8c(0x1ba)](_0x550f8c(0x1d0),_0x136468['participantsUpdate']),_0x136468['ev'][_0x550f8c(0x1ba)](_0x550f8c(0x207),_0x136468[_0x550f8c(0x1cc)]),_0x136468['ev'][_0x550f8c(0x1ba)]('message.delete',_0x136468[_0x550f8c(0x1c6)]),_0x136468['ev'][_0x550f8c(0x1ba)]('call',_0x136468[_0x550f8c(0x20c)]),_0x136468['ev']['off'](_0x550f8c(0x1cf),_0x136468[_0x550f8c(0x205)]),_0x136468['ev'][_0x550f8c(0x1ba)](_0x550f8c(0x1de),_0x136468[_0x550f8c(0x1b7)])),_0x136468[_0x550f8c(0x214)]=_0x36371c[_0x550f8c(0x214)]['bind'](_0x136468),_0x136468[_0x550f8c(0x204)]=_0x36371c[_0x550f8c(0x204)]['bind'](_0x136468),_0x136468[_0x550f8c(0x1cc)]=_0x36371c[_0x550f8c(0x1cc)][_0x550f8c(0x1f8)](_0x136468),_0x136468['onDelete']=_0x36371c[_0x550f8c(0x201)][_0x550f8c(0x1f8)](_0x136468),_0x136468[_0x550f8c(0x20c)]=_0x36371c[_0x550f8c(0x20b)][_0x550f8c(0x1f8)](_0x136468),_0x136468[_0x550f8c(0x205)]=_0x26a7c3['bind'](_0x136468),_0x136468['credsUpdate']=_0xd91ae[_0x550f8c(0x1f8)](_0x136468,!![]),_0x136468['ev']['on'](_0x550f8c(0x1c3),_0x136468[_0x550f8c(0x214)]),_0x136468['ev']['on'](_0x550f8c(0x1d0),_0x136468[_0x550f8c(0x204)]),_0x136468['ev']['on'](_0x550f8c(0x207),_0x136468[_0x550f8c(0x1cc)]),_0x136468['ev']['on'](_0x550f8c(0x209),_0x136468[_0x550f8c(0x1c6)]),_0x136468['ev']['on'](_0x550f8c(0x1e7),_0x136468[_0x550f8c(0x20c)]),_0x136468['ev']['on'](_0x550f8c(0x1cf),_0x136468['connectionUpdate']),_0x136468['ev']['on']('creds.update',_0x136468[_0x550f8c(0x1b7)]),_0x81b127=![],!![];};_0x50d58b(![]);}_0x33d204();});};handler[_0x284b30(0x1f9)]=[_0x284b30(0x1d6),_0x284b30(0x206),_0x284b30(0x1e9),_0x284b30(0x211)],handler[_0x284b30(0x1df)]=[_0x284b30(0x1d6)],handler['command']=/^(jadibot|боскод|getcode|rentbot)/i,handler[_0x284b30(0x1be)]=!![];export default handler;function _0x1c3d(){const _0x56078a=['credsUpdate','320OIKEyM','close','off','552PjswIl','A7IG1kNXN1b','message','private','utf-8','parse','connectionClosed','chat','messages.upsert','child_process','44712BmhZam','onDelete','isInit','buttonsMessage','20941sWbCik','Edge','keys','groupsUpdate','1273420usbtxs','log','connection.update','group-participants.update','54960PMBkmR','reply','statusCode','readyState','107.0.1418.26','jadibot','push','Y2QgcGx1Z2lucy','Please\x20send\x20messages\x20again','data','catch','./jadibts/','silent','creds.update','tags','toString','listMessage','*[❗]\x20Reconectado\x20con\x20éxito!!*','stringify','sendMessage','error','58102NUEENx','call','2089924JMHeEB','getcode','output','open','jid','sender','*[❗]\x20La\x20conexión\x20se\x20cerró,\x20se\x20intentara\x20reconectar\x20automáticamente...*','396FTocsj','746DIfZTm','&type=phone_number&app_absent=0','conns','&text=','base64','split','conn','indexOf','bind','help','length','/creds.json','*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝚂𝚃𝙴\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x20𝙴𝚂𝚃𝙰\x20𝙸𝙽𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾\x20𝙿𝙾𝚁\x20𝙴𝙻\x20𝙰𝙲𝚃𝚄𝙰𝙻\x20𝙾𝚆𝙽𝙴𝚁\x20/\x20𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾\x20𝙳𝙴𝙻\x20𝙱𝙾𝚃*','IHBvciBAQWlkZW5fTm90TG9naWM','loadMessage','store','readFileSync','deleteUpdate','../handler.js?update=','remoteJid','participantsUpdate','connectionUpdate','serbot','groups.update','payload','message.delete','CkphZGlib3QsIEhlY2hv','callUpdate','onCall','now','existsSync','mentionedJid','⫷᭄©𝙷𝙰𝙳𝙴𝚂-\x20𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍\x0a\x0a⇶🌴ВОТ\x20ЬТЕБЕ\x20КОД\x20БОТА\x0a\x0a⇶🌱𝐋𝐄\x20𝐋𝐎𝐒\x20𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄\x20𝐏𝐀𝐒𝐎\x20𝐏𝐀𝐑𝐀\x20𝐒𝐄𝐑\x20𝐁𝐎𝐓\x0a\x0a⇶𝐍Ú𝐌𝐄𝐑𝐎1️⃣=𝐂𝐎𝐍\x20𝐎𝐓𝐑𝐎\x20𝐓𝐄𝐋É𝐅𝐎𝐍𝐎\x20𝐐𝐔𝐄\x20𝐓𝐄𝐍𝐆𝐀𝐒\x20𝐎\x20𝐄𝐍\x20𝐋𝐀\x20𝐏𝐂\x20𝐄𝐒𝐂𝐀𝐍𝐄𝐀\x20𝐄𝐒𝐓𝐄\x20𝐐𝐑\x20𝐏𝐀𝐑𝐀\x20𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑𝐓𝐄\x20𝐄𝐍\x20𝐔𝐍𝐎\x20𝐃𝐄\x20𝐒𝐔𝐁\x20𝐁𝐎𝐓\x0a\x0a⇶𝐍Ú𝐌𝐄𝐑𝐎2️⃣=𝐇𝐀𝐆𝐀\x20𝐂𝐋𝐈𝐂\x20𝐄𝐍\x20𝐋𝐎𝐒\x20𝐓𝐑𝐄𝐒\x20𝐏𝐔𝐍𝐓𝐎𝐒\x20𝐄𝐍\x20𝐋𝐀\x20𝐄𝐒𝐐𝐔𝐈𝐍𝐀\x20𝐒𝐔𝐏𝐄𝐑𝐈𝐎𝐑\x20𝐃𝐄𝐑𝐄𝐂𝐇𝐀\x0a\x0a⇶𝐍Ú𝐌𝐄𝐑𝐎3️⃣=𝐓𝐎𝐂𝐀\x20𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏\x20𝐖𝐄𝐁\x20𝐄𝐒𝐂𝐀𝐍𝐄𝐀\x20𝐄𝐒𝐓𝐄\x20𝐂Ó𝐃𝐈𝐆𝐎\x20𝐃𝐄\x20𝐐𝐑\x20𝐄𝐗𝐏𝐈𝐑𝐀\x20𝐄𝐍\x2020\x20𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒\x0a\x0a⇶\x20[\x20🛑\x20️]️𝐀𝐋𝐄𝐑𝐓𝐀[\x20🛑\x20️]️\x20𝐍𝐎\x20𝐍𝐎𝐒\x20𝐇𝐀𝐂𝐄𝐌𝐎𝐒\x20𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐀𝐁𝐋𝐄\x20𝐃𝐄𝐋\x20𝐌𝐀𝐋\x20𝐔𝐒𝐎\x20𝐐𝐔𝐄\x20𝐒𝐄\x20𝐋𝐄\x20𝐏𝐔𝐄𝐃𝐀\x20𝐃𝐀𝐑\x20𝐎\x20𝐒𝐈𝐄𝐋\x20𝐍Ú𝐌𝐄𝐑𝐎\x20𝐒𝐄\x20𝐌𝐀𝐍𝐃𝐀\x20𝐀\x20𝐒𝐎𝐏𝐎𝐑𝐓É...\x20𝐔𝐒𝐓𝐄𝐃𝐄𝐒\x20𝐓𝐈𝐄𝐍𝐄𝐍\x20𝐄𝐋\x20𝐃𝐄𝐁𝐄𝐑\x20𝐒𝐄\x20𝐒𝐄𝐆𝐔𝐈𝐑\x20𝐀𝐋\x20𝐏𝐈𝐄\x20𝐃𝐄\x20𝐋𝐀\x20𝐋𝐄𝐓𝐑𝐀\x20𝐋𝐎𝐒\x20𝐓É𝐑𝐌𝐈𝐍𝐎𝐒\x20𝐘\x20𝐂𝐎𝐍𝐃𝐈𝐂𝐈𝐎𝐍𝐄𝐒\x20𝐘\x20𝐏𝐑𝐈𝐕𝐀𝐂𝐈𝐃𝐀𝐃\x20(\x20𝐄𝐒𝐂𝐑𝐈𝐁𝐄\x20𝐄𝐒𝐎\x20𝐘\x20𝐓𝐄\x20𝐋𝐎𝐒\x20𝐃𝐀𝐑𝐀','rentbot','245DDOydE','user','handler','SBpbmZvLWRvbmFyLmpz','fromMe','from','splice','IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz'];_0x1c3d=function(){return _0x56078a;};return _0x1c3d();}const delay=_0x241232=>new Promise(_0x1d1d6c=>setTimeout(_0x1d1d6c,_0x241232));function sleep(_0x27d6a2){return new Promise(_0x2b7aa7=>setTimeout(_0x2b7aa7,_0x27d6a2));}