const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://nox--bot.glitch.me/`);
}, 280000);

// ßá ÇáÈßÌÇÊ Çáí ããßä ÊÍÊÌåÇ Ýí Çí ÈæÊ 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});



 
/////////////////

///////////////////////////////////////
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')// بلاينق 
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

client.user.setGame("v1.0" , );
});//somz



/*fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
 
 
 client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1,
              rep: 0,
              tite: ""
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 250) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })
 
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = ""
        if(!tit) {                                       
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
         fs.writeFile('profile.json', JSON.stringify(profile), (err) =>{

if (err) console.error(err);
})
    })
 
client.on('message', message => {
 const profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"));
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
  let mention = message.mentions.users.first() || message.author;
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "No Reps", credits: 1, level: 1,tite: "no title", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas.createCanvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("Pic.jpg", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 104) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 102) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 10px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${credits[mention.id].credits}`, 230, 182) // احداثيات المصاري
 
 
                        ctx.font = "bold 14px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '12px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[mention.id].tite}`, 150, 130) // احداثيات المصاري
 
                        //Level
                        ctx.font = "bold 24px kathen" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 70, 78) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}/250`, 150, 232) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}/250`, 150, 232) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 20px  kathen";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[mention.id].rep}`, 225, 76)
 

                      
                      
                        ctx.font = "bold 20px  kathen";
                        ctx.fontSize = "10px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${profile[mention.id].tite}`, 225, 212)
                      
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(160, 100, 39, 0, Math.PI*2, true);   
                    // 75, 100, 780,
                      ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 110, 60, 82, 60);
 // ava, 110, 29, 82, 60
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()

})
})
}
});*/

///////////////////////////////////////

        
 /*        let canvas = Canvas.createCanvas(150, 55);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/674176742134382602/674256755634733057/unknown.png"  
        );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      let url = message.author.displayAvatarURL.endsWith(".webp")
        ? message.author.displayAvatarURL.slice(5, -20) + ".gif"
        : message.author.displayAvatarURL;
      jimp.read(url, (err, ava) => {
        if (err) return console.log(err);
        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
          if (err) return console.log(err);
         ctx.font = '33px Genera'
        ctx.fontSize = "500px";
          ctx.fillStyle = "0"
          message.channel
            .send(
              `** <a:3emoooooooooooooooooooooooooooo:663075299377938465> ${message.author.username}, Transfer Fees: \`${resulting}\`, Amount :\` ${balance} \` **
  **type these numbers to confirm :**
` )


   .then(essss => {
              ctx.fillText(num, canvas.width / 4.1, canvas.height / 1.4);
            
              message.channel.sendFile(canvas.toBuffer()).then(m => {
                message.channel
                  .awaitMessages(r => r.author.id === message.author.id, {
                    max: 1,
                    time: 200000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    if (collected.first().content === num) {
                      client.channels.get("673855703680811009").send(`
**---------------------------**

**  <a:welcome10:650754818066874408> | ${mentionn.username} Have Received \`$${balance}\` (ID : \`${mentionn.id}\`)  ,  From : ${message.author.username} | (ID : \`${message.author.id}\`)  .**


**---------------------------**
`);
                      mention.send(`
**---------------------------**

**  <a:welcome10:650754818066874408> | You Have Received \`$${balance}\`  ,  From : ${message.author.username} | (ID : \`${message.author.id}\`)  .**

**---------------------------**

`);
                  

    m.delete();
         
                      
                      
                      
                    } else {
                      m.delete();
                      essss.delete();
                    }
                  });
              });
            });
        });
      });
    } else {
      message.channel.send(
        `**<a:welcome6:647892241368743954> | Error , Correct use : \`${prefix}credit [MentionUser] [Balance]\`**`
      );
    }
  }
  if (args[0].toLowerCase() === `${prefix}daily`) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:stopwatch: | ${message.author.username}, Please Wait  (${pretty(
          times,
          { verbose: true }
        )}) To Take Your Daily Again.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (1,250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**<a:welcome10:650754818066874408> | ${message.author.username}, Done You Have Take Your Daily \`$${ammount}\`**`
      );
      fs.writeFile("./credit.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
  }
  }
}); */

