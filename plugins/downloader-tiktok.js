import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, args}) => {
if (command == 'tiktokaudio') {
let espera = '*[βππππβ] π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ π°ππ³πΈπΎ π³π΄ ππΈπΊππΎπΊ*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'tiktok') {
let espera = '*[βππππβ] π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `_ππ‘π ππ²π¬π­π’π - ππ¨π­_`, m)}
}
handler.help = ['tiktok' , 'tiktokaudio'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok', 'tiktokaudio']
export default handler
