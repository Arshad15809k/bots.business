/*CMD
  command: YOYO
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("wallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 100) {
    Bot.sendMessage("_❌ Minimum Withdraw 100 points_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(1) + " points_"
      )
    } else {
      Bot.sendMessage(
        "*Initiated Successfully\nPlease wait, we will check your refer and we will message you 🔥*")
Bot.sendMessage(
        "*Payment Channel @earningmafiaofficial*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@BOTS_KIN",
        text:
          "*🔋 New Withdraw Requested 🏦\n\n▪️ Status = Pending\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " points\n▪️ User Referrals = " +
          refList.length +
          "\n\n💳 Address =\n " +
          wallet +
          "\n\n👮🏻‍♂️ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}
Bot.runCommand("Cr")
