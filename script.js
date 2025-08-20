//==========================================[Configuration data]

var config = {
  "twitch":{ //[Configuration related to twitch management]
    "target":null, //This property is automatically updated based on url parameter
    "channels":[],
    "admin":["fiercethundr_"],
    "bot":[
      "19264788",  //Nightbot
      "100135110", //Streamelements
      "216527497", //Soundalerts
      "402337290", //Sery_Bot
      "646848961"  //BotRixOficial
    ] 
  },
  "override":{ //[Channel config overrides]
    "hereliestres":{
      "redeem":{
        "beanboozled":"32a04320-df94-475b-a864-12310a8c95f2",
        "achievement":"8cb6898c-f26c-4bb1-8dbb-536de1800027",
        "tts":"06cc71bd-8e55-4d5d-9bb5-3c6b83fa4c91",
        "seize":"e07d5642-2daf-42e1-bf23-62752605d9a0"
      }
    },
    "kaynhex":{
      "redeem":{
        "achievement":"f1ff422f-e49e-497f-8fdb-4823ed48933c"
      }
    }
  }, /**/
  "audio":{ //[Audio effects]
    //Important sound effects
    "achievement_rare":new Audio("assets/achievement_rare.mp3"),
    "achievement_norm":new Audio("assets/achievement_norm.mp3"),
    "chatterbox_alert":new Audio("assets/chatterbox_alert.mp3"),
    //Moderator intro library
    "intro_cyborg":new Audio("assets/intro_cyborg.mp3"),
    "intro_king_v1":new Audio("assets/intro_king_v1.mp3"),
    "intro_king_v2":new Audio("assets/intro_king_v2.mp3"),
    "intro_queen":new Audio("assets/intro_queen.mp3"),
    "intro_royal":new Audio("assets/intro_royal.mp3"),
    "intro_lollypop":new Audio("assets/intro_lollypop.mp3"),
    "intro_fierce":new Audio("assets/intro_fierce.mp3"),
    "intro_lux":new Audio("assets/intro_lux.mp3"),
    "intro_marz":new Audio("assets/intro_marz.mp3"),
    "intro_tokyo":new Audio("assets/intro_tokyo.mp3"),
    "intro_chris":new Audio("assets/intro_chris.mp3"),
    "intro_frendo":new Audio("assets/intro_frendo.mp3"),
    "intro_rei":new Audio("assets/intro_rei.mp3"),
    "intro_julius":new Audio("assets/intro_julius.mp3"),
    "intro_retro":new Audio("assets/intro_retro.mp3"),
    "intro_tengen":new Audio("assets/intro_tengen.mp3"),
    //Troll sound library
    "troll_discord":new Audio("assets/troll_discord.mp3"),
    "troll_butter":new Audio("assets/troll_butter.mp3"),
    "troll_psst":new Audio("assets/troll_psst.mp3"),
    "troll_freddy":new Audio("assets/troll_musicbox.mp3"),
    "troll_jumpscare":new Audio("assets/troll_jumpscare.mp3"),
    "troll_shutdown":new Audio("assets/troll_shutdown.mp3"),
    "troll_knocking1":new Audio("assets/troll_knocking1.mp3"),
    "troll_knocking2":new Audio("assets/troll_knocking2.mp3"),
    "troll_waterphone":new Audio("assets/troll_waterphone.mp3"),
    "troll_fellas":new Audio("assets/troll_fellas.mp3"),
    "troll_buzzer":new Audio("assets/troll_buzzer.mp3"),
    "troll_jojo":new Audio("assets/troll_jojo.mp3"),
    "troll_mariodeath1":new Audio("assets/troll_mariodeath1.mp3"),
    "troll_mariodeath2":new Audio("assets/troll_mariodeath2.mp3"),
    "troll_vine":new Audio("assets/troll_vine.mp3"),
    "troll_illuminati":new Audio("assets/troll_illuminati.mp3"),
    "troll_enthusiasm":new Audio("assets/troll_enthusiasm.mp3"),
    "troll_hacked":new Audio("assets/troll_hacked.mp3"),
    "troll_donation":new Audio("assets/troll_donation.mp3"),
    "troll_backrooms":new Audio("assets/troll_backrooms.mp3"),
    "troll_circus":new Audio("assets/troll_circus.mp3"),
    "troll_zelda":new Audio("assets/troll_zelda.mp3"),
    "troll_surprise":new Audio("assets/troll_surprise.mp3"),
    "troll_null":new Audio("assets/troll_null.mp3"),
    "troll_flowey":new Audio("assets/troll_flowey.mp3"),
    "troll_wilhelm":new Audio("assets/troll_wilhelm.mp3"),
    "troll_walls":new Audio("assets/troll_walls.mp3"),
    "troll_screech":new Audio("assets/troll_screech.mp3"),
    "troll_hallelujah":new Audio("assets/troll_hallelujah.mp3"),
    "troll_pipe":new Audio("assets/troll_pipe.mp3"),
    "troll_winning":new Audio("assets/troll_winning.mp3"),
    "troll_inquisition":new Audio("assets/troll_inquisition.mp3"),
    "troll_donethis":new Audio("assets/troll_donethis.mp3"),
    "troll_alarm":new Audio("assets/alarm.mp3"),
    //Random sound effects
    "gauntlet_violation":new Audio("assets/gauntlet_violation.mp3"),
    "gauntlet_secret":new Audio("assets/gauntlet_secret.mp3")
  }, //*/
  "preset":{ //[Preset data for execute and tweak]
    "execute":{
      "spamstart":'((a,t)=>{var o=config.audio,e=Object.keys(o);clearTimeout(data.timeout.chaos),!0===a&&(data.timeout.chaos=setInterval((()=>{play_audio(o[e[Math.floor(Math.random()*e.length)]])}),t))})(true,1000)',
      "spamstop":'clearTimeout(data.timeout.chaos)',
      "twitch":'document.getElementById("tweak_content").innerHTML=`<div id="twitch-embed" style="position:absolute;top:0;left:0;height:100%;width:100%;opacity:0;"></div>`;new Twitch.Embed("twitch-embed",{width:"100%",height:"100%",layout:"video",muted:"<param2>",channel:"<param1>",parent:["fierce-overlay.glitch.me"]});setTimeout(()=>document.getElementById("twitch-embed").style.opacity=1,30000)'
    },
    "tweak":{
      //Website overlays
      "web_sketchy":'<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;box-sizing:border-box;" src="https://sketchywebsite.net/"></iframe>',
      "web_falling":'<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;border:0px;" src="https://fallingfalling.com/"></iframe>',
      "web_matrix":'<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;border:0px;" src="https://pranx.com/matrix-code-rain/"></iframe>',
      "web_trippy":'<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;border:0px;" src="https://www.innerdoubts.com/"></iframe>',
      "web_update":'<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;border:0px;" src="https://fakeupdate.net/win10ue/"></iframe>',
      "web_cat":'<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;border:0px;" src="https://cat-bounce.com/"></iframe>',
      //Random tweaks
      "embed":'<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;border:0px;" src="<param1>"></iframe>',
      "image":'<div style="position:absolute;left:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;"><img src="<param1>"></div>',
      "songbattle":'<div style="position:absolute;right:0;top:0;width:440px;height:485px;overflow:hidden;box-sizing:border-box;border:1px solid white;"><iframe style="position:absolute;right:0;top:0;width:200%;height:500%;transform:scaleX(0.5) scaleY(0.47);transform-origin:top right;border:0;" src="https://songbattle.io/game/<param1>/tree"></iframe></div>',
      "react":'<img src="<param1>" width="100" style="bottom:0;right:0;position:absolute">',
      "hidefull":'<div style="position:absolute;right:10px;bottom:15px;background:black;height:329px;width:416px"></div>'
    }
  },
  "intro":{
    "index":{
      "!cyborg":{"user-id":["811018233"],"duration":5,"text":"The Gentleman waltzes in!","audio":"intro_cyborg","image":{"width":350,"height":350,"url":"assets/intro_cyborg.png"},"css":"#intro_wrapper::before{filter:invert(23%)sepia(22%)saturate(1750%)hue-rotate(202deg)brightness(97%)contrast(136%)}"},
      "!king":{"user-id":["715026972"],"duration":7,"text":"The King marches in!","audio":"intro_king_v2","image":{"width":350,"height":350,"url":"assets/intro_king.png"}},
      "!queen":{"user-id":["969633584"],"duration":5.8,"text":"The Queen saunters in!","audio":"intro_queen","image":{"width":350,"height":350,"url":"assets/intro_king.png"}},
      "!royal":{"user-id":["750529250"],"duration":5.8,"text":"Royal appears from the shadows!","audio":"intro_royal","image":{"width":350,"height":350,"url":"assets/intro_royal.png"},"css":"@keyframes intro_image{0%,100%{transform:translate(-50%,-50%)scale(0)}25%,85%{transform:translate(-50%,-50%)scale(1)}}"},
      "!lollypop":{"user-id":["916279789"],"duration":7.1,"text":"Lollypop rolls on in!","audio":"intro_lollypop","image":{"width":350,"height":350,"url":"assets/intro_lollypop.png"},"css":"@keyframes intro_image{0%,100%{transform:translate(-50%,-50%)scale(0)}25%{transform:translate(-50%,-50%)scale(1)rotate(-15deg)}85%{transform:translate(-50%,-50%)scale(1)rotate(20deg)}}#intro_wrapper::after{color:hotpink}"},
      "!fierce":{"user-id":["130774466"],"duration":7.1,"text":"Fierce breaks into stream!","audio":"intro_fierce","image":{"width":350,"height":350,"url":"assets/intro_fierce.png"},"css":"@keyframes intro_text{0%{transform:translate(-100vw,-50%)rotate(0deg)}25%{transform:translate(-50%,-50%)rotate(10deg)}85%{transform:translate(-50%,-50%)rotate(-5deg)}100%{transform:translate(100vw,-50%)rotate(0deg)}}@keyframes intro_image{0%,100%{transform:translate(-50%,-50%)scale(0)}25%,85%{transform:translate(-50%,-50%)scale(1)}}#intro_wrapper::after{text-shadow:-3px 3px 10px black}#intro_wrapper::after{color:lime;font-family:monospace}"},
      "!lux":{"user-id":["421779708"],"duration":7,"text":"Lux flashes into the scene!","audio":"intro_lux","image":{"width":500,"height":350,"url":"assets/intro_lux.png"}},
      "!marz":{"user-id":["609778187"],"duration":6.2,"text":"A wild Mars has appeared!","audio":"intro_marz","image":{"width":350,"height":350,"url":"assets/intro_marz.png"},"css":"#intro_wrapper::before{border-radius:100%;box-shadow:0 0 41px 30px #010101}"},
      "!tokyo":{"user-id":["193825637"],"duration":6.3,"text":"Invaded by dark spirit Tokyo!","audio":"intro_tokyo","image":{"width":450,"height":254,"url":"assets/intro_tokyo.gif"},"css":"@keyframes intro_image{0%,100%{transform:translate(-50%,-50%)scale(0)}25%,85%{transform:translate(-50%,-50%)scale(1)}}#intro_wrapper::before{box-shadow:inset 0px 0px 20px 17px black,0px 0px 20px 20px black;border-radius:140px;}#intro_wrapper::after{color:#612626}"},
      "!chris":{"user-id":["96351226","1053890943"],"duration":7.5,"text":"Chris warps into the stream!","audio":"intro_chris","image":{"width":450,"height":450,"url":"assets/intro_kat.png"},"css":"@keyframes intro_image{0%,100%{transform:translate(-50%,-50%)scale(0)}25%,85%{transform:translate(-50%,-50%)scale(1)}}"},
      "!frendo":{"user-id":["714209082"],"duration":6,"text":"Frendo fades in!","audio":"intro_frendo","image":{"width":400,"height":400,"url":"assets/intro_frendo.png"},"css":"@keyframes intro_image{0%,100%{transform:translate(-50%,-50%)scale(0);filter:blur(100px)}73%,90%{transform:translate(-50%,-50%)scale(1);filter:blur(0px)}}"},
      "!rei":{"user-id":["503717274"],"duration":6,"text":"Rei has arrived to gamble!","audio":"intro_rei","image":{"width":500,"height":500,"url":"assets/intro_rei.gif"},"css":"@keyframes intro_image{0%,100%{transform:translate(-50%,-50%)scale(0)}25%,85%{transform:translate(-50%,-50%)scale(1)}}"},
      "!julius":{"user-id":["125850048"],"duration":6,"text":"The Horror is here!","audio":"intro_julius","image":{"width":300,"height":300,"url":"assets/intro_julius.gif"},"css":"#intro_wrapper::before{border:15px solid;border-bottom:70px solid;border-color:#dfdfdf;border-radius:5px}#intro_wrapper::after{font-size:30px;color:black;}@keyframes intro_image{0%,100%{top:-400px;right:50px;left:unset;transform:unset}25%,85%{top:50px;transform:rotate(3deg)}}@keyframes intro_text{0%,100%{top:-70px;right:72px;left:unset;transform:unset}25%,85%{top:380px;transform:rotate(3deg)}}"},
      "!retro":{"user-id":["960794250"],"duration":7,"text":"Retro has joined the chat!","audio":"intro_retro","image":{"width":300,"height":300,"url":"assets/intro_retro.png"},"css":"#intro_wrapper::before{border-radius:100%;background-color:white;box-shadow:0 0 15px 15px #FFFFFF}"},
      "!tengen":{"user-id":["960161888"],"duration":9.5,"text":"Tengen is back bitches!","audio":"intro_tengen","image":{"width":466,"height":350,"url":"assets/intro_tengen.gif"},"css":"@keyframes intro_image{0%{transform:translate(-50%,-100vw)}50%,85%{transform:translate(-50%,-50%)}100%{transform:translate(-50%,100vw)}}@keyframes intro_text{0%{transform:translate(-50%,-100vh)rotate(0deg)}50%{transform:translate(-50%,-50%)rotate(10deg)}85%{transform:translate(-50%,-50%)rotate(-5deg)}100%{transform:translate(-50%,100vh)rotate(0deg)}}#intro_wrapper::before{border-radius:30px}#intro_wrapper::after{color:blueviolet;-webkit-text-stroke:black 1px;font-family:Garamond,serif}"},
    },
    "cooldown":3600000 //1 Hour
  },
  "bean":{ //[Beanboozled initial values]
    "data":[
      //Standard beans (6th Edition)
      {"color":"#1d1d1b","content":"Stink Bug"},
      {"color":"#c4060b","content":"Liver & Onions"},
      {"color":"#42b1e3","content":"Rotten Egg"},
      {"color":"#f28a15","content":"Booger"},
      {"color":"#592b82","content":"Dead Fish"},
      {"color":"#1d1d1b","content":"Toothpaste"},
      {"color":"#c4060b","content":"Dirty Dishwater"},
      {"color":"#42b1e3","content":"Barf"},
      {"color":"#f28a15","content":"Stinky Socks"},
      {"color":"#592b82","content":"Old Bandage"},
      //Fiery five
      {"color":"#990b04","content":"Habanero"},
      {"color":"#fff200","content":"Carolina Reaper"},
      {"color":"#ef3f1e","content":"Jalapeño"},
      {"color":"#00ab50","content":"Sriracha"},
      {"color":"#f79517","content":"Cayenne"}
    ],
    "redeem":1
  },
  "tts":{ //[Text to speech initial values]
    "voice":"david", //David, Mark, Zira
    "volume":0.80,
    "redeem":0
  },
  "youtube":{ //[Youtube initial values]
    "volume":15
  },
  "achievement":{ //[Achievement initial values]
    "volume":0.80,
    "redeem":1
  },
  "troll":{
    "cooldown":300000,
    "permit":1
  },
  "redeem":{}, //[Redemption ID values]
  "obs":false //This property is automatically updated as needed
}

