/*CMD
  command: /admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("key")
if (user.telegramid == key) {
  var button = [
    [
      { title: "🔄 Change Currency name", command: "currency" },
      { title: "🎙 Broadcast", command: "Ssd" }
    ],
    [
      { title: "💰Refer bonus", command: "refbon" },
      { title: "💫bot link", command: "botlink" }
    ],
    [
      { title: "🛑 Minimum Withdraw", command: "minwith" },
      { title: "✅ Payment channal", command: "paych" }
    ],
    [
      { title: "Channel 1", command: "a1" },
      { title: "Channel 2", command: "a2" },
      { title: "Channel 3", command: "a3" }
     ],
     [
      { title: "Channel 4", command: "a4" },
      { title: "Channel 5", command: "a5" }
    ],
    [
      { title: "🗣️ Transfer Panel", command: "/jp" },
      { title: "🎁 Set Bonus", command: "bon" }
    ],
    [
      { title: "🎇 set Refer Image ", command: "image" },
      { title: "🎆 Set withdraw Image  ", command: "image2" }
    ],
    [
      { title: "⚙️Set start message  ", command: "start" },
      { title: "GET USER DETAILS", command: "getdetails" }
     ],
      [
      { title: "Set 1  ", command: "Ad" }
    ]
  ]

  Bot.sendInlineKeyboard(
    button,
    "*Hey " +
      user.first_name +
      "\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work\n*"
  )
} else {
  Bot.sendMessage("❌You Are Not An Admin !")
}
