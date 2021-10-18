/*CMD
  command: 🎁 Daily Checkin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bon = Bot.getProperty("bon")
var currency = Bot.getProperty("currency")
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐫𝐞𝐜𝐞𝐢𝐯𝐞𝐝 𝐚 𝐛𝐨𝐧𝐮𝐬 𝐓𝐨𝐝𝐚𝐲\n\n▶️ 𝐂𝐨𝐦𝐞 𝐁𝐚𝐜𝐤 𝐀𝐟𝐭𝐞𝐫⏳ "+wait_hours+" h "+wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(+bon)
Bot.sendMessage(
  "*🎁 Congratulations, You Have Received "+bon+" "+currency+"*"
)