//==========================================[Handle target channel and config overrides]

config.twitch.target = new URLSearchParams(document.location.search).get("channel")
if (config.twitch.target===null) {console.warn(`[startup] Channel parameter not specified`)}
else {console.log(`[startup] Target channel specified as "${config.twitch.target}"`);mergeDeep(config,config.override[config.twitch.target]??{})}

//==========================================[Dynamic data]

var data = {
  "bot":{
    "command":{},
    "reward":{},
    "default":[],
    "message":[]
  },
  "timeout":{
    "announcement_clear":0,
    "message_clear":0,
    "poll_update":0,
    "poll_toggle":0,
    "raffle_reset":0,
    "achieve_reset":0,
    "first_close":0,
    "death_toggle":0,
    "timer_update":0,
    "timer_toggle":0,
    "seize_close":0,
    "intro_reset":0,
    "youtube_force":0,
    "queue_delete":0,
    "rgb_interval":0,
    "rgb_reset":0,
    "chatterbox_alert":0,
    "website_reset":0,
    "debug_intro_lock":0
  },
  "poll":{
    "options":[],
    "votes":{},
    "duration":-1,
    "limit":0,
    "multi":0
  },
  "queue":{
    "joined":[],
    "kicked":[],
    "repeat":0,
    "state":-1
  },
  "raffle":{
    "joined":[],
    "kicked":[],
    "winner":-1,
    "state":-1
  },
  "bean":{
    "redeem":config.bean.redeem,
    "state":0
  },
  "roll":{
    "state":0
  },
  "wheel":{
    "queue":[],
    "state":0
  },
  "first":{
    "early":[],
    "stale":0,
    "active":0
  },
  "death":{
    "count":0,
    "state":0
  },
  "timer":{
    "duration":-1,
    "label":""
  },
  "youtube":{
    "player":undefined,
    "queue":[],
    "fullscreen":0,
    "shuffle":0,
    "loop":0
  },
  "tts":{
    "instance":window.speechSynthesis,
    "queue":[],
    "synth":undefined,
    "voice":config.tts.voice,
    "volume":config.tts.volume,
    "redeem":config.tts.redeem
  },
  "achievement":{
    "queue":[],
    "state":0,
    "volume":config.achievement.volume,
    "redeem":config.achievement.redeem
  },
  "seize":{
    "state":0,
    "locked":0
  },
  "intro":{
    "cooldown":{},
    "state":0
  },
  "troll":{
    "cooldown":{},
    "permit":config.troll.permit
  }
}

