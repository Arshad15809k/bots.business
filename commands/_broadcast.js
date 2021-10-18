/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please Enter The Message 
  keyboard: 
  aliases: 
CMD*/

var id = "1380682887"
if(user.telegramid != id){return}
var options = {msg : request.message_id, id: id}
Bot.runAll({command:"/onGetBroadcastMessage",options})
Bot.sendMessage("In progress...")

