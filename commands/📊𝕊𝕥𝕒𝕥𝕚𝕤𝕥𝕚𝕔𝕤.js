/*CMD
  command: 📊𝕊𝕥𝕒𝕥𝕚𝕤𝕥𝕚𝕔𝕤
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stat =
    "*📊 𝐓𝐨𝐭𝐚𝐥 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 : " +
    status +
    " Users\n\n➕ 𝐓𝐨𝐭𝐚𝐥 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐖𝐢𝐭𝐡𝐝𝐫𝐚𝐰 : " +
    userPayment.value().toFixed(0) +
    " points\n\n👑 BOT LAUNCH 14 july*"

  Bot.sendMessage(stat)
}