//==========================================[Overlay Startup Function]

window.onload = function(){ //When the page loads, handle necessary setup
  //Remove the background if OBS is detected
  config.obs = (window.obsstudio != undefined)
  if (config.obs) {document.body.classList.add("obs")}
  //Activate twitch bot if target channel is defined
  if (config.twitch.target!==null) {
    ["channels","admin"].forEach(e=>config.twitch[e].push(config.twitch.target))
    var anon_client = new tmi.client({connection:{reconnect:true},channels:config.twitch.channels});
    ["connecting","connected","reconnect","disconnected"].forEach((e,i)=>anon_client.on(e,()=>twitch_status(i)))
    anon_client.on("message",twitch_message)
    anon_client.connect()
  }
  //Complete any remaining setup
  youtube_prepare()
  document.body.classList.add("ready")
}

//==========================================[Chat Processing Functions]

function twitch_message(target,context,message,self) { //Handle messages received by the twitch bot
  function safe_execute(target,label){try{target(array,context,permission,channel)}catch(error){console.error(`[${label} error] (${target.name}) ${error}`)}}
  if (self) {return}
  var channel = target.slice(1), array = message.trim().split(" "), permission = config.twitch.admin.includes(context["username"])?2:context["mod"]?1:0
  context["color"] ??= "#00FF7F"
  //==========================[Registered Redemption Handling]
  var reward = context["custom-reward-id"]
  if (reward != undefined) {var callback=data.bot.reward[reward]?.callback;if(callback!=undefined){safe_execute(callback,"reward")};return}
  //==========================[Registered Command Handling]
  var command = data.bot.command[array[0]]
  if (command != undefined) {if (permission >= command.permission) {safe_execute(command.callback,"command")}}
  else {data.bot.default.forEach((callback)=>{safe_execute(callback,"default")})}
  //==========================[Registered Message Handling]
  data.bot.message.forEach((callback)=>{safe_execute(callback,"message")})
}

function twitch_register(type,callback,reference,permission) {
  if (typeof type!="string"||typeof callback!="function") {console.error(`[register error] Bad arguments`)}
  switch (type) {
    case "command":if(typeof reference!="string"||typeof permission!="number"){console.error(`[register error] Bad arguments`)};data.bot.command[reference]={"callback":callback,"permission":permission};break;
    case "reward":if(typeof reference!="string"){console.error(`[register error] Bad arguments`)};data.bot.reward[reference]={"callback":callback};break;
    case "default":data.bot.default.push(callback);break;
    case "message":data.bot.message.push(callback);break;
    default:console.error(`[register error] Undefined register type "${type}"`)
  }
}

//============================== [Temporary / Joke Functions]

//(()=>{config.audio.troll_alarm=new Audio("assets/alarm.mp3");function oxygen_command(){play_audio("troll_alarm")};twitch_register("command",oxygen_command,"!oxygen",0)})()

//twitch_register("command",oxygen_command,"!oxygen",0)

function oxygen_command() {
  play_audio(config.audio.troll_alarm)
}

twitch_register("command",task_command,"!task",1)

function task_command(array) {
  var message = array.slice(2).join(" ")
  document.getElementById("announcement").classList.toggle("visible",message!=="")
  document.getElementById("announcement").innerText = message
  balanceText("#announcement")
  clearTimeout(data.timeout.announcement_clear)
}

(()=>{twitch_register("command",task_command,"!task",1);function task_command(array) {var message = array.slice(1).join(" ");document.getElementById("announcement").classList.toggle("visible",message!=="");document.getElementById("announcement").innerText = message;balanceText("#announcement");clearTimeout(data.timeout.announcement_clear)}})()

//============================== [Poll Functions]

twitch_register("command",vote_command,"!vote",0)
twitch_register("command",poll_command,"!poll",1)

function vote_command(array,context) { //Processing for the !vote command
  //=====[Ignore command if a poll is not currently running]
  if (data.poll.duration <= 0) {return}
  //=====[Parse and update votes for the voter]
  if (!array[1] || new RegExp(`[^1-${data.poll.limit}]`).test(array[1])) {return}
  if (!data.poll.multi && array[1].length != 1) {return}
  data.poll.votes[context["user-id"]] = [...new Set(array[1].split(""))]
  poll_update()
}

function poll_command(array) { //Processing for the !poll command
  switch(array[1]) {
    case "create":
      //=====[Validate request and input parameters]
      if (data.poll.duration != -1) {show_message("Error! Poll in progress!");return}
      if (array[2] == undefined) {show_message("Error! Missing duration!");return}
      var duration = parseInt(array[2],10)
      if (isNaN(duration) || duration <= 0) {show_message("Error! Invalid duration!");return}
      if (duration > 60) {show_message("Error! Maximum duration is 60 minutes!");return}
      var options = array.slice(3).join(" ").split("|").map(v=>v.trim())
      if (options.length < 3) {show_message("Error! Missing labels!");return}
      if (options.length > 10) {show_message("Error! Too many options!");return}
      //=====[Fill poll display with provided labels]
      document.getElementById("poll_title").innerText = options[0] || "Untitled Poll"
      balanceText("#poll_title")
      document.getElementById("poll_options").innerHTML = ""
      options.slice(1).forEach((v) => {document.getElementById("poll_options").append(Object.assign(document.createElement("li"),{"innerText":v}))})
      //=====[Prepare poll data for the new poll]
      data.poll.options = options
      data.poll.votes = {}
      data.poll.limit = options.length-1
      data.poll.duration = duration * 60
      //=====[Start update routine]
      clearInterval(data.timeout.poll_update)
      data.timeout.poll_update = setInterval(()=>{data.poll.duration--;poll_update()},1000)
      //=====[Call immediate update and open poll display]
      poll_update()
      poll_toggle(true)
      return
    case "delete":
      //=====[Stop updates and close the display]
      if (data.poll.duration == -1) {return}
      clearInterval(data.timeout.poll_update)
      poll_toggle(false)
      return
    case "stop":
      //=====[Set remaining time to 0 and call update]
      if (data.poll.duration == -1) {return}
      data.poll.duration = 0
      poll_update()
      return
    case "multi":
      //=====[Toggle mode and display result]
      if (data.poll.duration != -1) {show_message("Error! Multi-voting cannot be changed during poll!");return}
      data.poll.multi ^= 1
      show_message(`Multi-voting is now ${(data.poll.multi) ? "enabled":"disabled"}`)
      document.getElementById("poll_multi").innerText = (data.poll.multi) ? "s":""
      return
  }
}

function poll_toggle(visible) { //Toggle the visibility of the poll overlay
  clearTimeout(data.timeout.poll_toggle)
  document.getElementById("poll_content").classList.toggle("visible",visible)
  if (!visible) {data.poll.duration = -1}
}

function poll_update() { //Update poll display as necessary
  //=====[Calculate vote totals]
  var vote_tally = [0,0,0,0,0,0,0,0,0], vote_total = 0, vote_users = 0
  Object.values(data.poll.votes).forEach((u)=>{u.forEach((v)=>{vote_tally[v-1]++;vote_total++});vote_users++})
  //=====[Update options]
  var poll_list = document.getElementById("poll_options");
  [...poll_list.children].forEach((e,i)=>{
    var percent = Math.round((vote_tally[i]/vote_total)*100)||0
    e.style.setProperty("--percent",`${percent}%`)
    e.style.setProperty("--details",`"${percent}% (${vote_tally[i]})"`)
  })
  //=====[Update footer]
  document.getElementById("poll_votes").innerText = vote_users
  document.getElementById("poll_timer").innerText = Math.floor(data.poll.duration/60).toString().padStart(2,"0")+":"+(data.poll.duration%60).toString().padStart(2,0)
  //=====[Handle end of poll]
  if (data.poll.duration == 0) {
    //=====[Find the winners and highlight them]
    var winners = vote_tally.reduce((a,b,c,d)=>{var e=d[a[0]]||1;if(b>e){return[c]};if(b==e){a.push(c)}return a},[]);
    [...poll_list.children].forEach((e,i)=>e.classList.toggle("highlight",winners.includes(i)))
    //=====[Announce poll result]
    tts_append_raw(`The poll ${(data.poll.options[0]!="")?`for ${data.poll.options[0]}`:""} has ${(winners.length==0)?`ended, but no votes were received!`:(winners.length==1)?`ended with ${data.poll.options[winners[0]+1]} as the result!`:`tied! The results are ${((i)=>[i.slice(0,-1).join(", "),i.slice(-1)].join(", and "))(winners.map(i=>data.poll.options[i+1]))}`}`)
    //=====[Stop the update function and close the poll]
    clearInterval(data.timeout.poll_update)
    data.timeout.poll_toggle = setTimeout(()=>{poll_toggle(false)},15000)
  }
}

//============================== [Raffle Functions]

twitch_register("command",join_command,"!join",0)
twitch_register("command",raffle_command,"!raffle",1)

