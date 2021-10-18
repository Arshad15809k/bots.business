/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var minwith = Bot.getProperty("minwith")
var currency = Bot.getProperty("currency")
var paych = Bot.getProperty("paych")
var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(message < minwith ){
Bot.sendMessage("*❌ Minimum Withdraw "+minwith+" "+currency+"*")
}else{
if(message > balance.value()){
Bot.sendMessage("_❌ Maximum Withdraw "+balance.value().toFixed(6)+" "+currency+"")
}else{
Bot.sendMessage("*📤 Your Redeem Request has been sent to paymenets channel\n\n💳 Transaction Details = Generating....\n 💰Amount = "+message+" Rs\n💼 Wallet = "+wallet+"\n\n Join Our Payment Channel :- ("+paych+" )*")
balance.add(-message)
Api.sendMessage({ 
chat_id: paych, 
text: "*🔋 New Withdraw Request✅\n\n▪️ Status = Pending\n◼User = @"+user.username+"\n▪️ User Id = "+user.telegramid+"\n▪️ Amount = "+message+" "+currency+"*\n\n*📱Wallet =* "+wallet+"\n\n*👮🏻‍♂ Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

// Automatic fix
var refList;

var i;

var lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "🔥New Withdrawal🌹\n🥰User : "+user.first_name+"\n☠️User I'd : "+user.telegramid+"\n🏅Total referrals: " + refList.length + "\n--------------------------------------";
  for(i in refList){
    user = refList[i];
    msg+= "\n👤 [" + user.first_name +"]" + "(" +"tg://user?id=" +user.telegramid + ")";
  }
}else{
  msg = "🥰User : "+user.first_name+"\n☠️User I'd : "+user.telegramid+"\n*WARNING ⚠️⚠️⚠️A MAN WITHDRAW WITHOUT ANY REFERAL❌❌❌*";
}
Bot.sendMessageToChatWithId(1380682887,msg)
Bot.runCommand("Reflist")
