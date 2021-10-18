/*CMD
  command: a5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Your 5th Channel Link
  keyboard: 
  aliases: 
CMD*/

var key = "1380682887"
if (user.telegramid == key)
Bot.setProperty("a5",message,"string")
Bot.sendMessage(" Your join 5 Set : "+message)