function join_command(_,context) { //Processing for the !join command
  if (data.raffle.state != 0) {return}
  if (data.raffle.joined.map(e=>e.id).includes(context["user-id"]) || data.raffle.kicked.includes(context["user-id"])) {return}
  var element = Object.assign(document.createElement("li"),{"innerText":context["display-name"]})
  document.getElementById("raffle_list").append(element)
  data.raffle.joined.push({"id":context["user-id"],"name":context["display-name"],"color":context["color"],"element":element})
  document.getElementById("raffle_entries").innerText = data.raffle.joined.length
}

function raffle_command(array) { //Processing for the !raffle command
  function raffle_toggle(visible){document.getElementById("raffle_content").classList.toggle("visible",visible);data.raffle.state=+visible-1;if(!visible){data.raffle.winner=-1}}
  function raffle_highlight(state,index,total){var list=document.getElementById("raffle_list");list.style.setProperty("--offset",`${(state)?(index-total+3)*23:0}px`);[...list.children].forEach((e,i)=>e.classList.toggle("highlight",index==i))}
  switch(array[1]) {
    case "create":
      if (data.raffle.state == 1) {show_message("Error! Roll in progress!");return}
      document.getElementById("raffle_entries").innerText = 0
      document.getElementById("raffle_list").innerHTML = ""
      data.raffle.joined = []
      data.raffle.kicked = []
      raffle_highlight(false)
      raffle_toggle(true)
    case "rename":
      if (data.raffle.state == -1) {return}
      document.getElementById("raffle_title").innerText = array.slice(2).join(" ") || "Untitled Raffle"
      balanceText("#raffle_title")
      return
    case "roll":
      if (data.raffle.state == 1) {show_message("Error! Roll in progress!");return}
      if (data.wheel.state == 1) {show_message("Error! Wheel is busy!");return}
      if (data.raffle.state != 0) {return}
      if (data.raffle.joined.length < 2) {show_message("Error! Not enough entries to roll!");return}
      data.raffle.state = 1
      clearTimeout(data.timeout.raffle_reset)
      raffle_highlight(false)
      var entries = data.raffle.joined.map(e=>({"content":e.name,"color":e.color})),
          winner = data.raffle.winner = ((e)=>{var b=[...e];shuffle(b);return b[0]})(data.raffle.joined),
          index = data.raffle.joined.indexOf(data.raffle.winner),
          total = data.raffle.joined.length,
          stop = ()=>(tts_append_raw(`${winner.name} has won the raffle`),raffle_highlight(true,[index],total)),
          finish = ()=>(data.raffle.state=0,data.timeout.raffle_reset=setTimeout(()=>{raffle_highlight(false)},15000))
      create_wheel({"entries":entries,"winner":index,"colormode":1,"stop":stop,"finish":finish})
      return
    case "kick":
    case "skip":
      if (data.raffle.state == 0 && data.raffle.winner != -1) {
        clearTimeout(data.timeout.raffle_reset)
        data.raffle.winner.element.remove()
        data.raffle.joined.splice(data.raffle.joined.indexOf(data.raffle.winner),1)
        if (array[1] == "kick") {data.raffle.kicked.push(data.raffle.winner.id)}
        document.getElementById("raffle_entries").innerText = data.raffle.joined.length
        raffle_highlight(false)
        data.raffle.winner = -1
      }
      return
    case "open":
    case "close":
      if (data.raffle.state != 1) {raffle_toggle(array[1] == "open")}
      return
  }
}

//============================== [Queue Functions]

twitch_register("command",wait_command,"!wait",0)
twitch_register("command",queue_command,"!queue",1)

function wait_command(_,context) { //Processing for the !wait command
  if (data.queue.state == -1) {return}
  if ((data.queue.joined.map(e=>e.id).includes(context["user-id"]) || data.queue.kicked.includes(context["user-id"])) && !data.queue.repeat) {return}
  var element = Object.assign(document.createElement("li"),{"innerText":context["display-name"]})
  document.getElementById("queue_list").append(element)
  data.queue.joined.push({"id":context["user-id"],"name":context["display-name"],"element":element})
  document.getElementById("queue_entries").innerText = data.queue.joined.length
}

function queue_command(array) { //Processing for the !queue command
  function queue_toggle(visible){document.getElementById("queue_content").classList.toggle("visible",visible);data.queue.state=-1+!!visible}
  switch(array[1]) {
    case "create":
      document.getElementById("queue_entries").innerText = 0
      document.getElementById("queue_list").innerHTML = ""
      data.queue.joined = []
      data.queue.kicked = []
      queue_toggle(true)
      queue_advance(false)
    case "rename":
      if (data.queue.state == -1) {return}
      document.getElementById("queue_title").innerText = array.slice(2).join(" ") || "Untitled Queue"
      balanceText("#queue_title")
      return
    case "repeat":
      data.queue.repeat^=1
      show_message(`Repeat queueing is now ${(data.queue.repeat) ? "allowed":"disallowed"}`)
      return
    case "next":
      if (data.queue.state == -1) {return}
      queue_advance(true)
      return
    case "open":
    case "close":
      queue_advance(false)
      queue_toggle(array[1]=="open")
      return
  }
}

function queue_advance(state) { //Handle highlighting and advancing the queue
  clearTimeout(data.timeout.queue_shift)
  if (data.queue.state == 1) {
    var kick=data.queue.joined.shift()
    kick?.element.remove()
    data.queue.kicked.push(kick.id)
    document.getElementById("queue_entries").innerText = data.queue.joined.length
  }
  data.queue.state=+!!state
  //document.getElementById("queue_list").firstChild.classList.toggle("highlight",state&&data.queue.joined.length)
  if (!state||!data.queue.joined.length) {return}
  tts_append_raw(`${data.queue.joined[0].name} it is now your turn`)
  document.getElementById("queue_list").firstChild.classList.add("highlight")
  data.timeout.queue_shift = setTimeout(()=>{queue_advance(false)},15000)
}

//============================== [Note Functions]

twitch_register("command",note_command,"!note",1)

function note_command(array) { //Processing for the !note command
  function note_toggle(visible){document.getElementById("note").classList.toggle("visible",visible)}
  switch(array[1]) {
    case "set":document.getElementById("note").innerText = array.slice(2).join(" ");note_toggle(true);return
    case "show":case "hide":note_toggle(array[1]=="show");return
  }
}

//============================== [Beanboozled Functions]

twitch_register("command",bean_command,"!bean",1)
twitch_register("reward",(array)=>{if(data.bean.redeem){bean_roll()}},config.redeem?.beanboozled)

function bean_command(array) {
  switch(array[1]) {
    case "roll":
      if (data.bean.state != 0) {show_message("Error! Roll in progress!");return}
      if (data.wheel.state == 1) {show_message("Error! Wheel is busy!");return}
      bean_roll()
      return
    case "toggle":
      var enabled = bean_load(), index = parseInt(array[2],10)-1
      if (isNaN(index) || enabled[index]==undefined) {show_message("Error! Invalid bean index!");return}
      enabled[index]^=1
      bean_save(enabled)
      show_message(`${config.bean.data[index].content} is now ${(enabled[index]) ? "enabled":"disabled"}`)
      return
    case "redeem":
      data.bean.redeem ^= 1
      show_message(`Beanboozled redeem is now ${(data.bean.redeem) ? "enabled":"disabled"}`)
      return
  }
}

function bean_roll() {
  var enabled = bean_load(), filtered = config.bean.data.filter((e,i)=>enabled[i])
  if (filtered.length == 0) {show_message("Error! All beans disabled!");return}
  if (filtered.length == 1) {tts_append_raw(`Please eat a remaining ${filtered[index].content} bean, it is the only type remaining`);return}
  data.bean.state+=1
  var index = Math.floor(Math.random()*filtered.length),
      stop = ()=>(tts_append_raw(`The beanboozled wheel has rolled a ${filtered[index].content} bean`)),
      finish = ()=>(data.bean.state-=1)
  create_wheel({"entries":filtered,"winner":index,"stop":stop,"finish":finish})
}

function bean_load(){for(var a=JSON.parse(localStorage.getItem("bean"))??[];a.length!=config.bean.data.length;)a.length>config.bean.data.length?a.pop():a.push(1);return bean_save(a),a}
function bean_save(e){localStorage.setItem("bean",JSON.stringify(e))}

//============================== [Generic Wheel Function]

twitch_register("command",roll_command,"!roll",1)

function roll_command(array) {
  if (data.roll.state != 0) {show_message("Error! Roll in progress!");return}
  if (data.wheel.state == 1) {show_message("Error! Wheel is busy!");return}
  switch(array[1]) {
    case "coin":
      roll_prep(["Heads","Tails"])
      return
    case "number":
      if (array[2] == undefined) {show_message("Error! Number not specified!");return}
      var value = parseInt(array[2],10)
      if (isNaN(value)) {show_message("Error! Input is not a number!");return}
      if (value < 2 || value > 100) {show_message("Error! Input must be between 2 and 100!");return}
      roll_prep(Array(value).fill().map((e,i)=>i+1+""))
      return
    case "custom":
      if (array[2] == undefined) {show_message("Error! No input specified!");return}
      var input = array.slice(2).join(" ").split("|").map(e=>e.trim())
      if (input.length < 2 || input.length > 100) {show_message("Error! You must specify between 2 and 100 entries!");return}
      roll_prep(input)
      return
  }
}

