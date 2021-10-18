/*CMD
  command: ⚜️ Joined ⚜️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");
var a1 = Bot.getProperty("a1")
var a2 = Bot.getProperty("a2")
var a3 = Bot.getProperty("a3")
var a4 = Bot.getProperty("a4")
var a5 = Bot.getProperty("a5")
if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let channel = a1,a2,a3,a4,a5;
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel,
user_id : id,
on_result :"check"})
}
