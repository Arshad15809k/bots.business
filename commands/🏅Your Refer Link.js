/*CMD
  command: 🏅Your Refer Link
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var refbon = Bot.getProperty("refbon")
var currency = Bot.getProperty("currency")
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","User");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*Total Invites  : "+refList.length+" Users\n\n⛔️ Per refer "+refbon+" "+currency+"\n\n🔗 referral link ⬇️\n"+reflink+"*");

}
