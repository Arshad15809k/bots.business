/*CMD
  command: minwith
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Amount
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("key")
if (user.telegramid == key)
Bot.setProperty("minwith", message, "string")
Bot.sendMessage("*Set To :* " + message + "")
