/*CMD
  command: 🏅𝐂𝐡𝐞𝐜𝐤 𝐑𝐞𝐟𝐞𝐫𝐚𝐥𝐬
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(var i in refList){
    user = refList[i];
    msg+= "\n👤 " +  user.first_name + " @" + user.username + "";
  }
}else{
  msg = "𝕐𝕆𝕌 𝔻𝕀𝔻ℕ'𝕋 ℝ𝔼𝔽𝔼ℝℝ𝔼𝔻 𝔸ℕ𝕐 𝕌𝕊𝔼ℝ ❌❌";
}
Bot.sendMessage(msg);
