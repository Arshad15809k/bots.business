/*CMD
  command: ššš„šš„šš¤š„ššš¤
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
    "*š ššØš­šš„ š¦šš¦ššš«š¬ : " +
    status +
    " Users\n\nā ššØš­šš„ š¬š®šššš¬š¬šš®š„ šš¢š­š”šš«šš° : " +
    userPayment.value().toFixed(0) +
    " points\n\nš BOT LAUNCH 14 july*"

  Bot.sendMessage(stat)
}
