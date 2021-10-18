/*CMD
  command: Change2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: `Enter Amount`
  keyboard: 
  aliases: 
CMD*/

var currency = Bot.getProperty("currency")
var key1 = Bot.getProperty("key")
var key2 = Bot.getProperty("key2")
var key3 = Bot.getProperty("key3")
var key4 = Bot.getProperty("key4")
var key5 = Bot.getProperty("key5")
if (user.telegramid == key1 | key2 | key3 | key4 | key5 ){
var ser = User.getProperty("TgidB")
var bal = Libs.ResourcesLib.anotherUserRes("balance", ""+ser+"")
bal.add(+data.message)
Bot.sendMessageToChatWithId(""+ser+"", "*You have just received* *"+message+"* *"+currency+" from Admin*")
Bot.sendMessage("*Balance of* *"+message+"* *Added to* *"+ser+"*")
}else{
Bot.sendMessage("*You Are Not An Admin*")
}
