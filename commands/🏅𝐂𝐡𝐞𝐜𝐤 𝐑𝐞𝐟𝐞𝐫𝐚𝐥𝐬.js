/*CMD
  command: πππ‘πππ€ πππππ«ππ₯π¬
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
    msg+= "\nπ€ " +  user.first_name + " @" + user.username + "";
  }
}else{
  msg = "πππ π»ππ»β'π βπΌπ½πΌββπΌπ» πΈβπ πππΌβ ββ";
}
Bot.sendMessage(msg);
