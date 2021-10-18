/*CMD
  command: /clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send mail
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1380682887){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}