const profile = JSON.parse(fs.readFileSync("profile.json", "utf8"));
 
 
 client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1,
              rep: 0,
              tite: "No Title"
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 250) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })
 
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Super"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
 
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
  let mention = message.mentions.users.first() || message.author;
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "No Reps", credits: 1, level: 1,tite: "Earth Bot User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas.createCanvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("Pic.jpg", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 104) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 102) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 10px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${credits[mention.id].credits}`, 230, 182) // احداثيات المصاري
 
 
                        ctx.font = "bold 14px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '12px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[mention.id].tite}`, 150, 130) // احداثيات المصاري
 
                        //Level
                        ctx.font = "bold 24px kathen" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 70, 78) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}/250`, 150, 232) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}/250`, 150, 232) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 20px  kathen";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[mention.id].rep}`, 225, 76)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 110, 29, 82, 60);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});


const credits = JSON.parse(fs.readFileSync('./credits.json'));
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = { messages: 0, credits: 250, xp: 0, daily: 86400000 };
  credits[author].messages += 1;
  credits[author].xp += 1;
  if (credits[author].xp === 5) {
    credits[author].xp = 0;
    credits[author].credits += 1;
    fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
  }
  fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
});

      const creditsPath = './credits.json';
      var time = require("./time.json");
      client.on('message',async message => {
      if(message.author.bot || message.channel.type === 'dm') return;
      let args = message.content.split(' ');
      let author = message.author.id;
      if(!credits[author]) credits[author] = {
      credits: 0
      }
      if(!credits[author]) credits[author] = {
      blacklist: false
      }
let tax = message.content.split(" ")[1]
let Price = message.content.split(" ")[2];
      
let resulting = Math.floor(Price-(Price*(5/100)));
        let balance = Math.floor((Price*(5/100)));
      fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
      if(credits[message.author.id].blacklist === true) return undefined;
      if(args[0].toLowerCase() == `${prefix}credit` || args[0].toLowerCase() === `${prefix}credits`) {
      const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
      const mentionn = message.mentions.users.first() || client.users.get(args[1]);
      if(!args[2]) {
      message.channel.send(`**<a:3emoooooooooooooooooooooooooooo:663075299377938465> |  ${mention.username}, Your Credits : \`$${credits[mention.id].credits}\`**`)
      } else if(mentionn && args[2]) {
      if(credits[message.author.id].blacklist === true) return undefined;
      if(isNaN(args[2])) return message.channel.send(`**:x:  Using: \`${prefix}credit [mention user] [amount]\`**`);
      if(args[2] < 1) return message.channel.send(`**:x:  Using: \`${prefix}credit [mention user] [amount]\`**`);
      if(mention.bot) return message.channel.send(`**:x:  Using: \`${prefix}credit [mention user] [amount]\`**`);    
      if(mentionn.id === message.author.id) return message.channel.send(`**:x:  Using: \`${prefix}credit [mention user] [amount]\`**`);
      if(args[2] > credits[author].credits) return message.channel.send(`**:x:  | You don\'t have enough credit**`);
      if(args[2].includes("-")) return message.channel.send(`**:x:  Using: \`${prefix}credit [mention user] [amount]\`**`);
      if(args[2].includes(".")) return message.channel.send(`**:x:  Using: \`${prefix}credit [mention user] [amount]\`**`);
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
        
 fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
         let canvas = Canvas.createCanvas(150, 55);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/673991377910104124/674602055872020560/20200204_214440.jpg"  
        );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      let url = message.author.displayAvatarURL.endsWith(".webp")
        ? message.author.displayAvatarURL.slice(5, -20) + ".gif"
        : message.author.displayAvatarURL;
      jimp.read(url, (err, ava) => {
        if (err) return console.log(err);
        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
          if (err) return console.log(err);
         ctx.font = '33px Genera'
        ctx.fontSize = "500px";
          ctx.fillStyle = "#ffffff"
          message.channel
            .send(
              `** <a:3emoooooooooooooooooooooooooooo:663075299377938465> ${message.author.username}, Transfer Fees: \`${balance}\`, Amount :\` ${resulting} \` **
  **type these numbers to confirm :**
` )

           .then(essss => {
              ctx.fillText(num, canvas.width / 4.1, canvas.height / 1.4);
            
              message.channel.sendFile(canvas.toBuffer()).then(m => {
                message.channel
                  .awaitMessages(r => r.author.id === message.author.id, {
                    max: 1,
                    time: 200000,
                    errors: ["time"]
                  })


                  .then(collected => {
                    if (collected.first().content === num) {
                      client.channels.get("673855703680811009").send(`
**---------------------------**

**<a:welcome10:650754818066874408> | ${mentionn.username} Have Received \`$${resulting}\` (ID : \`${mentionn.id}\`)  ,  From : ${message.author.username} | (ID : \`${message.author.id}\`)  .**

**---------------------------**
`);
                      message.channel.send(`**<a:1emooooooooooooooooooo:663075300778704906> | ${message.author.username}, Done You Transfer : \`$${resulting}\` To ${mentionn}**`);
          credits[author].credits += (-resulting);
          credits[mention.id].credits += (+resulting);
                      mention.send(`
**---------------------------**

**<a:welcome10:650754818066874408> | You Have Received \`$${resulting}\`  ,  From : ${message.author.username} | (ID : \`${message.author.id}\`)  .**

**---------------------------****`);
                      m.delete();
         

                      
                      
                    } else {
                      m.delete();
                      essss.delete();
                    }
                  });
              });
            });
        });
      });
    } else {
      message.channel.send(
        `**<a:welcome6:647892241368743954> | Error , Correct use : \`${prefix}credit [MentionUser] [Balance]\`**`
      );
    }
  }

  if (args[0].toLowerCase() === `${prefix}daily`) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:stopwatch: | ${message.author.username}, Please Wait  (${pretty(
          times,
          { verbose: true }
        )}) To Take Your Daily Again.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
           let ammount = (350);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**<a:welcome10:650754818066874408> | ${message.author.username}, Done You Have Take Your Daily \`$${ammount}\`**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
});

///////////////////////////////////////////////////////////////////////




const dev = ["606645929818456064"]; //premium bot
const admin = ".";
var owner = "606645929818456064";
var number = "1"; 
var ex = "";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!dev.includes(message.author.id)) return;
  if (message.content === admin + "vip") {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**This Command Just In Servers**");
    message.channel.sendMessage(
      `> ** # - PrefixBot : . **  \n> ** # - Owner: ** ** [ ${message.author} ] \n>  # - End in :  [${ex} **]`
    );
  }
});//Somzzz
client.on('message',async message => {// زيادة كريدتس
const admin = "N";
let Fire = message.content.split(" ")[0].substring();
let mention = message.mentions.users.first() || message.author
if(Fire === "cg") {
let args = message.content.split(" ");
if(!devs.includes(message.author.id)) return;
if(!args[1] || isNaN(args[1])) return message.reply("**Type Credit**")
if(!credits[mention.id]) return;
credits[mention.id].credits += (+args[1]);
fs.writeFileSync("./credits.json", JSON.stringify(credits));
console.log(credits[mention.id])
message.reply(`**Give : \`${args[1]}\`**`);
} else if(Fire === "cr") {
let args = message.content.split(" ");
if(!devs.includes(message.author.id)) return;
if(!args[1] || isNaN(args[1])) return message.reply("**Type Credit**")
if(!credits[mention.id]) return;
credits[mention.id].credits += (-args[1]);
fs.writeFileSync("./credits.json", JSON.stringify(credits));
console.log(credits[mention.id])
message.reply(`**Removed : \`${args[1]}\`**`);
}
});