function roll_prep(labels) {
  var entries = labels.map(e=>({"content":e})),
      index = Math.floor(Math.random()*entries.length),
      winner = entries[index].content,
      stop = ()=>(tts_append_raw(`You have rolled ${(winner=="")?"nothing":winner}`)),
      finish = ()=>(data.roll.state=0)
  data.roll.state=1
  create_wheel({"entries":entries,"winner":index,"stop":stop,"finish":finish,"colormode":3})
}

//============================== [Death Function]

twitch_register("command",death_command,"!death",1)

function death_command(array) { //Processing for the !death command
  switch(array[1]) {
    case "show":
    case "hide":
      var state = (array[1] == "show")
      document.getElementById("death_wrapper").classList.toggle("visible",state)
      data.death.state = +state
      return
    case "set":
      if (!data.death.state) {return}
      var amount = parseInt(array[2],10)
      if (Number.isNaN(amount)) {show_message("Error! Invalid death total!");return}
      document.getElementById("death_count").innerText = data.death.count = amount
    default:
      if (!data.death.state) {return}
      var amount = parseInt(array[1]??1,10)
      if (Number.isNaN(amount)) {return}
      document.getElementById("death_count").innerText = data.death.count += amount
  }
}

//============================== [Timer Function]

twitch_register("command",timer_command,"!timer",1)

function timer_command(array) { //Processing for the !death command
  switch(array[1]) {
    case "create":
    case "update":
      if (array[1] == "create" && data.timer.duration != -1) {show_message("Error! Timer in progress!");return}
      else if (array[1] == "update" && data.timer.duration == -1) {return}
      if (array[2] == undefined) {show_message("Error! Missing duration!");return}
      var duration = parseInt(array[2],10)
      if (isNaN(duration) || duration <= 0) {show_message("Error! Invalid duration!");return}
      if (duration > 60) {show_message("Error! Maximum duration is 60 minutes!");return}
      data.timer.duration = duration * 60
      data.timer.label = (array[1] == "create") ? array.slice(3).join(" ") : data.timer.label
      timer_interval(true)
      timer_update()
      timer_toggle(true)
      return
    case "rename":if (data.timer.duration != -1) {data.timer.label = array.slice(2).join(" ");timer_update()};return
    case "pause":case "resume":if (data.timer.duration != -1) {timer_interval(array[1]=="resume")};return
    case "delete":if (data.timer.duration != -1) {timer_interval(false);timer_toggle(false)};return
    case "stop":if (data.timer.duration != -1) {data.timer.duration = 0;timer_update()};return
  }
}

function timer_toggle(visible) {
  clearTimeout(data.timeout.timer_toggle)
  document.getElementById("timer_wrapper").classList.toggle("visible",visible)
  if (!visible) {data.timer.duration = -1}
}

function timer_interval(state) {
  clearInterval(data.timeout.timer_update)
  if (!state) {return}
  data.timeout.timer_update = setInterval(() => {
    data.timer.duration--
    timer_update()
  },1000)
}

function timer_update() {
  document.getElementById("timer_display").innerText = Math.floor(data.timer.duration/60).toString().padStart(2,"0")+":"+(data.timer.duration%60).toString().padStart(2,0)
  document.getElementById("timer_label").innerText = data.timer.label
  if (data.timer.duration == 0) {
    tts_append_raw(`The timer ${(data.timer.label!="")?`for ${data.timer.label}`:""} is up`)
    timer_interval(false)
    data.timeout.timer_toggle = setTimeout(()=>{timer_toggle(false)},15000)
  }
}

//============================== [Early Leaderboard Functions]

twitch_register("command",first_command,"!first",1)
twitch_register("message",first_handler)

function first_command(array) {
  switch(array[1]) {
    case "show":case "hide":first_toggle(array[1]=="show");return
  }
}

function first_toggle(visible) {
  clearTimeout(data.timeout.first_close)
  document.getElementById("leaderboard_wrapper").classList.toggle("visible",visible)
}

function first_handler(_,context,_,channel) {
  if (channel==context["username"]||config.twitch.bot.includes(context["user-id"])) {return}
  if (Date.now()-data.first.stale>10800000) {data.first.active = 0} //3 hours
  data.first.stale = Date.now()
  data.first.early.push({"name":context["display-name"],"id":context["user-id"],"time":Date.now()})
  data.first.early = data.first.early.filter((v)=>(Date.now()-v.time)<=300000) //5 minutes
  var unique = data.first.early.reduce((a,b)=>{return(a.includes(b.id))?a:a.concat([b.id])},[])
  if (unique.length < 5 || data.first.active) {return}
  data.first.active = 1
  var name = data.first.early.reduce((a,b)=>{a[b.id]=b.name;return a},{})
  var leaderboard = document.getElementById("leaderboard_list")
  leaderboard.innerHTML = ""
  unique.splice(0,5).forEach((v)=>{leaderboard.append(Object.assign(document.createElement("div"),{innerText:name[v]}))})
  first_toggle(true)
  clearTimeout(data.timeout.first_close)
  data.timeout.first_close = setTimeout(()=>{first_toggle(false)},300000) //5 minutes
}

//============================== [Achievement Functions]

twitch_register("command",achievement_command,"!achievement",1)
twitch_register("reward",(array)=>{if(data.achievement.redeem){achievement_handler(false,...array.join(" ").split("|").slice(0,2))}},config.redeem?.achievement)

function achievement_command(array) { //Processing for the !tts command
  switch(array[1]) {
    case "skip":
      achievement_hide()
      return
    case "clear":
      data.achievement.queue = []
      achievement_hide()
      return
    case "rare":
    case "normal":
      achievement_handler((array[1]=="rare"),...array.slice(2).join(" ").split("|").slice(0,2))
      return
    case "volume":
      var volume = parseInt(array[2],10)
      if (isNaN(volume) || 0 > volume || 100 < volume) {
        show_message("Error! Invalid volume!")
        return
      }
      show_message("Achievement volume set to " + volume + "%")
      data.achievement.volume = volume / 100
      return
    case "redeem":
      data.achievement.redeem ^= 1
      show_message(`Achievement redeem is now ${(data.achievement.redeem) ? "enabled":"disabled"}`)
      return
  }
}

function achievement_handler(rare,name,desc) { //Handle adding to and playing messages from the TTS queue
  if (typeof name == "string" && name.length != 0) {data.achievement.queue.push({"name":name?.trim(),"desc":desc?.trim()??"Congratulations!","rare":rare})}
  if (data.achievement.state == 1 || data.achievement.queue.length == 0) {return}
  achievement_show(data.achievement.queue.shift())
}

function achievement_hide() {
  clearTimeout(data.timeout.achieve_reset)
  data.achievement.sfx.pause()
  document.querySelector('#achievement').classList.remove('animate')
  data.timeout.achieve_reset = setTimeout(()=>{data.achievement.state = 0;achievement_handler()},1000)
}

function achievement_show(input) {
  data.achievement.state = 1
  data.achievement.sfx = config.audio["achievement_"+((input.rare)?"rare":"norm")]
  data.achievement.sfx.volume = data.achievement.volume
  play_audio(data.achievement.sfx)
  document.querySelector('#achievement .achieve_name').innerText = input.name
  document.querySelector('#achievement .achieve_desc').innerText = input.desc
  document.querySelector('#achievement').classList.toggle('rare',input.rare)
  document.querySelector('#achievement').classList.add('animate')
  data.timeout.achieve_reset = setTimeout(achievement_hide,12000)
}

//============================== [Text To Speech Functions]

twitch_register("command",tts_command,"!tts",1)
twitch_register("command",(array,context)=>{tts_append_chat(array.slice(1).join(" "),context["display-name"])},"!say",1)
twitch_register("reward",(array,context)=>{if(data.tts.redeem){tts_append_chat(array.join(" "),context["display-name"])}},config.redeem?.tts)

function tts_command(array,context) { //Processing for the !tts command
  var tts = data.tts.instance
  switch(array[1]) {
    case "skip":
      tts.cancel()
      tts_handler()
      return
    case "clear":
      data.tts.queue = []
      tts.cancel()
      return
    case "say":
      tts_append_chat(array.slice(2).join(" "),context["display-name"])
      return
    case "voice":
      var search = array.slice(2).join(" ")
      show_message("TTS voice set to \"" + ((search == "") ? "default":search) + "\"")
      data.tts.voice = search
      data.tts.synth = tts_findvoice(search)
      return
    case "volume":
      var volume = parseInt(array[2],10)
      if (!(volume>=0&&volume<=100)) {show_message("Error! Invalid volume!");return}
      show_message(`TTS volume set to ${volume}%`)
      data.tts.volume = volume / 100
      return
    case "redeem":
      data.tts.redeem ^= 1
      show_message(`TTS redeem is now ${(data.tts.redeem) ? "enabled":"disabled"}`)
      return
  }
}

