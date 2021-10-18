/*CMD
  command: start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send Channel link with
`🪅
🪅
🪅
🪅
🪅
🪅`
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("key")
if (user.telegramid == key)
Bot.setProperty("start", message, "string")
Bot.sendMessage("*Start Message Set To :* " + message + "")
