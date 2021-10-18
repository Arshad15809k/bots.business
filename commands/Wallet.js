/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *ENTER YOUR WALLET ADDRESS*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("wallet",message,"string")
Bot.sendMessage(" Your Wallet Address Set to "+message)
