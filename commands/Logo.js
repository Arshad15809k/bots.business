/*CMD
  command: Logo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
Api.sendPhoto({
photo: "https://demo.sirv.com/oman.jpg?text="+wallet+"&text.font.weight=extra-bold&text.size=70&text.font.style=italic&text.outline.width=15&text.outline.color=4241A2&text.position=center&text.font.family=Bitter&text.color=FFFFFF&text.outline.blur=10",
caption: "*📝 Congrats! Your Logo Is Ready...*",
parse_mode: "markdown",
})