function tts_handler(message) { //Handle playing messages from the TTS queue
  var tts = data.tts.instance
  if (typeof message == "string" && message.length != 0) {data.tts.queue.push(message)}
  if (tts.speaking || data.tts.queue.length == 0) {return}
  var message = new SpeechSynthesisUtterance(data.tts.queue.shift())
  if (data.tts.synth != undefined) {message.voice = data.tts.synth}
  message.volume = data.tts.volume
  message.addEventListener("end",()=>{tts_handler()})
  tts.speak(message)
}

//Handle appending messages to the TTS queue
function tts_append_chat(message,name) {tts_handler(`${name} says, ${message}`)}
function tts_append_raw(message) {tts_handler(message)}

//Search for the provided voice and return the first match
function tts_findvoice(search) {return window.speechSynthesis.getVoices().find((e)=>e.name.toLowerCase().includes(search.toLowerCase()))}

data.tts.instance.addEventListener("voiceschanged",()=>{ //After voices have loaded, attempt to search for the voice from config.tts.voice
  data.tts.synth = tts_findvoice(data.tts.voice)
  data.tts.instance.removeEventListener("voiceschanged",this)
})

//============================== [Master Command Function]

twitch_register("command",troll_command,"!troll",0)

function troll_command(array,context,permission) {
  switch(array[1]) {
    case "permit":
      if (permission < 2) {return}
      var choices = ["viewer","moderator","admin"], level = choices.indexOf(array[2])
      if (level == -1) {show_message(`Error! Unknown permit level!`);return}
      data.troll.permit = level
      show_message(`Troll permit level set to "${choices[level]}"!`)
      return
    default:
      var sound = array[1].toLowerCase()
      if (permission < data.troll.permit) {return}
      if (config.audio[`troll_${sound}`] == undefined) {show_message(`Troll "${sound}" could not be found!`);return}
      if (permission < 2) {if (Date.now() - (data.troll.cooldown[context["user-id"]]??0) < config.troll.cooldown) {show_message(`"!troll" is currently on cooldown! (${context["display-name"]})`);return} else {data.troll.cooldown[context["user-id"]] = Date.now()}}
      play_audio(config.audio[`troll_${sound}`])
  }
}

//============================== [Master Command Function]

twitch_register("command",master_command,"!master",2)

function master_command(array,context) {
  switch(array[1]) {
    case "speak":
      tts_append_raw(array.slice(2).join(" "))
      return
    case "seize":
      seize_handler(context["display-name"],true)
      return
    case "refresh":
      location.reload()
      return
    case "play":
      if (array[2] == undefined) {return}
      if (config.audio[array[2]] == undefined) {show_message(`Sound "${array[2]}" could not be found!`);return}
      play_audio(config.audio[array[2]])
      return
    case "announce":
      var message = array.slice(2).join(" ")
      if (message != "") {show_announcement(message)}
      return
    case "execute":
    case "tweak":
      var code = array.slice(2).join(" ")
      if (array[2] == "preset") {
        if (array[3] == undefined) {show_message(`Preset not specified!`);return}
        if (config.preset[array[1]][array[3]] == undefined) {show_message(`Preset "${array[1]}.${array[3]}" could not be found!`);return}
        code = config.preset[array[1]][array[3]]
        array.slice(4).forEach((e,i)=>{code=code.replace(new RegExp(`<param${i+1}>`,"g"),e)})
      }
      if (array[1]=="execute") {
        setTimeout(code,1)
      } else {
        var test = Object.assign(document.createElement("div"),{innerHTML:code})
        if (test.innerHTML === code) {document.getElementById("tweak_content").innerHTML = code}
      }
      return
    case "debug":
      switch(array[2]) {
        case "raffle":case "queue":var type=["raffle","queue"].indexOf(array[2]),temp={"names":["Alligator","Beaver","Cougar","Dinosaur","Elephant","Fennec","Goat","Horse","Insect","Jaguar","Koala","Llama","Moose","Newt","Octopus","Penguin","Quail","Raccoon","Snake","Tarantula","Urial","Vulture","Whale","Xerus","Yak","Zebra"],"colors":["#FF0000","#0000FF","#008000","#B22222","#FF7F50","#9ACD32","#FF4500","#2E8B57","#DAA520","#D2691E","#5F9EA0","#1E90FF","#FF69B4","#8A2BE2","#00FF7F"]};[raffle_command,queue_command][type]([0,"create",`${["Raffle","Queue"][type]} Test`]);temp.names.slice(0,Math.floor(Math.random()*(temp.names.length-1))+2).forEach((e,i)=>{[join_command,wait_command][type](0,{"display-name":e,"user-id":i,"color":temp.colors[Math.floor(Math.random()*temp.colors.length)]})});if(type==0){raffle_command([0,"roll"])};return;
        case "voice":document.getElementById("debug").innerHTML=window.speechSynthesis.getVoices().filter((e)=>e.voiceURI.toLowerCase().includes(array.slice(3).join(" ").toLowerCase())).map((e)=>e.name).join("<br>");return;
        case "clear":document.getElementById("debug").innerText="";return;
        case "query":document.getElementById("debug").innerText=JSON.stringify(eval(array[3]));return;
        case "intro":if(array[3]=="template"){var template=(s)=>{document.getElementById("intro_wrapper").dataset.template=+!!s};template(1);clearTimeout(data.timeout.debug_intro_lock);data.timeout.debug_intro_lock=setTimeout(()=>{template(0)},15000);show_message("[Debug] Activating template lock...")}else{try{var d=JSON.parse(array.slice(3).join(" ")),n=Math.random().toString().slice(2);config.intro.index[n]=d;intro_command([n],{"user-id":0},2);delete config.intro.index[n];show_message("[Debug] Playing test intro...")}catch(e){show_message("[Debug] Test intro error...")}}
      }
      return
  }
}

//============================== [Youtube Functions]

twitch_register("command",youtube_command,"!youtube",2)
twitch_register("command",youtube_command,"!yt",2)

function youtube_command(array) {
  var player = data.youtube.player
  switch(array[1]) {
    case "video":case "playlist":if(array[2]?.length>0){youtube_handler({"type":array[1],"id":array[2]})}else{show_message("Error! ID not specified!")};return;
    case "skip":case "clear":if(player.getPlayerState()>0){youtube_handler({"type":array[1]})};return;
    //Add "next" function to skip to next video in playlist if one is playing (Add error otherwise?)
    case "pause":case "play":if(player.getPlayerState()>0){player[`${array[1]}Video`]()};return;
    case "volume":var volume=parseInt(array[2],10);if(volume>=0&&volume<=100){player.setVolume(volume);show_message(`Youtube player volume set to ${volume}%`)}else{show_message("Error! Invalid volume!")};return;
    case "speed":if(player.getPlayerState()>0){var speed=parseFloat(array[2]),valid=player.getAvailablePlaybackRates();if(valid.includes(speed)){player.setPlaybackRate(speed);show_message(`Youtube video speed is now x${speed}`)}else{show_message(`Error! Invalid speed! [Available speeds are ${player.getAvailablePlaybackRates().join(", ")}]`)}};return;
    case "loop":if(player.getPlayerState()>0){player.setLoop(data.youtube.loop^=1);show_message(`Youtube playlist loop is now ${(data.youtube.loop) ? "enabled":"disabled"}`)};return;
    //Add warning to shuffle if playlist is not playing?
    case "shuffle":if(player.getPlayerState()>0){player.setShuffle(data.youtube.shuffle^=1);show_message(`Youtube playlist shuffle is now ${(data.youtube.shuffle) ? "enabled":"disabled"}`)};return;
    case "fullscreen":player.getIframe().classList.toggle("fullscreen",data.youtube.fullscreen^=1);show_message(`Youtube player fullscreen is now ${(data.youtube.fullscreen) ? "enabled":"disabled"}`);return;
    case "opacity":var opacity=parseInt(array[2],10);if(opacity>=0&&opacity<=100){document.getElementById("youtube").style.opacity=opacity/100;show_message(`Youtube player opacity set to ${opacity}%`)}else{show_message("Error! Invalid value!")};return;
  }
}

function youtube_handler(input) {
  function youtube_toggle(visible){var player=data.youtube.player;if(!visible){player.stopVideo()};player.getIframe().classList.toggle("visible",visible)}
  var player = data.youtube.player, busy = player.getIframe().classList.contains("visible") && ![0,5].includes(player.getPlayerState()) 
  if (typeof input?.type == "string" && typeof input?.id == "string") {data.youtube.queue.push(input)}
  if (input?.type == "clear") {data.youtube.queue=[]}
  //Sort data.youtube.queue based on priority attribute (If unspecified, coalesce to 1)
  //Add following case to first check below. 
  //  If busy && not skipping && not clearing && not overriden by priority
  //  (data.youtube.current.priority >= data.youtube.queue[0].priority)
  if (busy && input?.type != "skip" && input?.type != "clear") {return} else if (data.youtube.queue.length == 0) {youtube_toggle(false);return}
  //If overriding video due to priority
  //  Must save current loop state, shuffle state, shuffled playlist data, playlist index, playback speed, and playback time
  //  data.youtube.queue.push(Object.assign({},data.youtube.current,{Other Data Here}))
  Object.assign(data.youtube,{"loop":0,"shuffle":0}) //These lines will have to adhere to the next video data then coalesce to default if unspecified (Also cast to necessary types)
  player.setPlaybackRate(1).setShuffle(0).setLoop(0) //These lines will have to adhere to the next video data then coalesce to default if unspecified (Also cast to necessary types)
  youtube_toggle(true)
  youtube_timeout(true)
  var next = data.youtube.queue.shift() //This should save the object to data.youtube.current future reference. Move line to immediately after skip/clear check to be used earlier
  switch (next.type) {
    case "video":player.loadVideoById(next.id);break;
    case "playlist":player.loadPlaylist({"listType":"playlist","list":next.id});break;
  }
  //Add line to adjust video player to current playback time if specified in video data
}

