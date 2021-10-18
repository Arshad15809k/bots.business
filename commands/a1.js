/*CMD
  command: a1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send 1st link
  keyboard: 
  aliases: 
CMD*/

var key = "1380682887"
if (user.telegramid == key)
Bot.setProperty("a1",message,"string")
Bot.sendMessage(" Your join 1 Set : "+message)
