/*CMD
  command: /onGetBroadcastMessage
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type == "private") {
  Api.forwardMessage({
    chat_id: user.telegramid,
    from_chat_id: options.id,
    message_id: options.msg
  })
  return
}
Api.forwardMessage({
  from_chat_id: options.id,
  message_id: options.msg
})
