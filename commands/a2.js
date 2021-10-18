/*CMD
  command: a2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send 2nd Channel Link
  keyboard: 
  aliases: 
CMD*/

var key = "1380682887"
if (user.telegramid == key)
Bot.setProperty("a2",message,"string")
Bot.sendMessage(" Your join 2 Set : "+message)
