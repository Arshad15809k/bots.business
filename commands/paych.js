/*CMD
  command: paych
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter UserName
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("key")
if (user.telegramid == key)
Bot.setProperty("paych", message, "string")
Bot.sendMessage("*Set To :* " + message + "")