function youtube_timeout(enable){if(!enable){clearTimeout(data.timeout.youtube_force)}else{data.timeout.youtube_force=setTimeout(()=>{if(data.youtube.player.getPlaylist()?.length>0){event.target.nextVideo()}else{youtube_handler({"type":"skip"})}},3000)}}

function youtube_prepare() {
  function youtube_update(event){youtube_timeout(false);if(event.data==0){youtube_handler()};if(event.data==-1){youtube_timeout(true)}}
  function youtube_ready(event){event.target.setVolume(config.youtube.volume)}
  data.youtube.player=new YT.Player("youtube",{"playerVars":{"controls":0,"fs":0,"iv_load_policy":3,"autoplay":1,"autostart":1},"events":{"onStateChange":youtube_update,"onReady":youtube_ready}})
}

//============================== [Moderator Intro Functions]

twitch_register("default",intro_command)

function intro_command(array,context,permission) {
  if (config.intro.index[array[0]] == undefined) {return}
  var intro_data = config.intro.index[array[0]]
  if (!intro_data?.["user-id"]?.includes(context["user-id"]) && permission < 2) {show_message(`"${array[0]}" can only be used by its owner!`);return}
  if (data.intro.state != 0) {show_message("Error! Intro in progress!");return}
  if (Date.now() - (data.intro.cooldown[array[0]]??0) < config.intro.cooldown && permission < 2) {show_message(`"${array[0]}" is currently on cooldown!`);return}
  data.intro.cooldown[array[0]] = Date.now()
  data.intro.state = 1
  var intro_style = document.getElementById("intro_style"), intro_wrapper = document.getElementById("intro_wrapper")
  intro_style.innerHTML = intro_data?.css ?? ""
  intro_wrapper.style.setProperty("--intro-text",`"${intro_data?.text??""}"`)
  intro_wrapper.style.setProperty("--intro-duration",`${intro_data?.duration??5}s`)
  intro_wrapper.style.setProperty("--intro-image",`url(${intro_data?.image?.url??"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"})`)
  intro_wrapper.style.setProperty("--intro-image-w",`${intro_data?.image?.width??350}px`)
  intro_wrapper.style.setProperty("--intro-image-h",`${intro_data?.image?.height??350}px`)
  intro_wrapper.classList.add("animate")
  play_audio(config.audio[intro_data?.audio])
  data.timeout.intro_reset = setTimeout(()=>{intro_wrapper.classList.remove("animate");data.intro.state=0},intro_data.duration*1000)
}

//============================== [Sieze Function]

twitch_register("reward",(_,context)=>{seize_handler(context["display-name"])},config.redeem?.seize)

function seize_handler(username,master) { //Activate the siezure overlay with the given name
  function seize_toggle(visible){clearTimeout(data.timeout.seize_close);document.getElementById("stream_seize").classList.toggle("visible",visible);data.seize.state=+visible}
  if (data.seize.locked && !master) {return}
  document.getElementById("seize_user").innerText = username
  if (master) {
    seize_toggle(!data.seize.locked)
    data.seize.locked ^= 1
    return
  }
  seize_toggle(true)
  clearTimeout(data.timeout.seize_close)
  data.timeout.seize_close = setTimeout(()=>{seize_toggle(false)},((Math.random()>0.9)?30:10)*1000)
}

//============================== [Wheel Functions]

function create_wheel(input) {
  //{"entries":[{"content":"Placeholder","color":"#000000"}],"winner":0,"colormode":0,"stop":<function>,"finish":<function>}
  if (input?.entries.length>=2) {data.wheel.queue.push(input)}
  if (data.wheel.state!=0||data.wheel.queue.length==0) {return}
  data.wheel.state=1
  input=data.wheel.queue.shift()
  var callcheck=n=>{"function"==typeof n&&n()},
      wheel_content=document.getElementById("wheel_content"),wheel_wrapper=document.getElementById("wheel_wrapper"),
      o=(wheel_wrapper.offsetHeight-10)/2,r=o+100,d=1/input.entries.length*180*Math.PI/180,x1=Math.cos(d)*r+o,y1=Math.sin(d)*r+o,x2=Math.cos(-d)*r+o,y2=Math.sin(-d)*r+o,
      path=`path('M${o} ${o} ${x1} ${y1}A${r} ${r} 0 00${x2} ${y2}Z')`,
      total=input.entries.length,
      slice=360/total
  wheel_content.classList.remove("spin")
  wheel_wrapper.style.setProperty("--data-prep",`${Math.floor(Math.random()*361)}deg`)
  wheel_wrapper.style.setProperty("--data-spin",`${360*(Math.floor(3*Math.random())+8)+Math.floor(Math.random()*slice)-slice/2-slice*input.winner-90}deg`)
  wheel_content.innerHTML=""
  input.entries.forEach((e,i)=>{
    var {content,color}=e;content??="";color??="#FFFFFF"
    switch (input.colormode) {
      case 1:color=`hsl(${hex_hue(color)},100%,40%)`;break;      //Convert to hue
      case 2:color=`hsl(${Math.random()*360},100%,40%)`;break;   //Random hue
      case 3:color=`hsl(${slice*i},100%,40%)`;break;             //Rainbow wheel
    }
    wheel_content.appendChild(Object.assign(document.createElement("div"),{"style":`background-color:${color};transform:rotate(${slice*i}deg);clip-path:${path}`})).dataset.content=content
  })
  wheel_wrapper.style.top="50%"
  setTimeout(()=>{wheel_content.classList.add("spin")},2500)
  setTimeout(()=>{wheel_wrapper.style.top="-50%";callcheck(input.stop)},10000)
  setTimeout(()=>{data.wheel.state=0;callcheck(input.finish);create_wheel()},11000)
  function hex_hue(t){let x=0,n=0,e=0;4==t.length?(x="0x"+t[1]+t[1],n="0x"+t[2]+t[2],e="0x"+t[3]+t[3]):7==t.length&&(x="0x"+t[1]+t[2],n="0x"+t[3]+t[4],e="0x"+t[5]+t[6]),x/=255,n/=255,e/=255;let h=Math.min(x,n,e),a=Math.max(x,n,e),l=a-h,o=0;return o=0==l?0:a==x?(n-e)/l%6:a==n?(e-x)/l+2:(x-n)/l+4,o=Math.round(60*o),o<0&&(o+=360),o}
}

//============================== [Chatterbox Functions]

data.chatterbox = {
  "config":{
    "effect_chance":0.005, //Roughly 1 in 200 (Could be fine to reduce to 1 in 100)
    "master_delay":300,
    "user_delay":10,
    "alert_delay_min":9,
    "alert_delay_max":14
  },
  "effect_list":[
    {"chance":0.30,"function":chatterbox_effect_rgb},
    {"chance":1.00,"function":chatterbox_effect_audio},
    {"chance":0.10,"function":chatterbox_effect_seize},
    {"chance":0.70,"function":chatterbox_effect_website},
    //{"chance":0.40,"function":chatterbox_effect_speak},
    //{"chance":0.80,"function":chatterbox_effect_youtube}
  ],
  "effect_data":{},
  "master_buffer":0,
  "user_buffer":{}
}

twitch_register("message",chatterbox_message)

function chatterbox_message(_,context) {
  if (Date.now()-data.chatterbox.master_buffer<data.chatterbox.config.master_delay*1000) {return} //Master delay check
  if (Date.now()-(data.chatterbox.user_buffer[context["user-id"]]??0)<data.chatterbox.config.user_delay*1000) {return} //User delay check
  data.chatterbox.user_buffer[context["user-id"]]=Date.now() //User buffer update
  if (Math.random()>data.chatterbox.config.effect_chance) {return} //Effect chance check
  data.chatterbox.master_buffer=Date.now(); //Master buffer update
  (w=>w[Math.floor(Math.random()*w.length)])([].concat(...data.chatterbox.effect_list.map((e)=>Array(Math.ceil(100*e.chance)).fill(e)))).function()
  clearInterval(data.timeout.chatterbox_alert)
  data.timeout.chatterbox_alert=setTimeout(()=>{play_audio(config.audio.chatterbox_alert)},(Math.floor(Math.random()*(data.chatterbox.config.alert_delay_max-data.chatterbox.config.alert_delay_min))+data.chatterbox.config.alert_delay_min)*1000)
}

