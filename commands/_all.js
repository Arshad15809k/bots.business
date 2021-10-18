/*CMD
  command: /all
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📥*Send Your Message For Broadcasting*
  keyboard: 
  aliases: 
CMD*/

Bot.runAll({ 
command: "hs",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*🚀 Message Sended To All Users*")
