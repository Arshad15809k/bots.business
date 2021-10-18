/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var 1 = Bot.getProperty("a1")
var 2 = Bot.getProperty("a2")
var 3 = Bot.getProperty("a3")
var 4 = Bot.getProperty("a4")
var 5 = Bot.getProperty("paych")
var start = Bot.getProperty("start")
var button = [{ title: "⚜️ Joined ⚜️", command: "⚜️ Joined ⚜️" }]
Bot.sendInlineKeyboard(
  button,
  "*💡 To Usᴇ Tʜɪs Bᴏᴛ Yᴏᴜ Nᴇᴇᴅ Tᴏ Jᴏɪɴ Aʟʟ Cʜᴀɴɴᴇʟs -\n📦MAIN CHANNEL \n🪅"+1+"\n🪅"+2+"\n🪅"+3+"\n🪅"+4+"\n\n📦PROMOTERS\n"+start+"\n\n📦PAYMENT CHANNEL \n🪅"+5+"*"
)

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*❌You're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    ""
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*🥳𝕐𝕠𝕦 𝔸𝕝𝕣𝕖𝕒𝕕𝕪 𝕊𝕥𝕒𝕣𝕥𝕖𝕕 𝕋𝕙𝕖 𝔹𝕠𝕥 *")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
Bot.sendMessageToChatWithId(1380682887, "*ℕ𝔼𝕎 𝕌𝕊𝔼ℝ 𝔸𝕃𝔼ℝ𝕋\n\nName: *"+user_link+"*\n\nID: "+user.telegramid+"*")}

  User.setProperty("welco", user.telegramid, "text")