function chatterbox_effect_rgb() {
  data.chatterbox.effect_data.rgb??=[167,239,20]
  clearInterval(data.timeout.rgb_interval)
  clearInterval(data.timeout.rgb_reset)
  data.timeout.rgb_interval=setInterval(()=>{data.chatterbox.effect_data.rgb=data.chatterbox.effect_data.rgb.map(e=>Number((e+Math.random()).toFixed(2))%360);document.body.style.setProperty(`--general-background`,`linear-gradient(${data.chatterbox.effect_data.rgb[2]}deg,hsl(${data.chatterbox.effect_data.rgb[0]},100%,23%)0%,hsl(${data.chatterbox.effect_data.rgb[1]},100%,26%)100%)`)},100)
  data.timeout.rgb_reset=setTimeout(()=>{clearInterval(data.timeout.rgb_interval)},60000)
}

function chatterbox_effect_website() {
  (l=>document.getElementById("tweak_chatterbox").innerHTML=`<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;box-sizing:border-box;border:0px;" src="${l[Math.floor(Math.random()*l.length)]}">`)([
    "https://sketchywebsite.net/",
    "https://fallingfalling.com/",
    "https://pranx.com/matrix-code-rain/",
    "https://www.innerdoubts.com/",
    "https://fakeupdate.net/win10ue/",
    "https://fakeupdate.net/win11/",
    "https://fakeupdate.net/windows98k/",
    "https://fakeupdate.net/wnc/",
    "https://fakeupdate.net/sarcastic/"
  ])
  clearTimeout(data.timeout.website_reset)
  data.timeout.website_reset=setTimeout(()=>{document.getElementById("tweak_chatterbox").innerHTML=""},Math.floor(Math.random()*5000)+10000)
}

function chatterbox_effect_youtube() {
  (v=>youtube_handler({"type":"video","id":v[Math.floor(Math.random()*v.length)]}))([
    "dQw4w9WgXcQ", //Rickroll
    "MtN1YnoL46Q", //Duck Song
    "EIyixC9NsLI", //Badgers
    "1UA3iZbSIWw", //Jay Jay the Jet Plane
    "sowcHwZXXio"  //Fitnessgram Pacer Test
  ])
}

function chatterbox_effect_speak() {
  (t=>tts_append_chat(t[Math.floor(Math.random()*t.length)],"The Chatterbox"))([
    "I'm sorry to say my dear viewer, but you just lost the game!",
    "We've been trying to reach you concerning your vehicle's extended warranty. You should've received a notice in the mail about your car's extended warranty eligibility. Since we've not gotten a response, we're giving you a final courtesy call before we close out your file.",
    "O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA",
    "Did you know that if you hold Ctrl and type 'wtf' on most browsers you'll active a fancy font for anything you type on the current tab?",
    "DO IT, just DO IT! Don't let your dreams be dreams. Yesterday, you said tomorrow. So just. DO IT! Make. your dreams. COME TRUE! Just... do it! Some people dream of success, while you're gonna wake up and work HARD at it! NOTHING IS IMPOSSIBLE! You should get to the point where anyone else would quit, and you're not gonna stop there. NO! What are you waiting for? ... DO IT! Just... DO IT! Yes you can! Just do it! If you're tired of starting over, stop. giving. up.",
    "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
    "The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn't, and arriving at a position where it wasn't, it now is. Consequently, the position where it is, is now the position that it wasn't, and it follows that the position that it was, is now the position that it isn't.",
    "┴┬┴┤( ͡° ͜ʖ├┬┴┬ HEY KIDS DO YOU WANT SOME DANK MEMES?",
    "Creeper, awww man . So we back in the mine, got our pick axe swinging from side to side, . Side, side to side . This task a grueling one, hope to find some diamonds tonight, night, night . Diamonds tonight . Heads up, you hear a sound, turn around and look up, total shock fills your body, . Oh no it's you again, . I could never forget those eyes, eyes, eyes, . Eyes, eyes, eyes"
  ])
}

function chatterbox_effect_audio() {
  (a=>play_audio(config.audio[a[Math.floor(Math.random()*a.length)]]))(Object.keys(config.audio).filter(k=>k.startsWith("troll_")))
}

function chatterbox_effect_seize() {
  seize_handler("the chatterbox")
}

//============================== [Temporary Functions]

//============================== [Generic Functions]

function twitch_status(status_code) { //Update the color of the twitch status label
  document.getElementById("twitch_status").dataset.status=status_code
}

function play_audio(audio) { //Play the audio clip with the provided ID
  if (audio == undefined) {console.error("Warning! Attempt to play undefined audio!");return}
  audio.currentTime = 0
  audio.play()
}

function show_announcement(message) { //Display the provided message as an announcement
  document.getElementById("announcement").classList.toggle("visible",message)
  if (!message) {return}
  document.getElementById("announcement").innerText = message
  balanceText("#announcement")
  clearTimeout(data.timeout.announcement_clear)
  data.timeout.announcement_clear = setTimeout(()=>{show_announcement(false)},15000)
}

function show_message(message) { //Display the provided message as an error
  document.getElementById("message").classList.toggle("visible",message)
  if (!message) {return}
  document.getElementById("message").innerText = message
  clearTimeout(data.timeout.message_clear)
  data.timeout.message_clear = setTimeout(() => {show_message(false)},10000)
}

//Fierce encryption and decryption
function fierce(t,r){var a,e="⁞JC`dc)PD:e#2>IAEK+wRmB3hTb*;Vl-S\\\"'H[x16<{ZuoYUrgM8O0zpa!=L^4?QinGNqk9, 5]s}.yt@vF|W_f&jX~(7",i=[[13312,40959],[44032,55203],[40960,42124],[10240,10495],[9312,10239]],o=i.reduce(((t,r)=>t+r[1]-r[0]+1),0),n=93..toString(2).length,l=o.toString(2).length-1,h=Math.floor(Math.random()*o),c=t=>{t=t.toString();let r=1779033703,e=3144134277,i=1013904242,o=2773480762;for(let a,n=0;n<t.length;n++)a=t.charCodeAt(n),r=e^Math.imul(r^a,597399067),e=i^Math.imul(e^a,2869860233),i=o^Math.imul(i^a,951274213),o=r^Math.imul(o^a,2716044179);r=Math.imul(i^r>>>18,597399067),e=Math.imul(o^e>>>22,2869860233),i=Math.imul(r^i>>>17,951274213),o=Math.imul(e^o>>>19,2716044179),r^=e^i^o,e^=r,i^=r,o^=r;var[n,l,h,c]=[r>>>0,e>>>0,i>>>0,o>>>0];a=function(){var t=((n|=0)+(l|=0)|0)+(c|=0)|0;return c=c+1|0,n=l^l>>>9,l=(h|=0)+(h<<3)|0,h=(h=h<<21|h>>>11)+t|0,(t>>>0)/4294967296}},m=t=>(t=t.toString(),Math.abs(t.split("").reduce(((t,r)=>(t<<5)-t+r.charCodeAt()|0),0)).toString().slice(0,9).padStart(9,h).match(/.{3}/g).map((t=>u((parseInt(t)+Math.floor(a()*o))%o))).join("")),u=t=>String.fromCharCode(i.reduce(((r,a)=>r[1]?r:r[0]>=(t=a[1]-a[0]+1)?[r[0]-t,0]:[r[0]+a[0],1]),[t,0])[0]),g=t=>[...i].reverse().reduce(((t,r)=>t[1]?[t[0]+(r[1]-r[0]+1),1]:t[0]>=r[0]&&t[0]<=r[1]?[t[0]-r[0],1]:t),[t.charCodeAt(),0]).reduce(((t,r)=>r?t:-1));return 1==o?"[Error] Bad config":[t=>(c(h=g(t.slice(0,1))),t.slice(-3)==m(t.slice(1,-3))?(c(h),(t.slice(1,-3).split("").map((t=>((g(t)-Math.floor(a()*o)+o)%o).toString(2).padStart(l,0))).join("").match(new RegExp(`.{${n}}`,"g"))??[]).map((t=>(t=parseInt(t,2))?e[t]:"")).join("")):"[Error] Message corrupt"),t=>{return c(h),u(h)+((r=(t.split("").map((t=>-1!=(t=e.indexOf(t))?t.toString(2).padStart(n,0):"")).join("").match(new RegExp(`.{1,${l}}`,"g"))??[]).map((t=>u((parseInt(t.padEnd(l,0),2)+Math.floor(a()*o))%o))).join(""))+(c(h),m(r)));var r}][+!r](t??"")}

//Shuffle the provided array
function shuffle(f){for(let l=f.length-1;l>0;l--){let o=Math.floor(Math.random()*(l+1));[f[l],f[o]]=[f[o],f[l]]}}

//Merge two objects (arrays are considered values, no circular reference protection)
function mergeDeep(e,...r){function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!r.length)return e;const t=r.shift();if(n(e)&&n(t))for(const r in t)n(t[r])?(e[r]||Object.assign(e,{[r]:{}}),mergeDeep(e[r],t[r])):Object.assign(e,{[r]:t[r]});return mergeDeep(e,...r)}