let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/Dark.jpg'
let user = global.db.data.users[m.sender]
conn.sendButton(m.chat, `Halo ${conn.getName(m.sender)}\n\nPertanyaan Pertanyaan Tentang Bot Ini,\nQ : Bang Kenapa Ga pake bot MD?\nA : MALAS..!!\n\nQ : Bang Kenapa Fitur Download Video TikTok Error?\nA : Dah Di Fix\n\nQ : Boleh Minta B0K3P Gak?\nA : Auto Block\n\nSorry if this is unfair, but for the convenience of all of us, especially Indonesian citizens. I will block numbers starting with +212 because they are like annoying mushrooms. Because what is blocked? Because many of these users send strange commands. Whether it's _.apk_, _.mediafire (with a strange download link)_, _.fb_ and others. Once again I apologize profusely, thank you..`, '_*ZxyuuBotz*_', 'Back To Menu', '#Menu', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/Dark.jpg')
}}})
}
handler.help = ['QnA']
handler.tags = ['main']
handler.command = /^(QuestAndAnswer|QnA)$/i

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari🌖"
    if (time >= 4) {
        res = "Selamat pagi🌝"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌕"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}
