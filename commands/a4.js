/*CMD
  command: a4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Your 4th Channel Link
  keyboard: 
  aliases: 
CMD*/

var key = "1380682887"
if (user.telegramid == key)
Bot.setProperty("a4",message,"string")
Bot.sendMessage(" Your join 4 Set : "+message)
