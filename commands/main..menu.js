/*CMD
  command: main..menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🔙 back, 🔙back
CMD*/

var currency = Bot.getProperty("currency")
var refbon = Bot.getProperty("refbon")
var paych = Bot.getProperty("paych")
var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){

if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(+refbon)
  Bot.sendMessageToChatWithId(refUser.chatId, "You Earned + "+refbon+" "+currency+"\n*New User :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("🎁 Daily Checkin,💰Balance\n👫 Refer And Earn,⚙️Set wallet\n💵 Withdraw,🥇Check Refferals,📊 Statistics", "*REFER AND EARN🥰🥰*")
}
if (userstat=="left"){
Bot.runCommand("/start");
}
