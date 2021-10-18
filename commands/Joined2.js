/*CMD
  command: Joined2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");
var a2 = Bot.getProperty("a2")
if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{

let channel = "@earningmafiaofficial";
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel,
user_id : id,
on_result :"check2"})
}
