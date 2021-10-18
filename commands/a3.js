/*CMD
  command: a3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send 3rd Channel Link
  keyboard: 
  aliases: 
CMD*/

var key = "1380682887"
if (user.telegramid == key)
Bot.setProperty("a3",message,"string")
Bot.sendMessage(" Your join 3 Set : "+message)
