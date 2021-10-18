/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "Set Wallet" , command : "Wallet" }]
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(button, "*🕹 Account Settings ⚙️\n\nName= "+user.first_name+"\nUser ID = "+user.telegramid+"\nWallet =* "+wallet+"\n\n*🚀If Your Account Wallet Is Undefined Set It By Click In Below Button🔻*")
