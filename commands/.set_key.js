/*CMD
  command: .set_key
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Your Telegram Id
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("key",message,"string")
Bot.sendMessage(" Your key set to "+message)