///////////////////////////////////////
client.on("message", msg => {// Support
  if (msg.content === ".support") {
    msg.reply(
      "\n\https://discord.gg/M4F3SYq\n\**NoxBot Support Server.** "
    );
  }
});
///////////////////////////////////////
var top = require("./top.json");// Top text and voice
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voiceChannel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 5,
        "msgs": 5,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].slice(prefix.length).toLowerCase();
    if (!message.content.startsWith(prefix)) return;
    switch (cmd) {
        case "top":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .addField(`» TOP 10 TEXT`, textStr.length > 1 ? textStr : "» NO TOP TEXT", true)
            .addField(`» TOP 10 VOICE`, voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE", true)
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("#0095B6");
            message.channel.send({
                embed: embed
            });
        break;
        case "topvoice":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setTitle("» TOP 5 VOICE")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE")
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("#0095B6");
            message.channel.send({
                embed: embed
            });
        break;
        case "toptext":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setTitle("» TOP 5 TEXT")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(textStr.length > 1 ? textStr : "» NO TOP TEXT")
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("#0095B6");
            message.channel.send({
                embed: embed
            });
        break;
    }
});
///////////////////////////////////////
client.on("message", zaid => {// Info Bot
  if (zaid.content === prefix + "info") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor('Gray')
      .addField(
        "- **Bot Ping** : ",
        ` ${Date.now() - zaid.createdTimestamp}` + " ms",
        true
      )
      .addField("**- Servers** :  ", ` ${client.guilds.size}`, true)
      .addField("**- Channels** : ", ` ${client.channels.size} `, true)
      .addField("**- Users** : ", ` ${client.users.size} `, true)
      .addField("**- Bot Name** :  ", ` ${client.user.tag} `, true)
      .addField("**- Bot Dev** :  ", ` <@606645929818456064>`, true) // تعديل مهم عدل هذا الرقم لايدي حسابك
      .setImage(
        ""
      )
      .setFooter(zaid.author.username, zaid.author.avatarURL);
    zaid.channel.send(bot);
  }
});
///////////////////////////////////////
client.on('message', msg => {// Clear chat with number
	var prefix = ".";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "c") {// Delete message form number
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("** > Put the number of messages you want to delete**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("** > Number of messages deleted : " + textxt + "\n**").then(m => m.delete(3000));
        }    
    }
}
});
///////////////////////////////////////
client.on('message', message => {//link server
     if (message.author.bot) return;
    if (message.content.startsWith(".link")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 3600,
    }).then(invite =>
      message.channel.send(invite.url)
    )
        
      message.channel.send(`**> Time of the link and the number of times the link is used : 10 Members**`)
    }
});
///////////////////////////////////////
client.on("message", message => { // The number of people banned from the server
  if (message.content.startsWith(prefix + "allbans")) {
    message.guild
      .fetchBans()
      .then(bans =>
        message.channel.send(`** > The number of people banned from the server : ${bans.size} **`)
      )
      .catch(console.error);
  }
});
///////////////////////////////////////
client.on("message", message => {// All bots
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "allbots")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(' | Bots List | ')
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL)
     .setColor('#0095B6')
     .setTimestamp();
    message.channel.send(embed);

  }
});

