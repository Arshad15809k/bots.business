/*CMD
  command: 📊 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data){
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

Api.deleteMessage({
  chat_id: chat_id,
  message_id: message_id
})

}
var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

Bot.sendMessage("📊 Total member : " +
    status +
    "\n\n➕Total successful Withdraw :  " +
    userPayment.value().toFixed(0) +
    "points\n\n")}
