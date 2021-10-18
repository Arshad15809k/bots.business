/*CMD
  command: 💵 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var minwith = Bot.getProperty("minwith")
var currency = Bot.getProperty("currency")
let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ wallet Not set_")
}else{
if (balance.value() < minwith){
Bot.sendMessage("_❌ You have to earn at least "+minwith+" "+currency+" !_")
}else{
Bot.sendMessage("*📤 Enter Amount in ₹*")
Bot.runCommand("auto")
}
}}