///////////////////////////////////////
client.on("message", message => {// Prefix bot
  if (message.author.bot) return;
  if (message.isMentioned(client.user)) {
    message.reply("**My Prefix Is** : `.`");
  }
});
///////////////////////////////////////

///////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "closec") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" **You dont have Premation**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**__Done clos chat__ <a:true:665992026181074955>  **");
          var logChannel = message.guild.channels.find;
if (!logChannel) return;

let messageDelete = new Discord.RichEmbed()
  .setTitle("**[WELCOME CHANNEL CHANGED]**")
  .setColor("#0095B6")
  .setThumbnail(message.author.avatarURL)
   .setDescription(
    `**\n**🚪 Successfully Muted A Channel \n\n**Muted Channel:**  ${message.channel} \n **MESSAGE:** In ${message.channel} \n **Channel:** ${message.channel.name} \n (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
  )
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL);

logChannel.send(messageDelete);
      });
  }

  if (message.content === prefix + "openc") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You dont have Premation**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**__Done open chat__ <a:true:665992026181074955> **");
              var logChannel = message.guild.channels.find;
if (!logChannel) return;

let messageDelete = new Discord.RichEmbed()
  .setTitle("**[WELCOME CHANNEL CHANGED]**")
  .setColor("#0095B6")
  .setThumbnail(message.author.avatarURL)
   .setDescription(
    `**\n**🚪 Successfully UnMuted A Channel \n\n**UnMuted Channel:**  ${message.author.channel} \n **MESSAGE:** In ${message.channel} \n **Channel:** ${message.channel.name} \n (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
  )
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL);

