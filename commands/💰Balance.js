/*CMD
  command: 💰Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var currency = Bot.getProperty("currency")
var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*Name : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed(2)+" "+currency+"\n\nRefer More Earn More*")
