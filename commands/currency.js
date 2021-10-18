/*CMD
  command: currency
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Name
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("key")
if (user.telegramid == key)
Bot.setProperty("currency", message, "string")
Bot.sendMessage("*Set To :* " + message + "")