logChannel.send(messageDelete);
      });
  }
});
///////////////////////////////////////
client.on("message", message => {// image server
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "imageserver") {
    const embed = new Discord.RichEmbed()

      .setTitle(`image server : ${message.guild.name}   `)
      .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor("Gray")
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
      .setTimestamp();

    message.channel.send({ embed });
  }
});
///////////////////////////////////////
   client.on('message', message => {// Move all
    if(message.content.startsWith(prefix + 'mall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**<a:true:665992026181074955> Success Moved All To Your Channel**`)


     }
       });
///////////////////////////////////////
client.on('message',  async  message  =>  {// warn
  let  user  =  message.mentions.users.first();
  let  reason  =  message.content.split(' ').slice(2).join(' ');
if(message.content.startsWith(prefix  +  'warn'))  {
  message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('**للأسف لا تمتلك صلاحيات' );
  if(!user)  return  message.channel.send("**  -  Mention  a  member  **")
  if(!reason)  return  message.channel.send("**  -  Type  Reason  **")
  let  reportembed  =  new  Discord.RichEmbed()
  .setTitle(`**New  Warned User !**`)
.addField("**-  Warned  User:**",  `[${user}  with  ID  ${user.id}]`)
.addField('**-  Warned  By:**',`[${message.author.tag} with id ${message.author.id}]`)
.addField('**-  Reason:**',  `[${reason}]`,  true)
.addField("**-  Warned  in:**",`[${message.channel.name}]`)
.addField("**-  Time & Date:**",`[${message.createdAt}]`)
.setFooter("NoxBot.")
.setColor('Gray')
let incidentchannel = message.guild.channels.find(`name`, "warns");
if(!incidentchannel) return message.channel.send("** - Create channel with name `warns`.**");
incidentchannel.send(reportembed);
message.reply(`**:warning: ${user} has been warned !:warning:**`).then(msg  =>  msg.delete(3000));
user.send(`**:warning: You are has been warned in : ${message.guild.name} reason : ${reason} :warning:**`)
}


})
///////////////////////////////////////
//adasdasdasdasdasdasdas
///////////////////////////////////////
const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));// Log

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setlog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("#0095B6")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("#0095B6")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("#0095B6")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("#0095B6")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("#0095B6")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("#0095B6")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("#0095B6")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("#0095B6")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("#0095B6")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("#0095B6")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("#0095B6")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("#0095B6")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`His original name`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اHis original name`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("#0095B6")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("#0095B6")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("#0095B6")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("#0095B6")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("#0095B6")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("#0095B6")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("#0095B6")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("#0095B6")
        .setDescription(
          `**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("#0095B6")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

    logChannel.send(voiceLeave);
  }
});
///////////////////////////////////////
 client.on('message', function(message) {// clear chat
    if (message.content == ".clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

})
///////////////////////////////////////
client.on('message', message => {//بان
	var prefix = "."//البرفكس
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have  Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention member **");
  if(!reason) return message.reply ("**Type the reason for the ban  **");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I can not ban a member higher than my rank  **");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("#0095B6")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});//somz
///////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === ".mute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You dont have Paramination 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** There is no role of  'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You must first mention someone**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("For use ", "mute/unmute")
      .addField(
        "Done mute:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** Idont have Paramination  'Manage Roles' **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**<a:true:665992026181074955>  Done give member mute**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**<a:true:665992026181074955>  The member has been given mute**")
            .catch(console.error);
        });
    }
  }
});
///////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === ".unmute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You dont have Paramination  'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** There is no role of 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You must first mention someone**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("For use ", "mute/unmute")
      .addField(
        "The mute has been removed:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** Idont have Paramination 'Manage Roles' **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**<a:true:665992026181074955>  Done unmute form member **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**<a:true:665992026181074955> Done unmute form member **")
            .catch(console.error);
        });
    }
  }
});//somzzz
///////////////////////////////////////
client.on("message", message => {
  var prefix = ".";
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#0095B6")
            .setDescription(
              `<a:true:665992026181074955> You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("#0095B6")
            .setTitle(`**${message.guild.name}**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});
///////////////////////////////////////
client.on('message', message => {//سيرفر
var prefix = "." 
if(message.content.startsWith(prefix +"server")){ 
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :x: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**- Server ID:**", message.guild.id,true)
.addField("**- Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**- Owned by**",`<@${message.guild.owner.user.id}>`)
.addField("**- Members**",`[${message.guild.memberCount}]`,true)
.addField("**- Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#0095B6')
message.channel.sendEmbed(embed)

}
});//somz
///////////////////////////////////////
client.on('message', message => {//كيك
	var prefix = "."
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have  Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention person 👀**");
  if(!reason) return message.reply ("**Type the reason for the kick :heavy_multiplication_x: ***");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I can not kick a person higher than my rank  **");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("Gray")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});//somz
///////////////////////////////////////
var voiceonline = require ("./voiceonline.json");
client .on ("message", async (Message) => {
    if (!Message ["guild"] ||
    Message ["author"].bot) return false;

    if (Message ["content"].startsWith (prefix + "setvc")) {
        if (!Message ["member"].hasPermission ("MANAGE_CHANNELS")) return Message ["reply"] ("**You need `MANAGE CHANNELS` Permissions to execute this command.**");
        var name = Message ["content"].split (" ").slice (1).join (" ");
        if (!name) return Message ["reply"] ("**Specify a name. please type %vo% for voiceonline numbers\nExample: " + prefix + "setvc Voice Online [%vo%]**");
        var onlines = Message ["guild"].members.filter (m => m.voiceChannel).size;
        Message ["guild"].createChannel (name ["replace"] ("%vo%", onlines), "voice") .then (async (voice) => {
            voiceonline [Message ["guild"].id] = {
                "ch": (voice ["id"]),
                "name": (name)
            };
            saveVoiceOnline ();
            Message ["channel"].send ("**<a:true:665992026181074955> Successfully created voiceonline **")
        });
    }
})
.on ("voiceStateUpdate", async (Steve, Akame) => {
    if (!voiceonline [Steve ["guild"].id]) return console.log ("nope");
    var channel = Akame ["guild"].channels.get (voiceonline [Steve ["guild"].id].ch);
    if (!channel) return console.log ("no channel");
    channel ["setName"] (voiceonline [Steve ["guild"].id].name.replace ("%vo%", Steve ["guild"].members.filter (m => m.voiceChannel).size));
})

function saveVoiceOnline() {
    (require ("fs")) ["writeFileSync"] ("./voiceonline.json", JSON ["stringify"] (voiceonline, null, 4))
}
///////////////////////////////////////
const safety = JSON.parse(fs.readFileSync('./nomore.json', 'utf8')); 
client.on("message", message =>{
if(!safety[message.author.id]) {
safety[message.author.id] = {
actions: 0
}}
})
client.on('guildMemberRemove', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "MEMBER_KICK") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else { 
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 5) {
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    });
});
 
 
 
 
 
client.on('roleDelete', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "ROLE_DELETE") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else { 
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 3) {
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    });
});
 
 
 
 
client.on('channelDelete', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "CHANNEL_DELETE") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else {
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 1) {
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    });
});
 
 
client.on('roleCreate', Toxic => {
Toxic.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "ROLE_CREATE") {
if(!safety[anti.executor.id]) {
safety[anti.executor.id] = {
actions: 0
};
} else { 
safety[anti.executor.id].actions+=1
if (safety[anti.executor.id].actions == 4) {
Toxic.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
safety[anti.executor.id].actions = 0
}
}
    }
    });
    fs.writeFile("./safety.json", JSON.stringify(safety) ,(err) =>{
        if (err) console.log(err.message);
    })
});
///////////////////////////////////////
client.on('message', async(message) => {
    if(message.author.juilan || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}invite`){
        let inv = await   client.generateInvite(['ADMINISTRATOR']);
        await message.channel.send(`${inv} `);
    }
});
///////////////////////////////////////
client.on("message", message => {
    if (message.content === (prefix + "commands")) {
     const embed = new Discord.RichEmbed() 
         .setColor("Gray")
         .setDescription(`**<a:welcom7:650754809909084170> | Commands List | <a:welcom7:650754809909084170>
        (' :1_: .help Protection | For protections commands')
         :2_: .help Admin | For admins commands
         :3_: .help Public | For publics commands
         :4_: .help Music | For music commands
message.channel.sendEmbed(embed)
   **`)
    }
  
   });
///////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help Protection") {
    if (message.author.id !== message.guild.owner.user.id) return message.channel.send(`**لا تستطيع استخدام هذا الامر**`);
    
    message.channel.send(
      `**Chek Your DM <a:true:665992026181074955>  **`
    );

    message.author.sendMessage(`** Protection Commands :protect:**`);
  }
});
///////////////////////////////////////
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help Admin") {
		 message.channel.send('**Chek Your DM <a:true:665992026181074955> **');
        message.author.sendMessage(`** Admin Commands :wrench: **`);

    }
})
///////////////////////////////////////
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help Public") {
		 message.channel.send('**Chek Your DM <a:true:665992026181074955>  **');
            
	
		 


 message.author.sendMessage(`** Public Commands :busts_in_silhouette:  **`);

    }
})
///////////////////////////////////////