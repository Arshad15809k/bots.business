/*CMD
  command: /jp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: `Enter His Telegram I'd`
  keyboard: 
  aliases: 
CMD*/


var key1 = Bot.getProperty("key")
var key2 = Bot.getProperty("key2")
var key3 = Bot.getProperty("key3")
var key4 = Bot.getProperty("key4")
var key5 = Bot.getProperty("key5")
if (user.telegramid == key1 | key2 | key3 | key4 | key5 ){
User.setProperty("TgidB", message, "string")
Bot.runCommand("Change2")
}else{
Bot.sendMessage("You Are Not An Admin")
}
