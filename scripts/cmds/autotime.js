const moment = require('moment-timezone'); 

module.exports.config = {
  name: "autotime",
  version: "2.0.0",
  role: 0,
  author: "Mark",
  description: "Automatically sends messages based on set times.",
  category: "AutoTime",
  countDown: 3
}; 

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
     "12:00:00 PM": {
        message: " 🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 12:00 𝐏𝐌\n\n(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠) |  good afternoon everyone don't forget to eat y'all lunch break 🎀\n╰─..★.──────────╯"
      },
      "01:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 01:00 𝐀𝐌\n\n(˶ᵔ ᵕ ᵔ˶) |  goodmorning guys, take care of yourself ❤︎\n╰─..★.──────────╯"
      },
      "02:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 02:00 𝐀𝐌\n\nฅ≽^•⩊•^≼ฅ | meow visit my owner : https://facebook.com/markflurry14\n╰─..★.──────────╯" 

      },
      "03:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 03:00 𝐀𝐌\n\nദ്ദി ༎ຶ‿༎ຶ ) | puyat well kaya pa to\n╰─..★.──────────╯"
        
      },
      "04:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 04:00 𝐀𝐌\n\n( ˶ˆ꒳ˆ˵ ) | goodmorning pasok kana sa school\n╰─..★.──────────╯" 

      },
      "05:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 05:00 𝐀𝐌\n\n◝(ᵔᗜᵔ)◜ | goodmorning poo\n╰─..★.──────────╯"
        
      },
      "06:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 06:00 𝐀𝐌\n\n(๑•᎑•๑) |  take care of yourself po dont give up\n╰─..★.──────────╯"
        
      },
      "07:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 07:00 𝐀𝐌\n\n(•؎ •) | don't forget to eat y'all breakfast!! 🍞☕🍛\n╰─..★.──────────╯"
        
      },
      "08:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 08:00 𝐀𝐌\n\n(╥‸╥) | life update: hindi minamahal\n╰─..★.──────────╯"
        
      },
      "09:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 09:00 𝐀𝐌\n\n( ˶ˆᗜˆ˵ ) | breakfast napoo kayooo"
        
      },
      "10:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\╭──────────.★..─╮\n⏰ time now - 10:00 𝐀𝐌\n\n(⁠・⁠∀⁠・⁠) | morningg guyss"
        
      },
      "11:00:00 AM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 11:00 𝐀𝐌\n\n(⁠≧⁠▽⁠≦⁠) | chat mo onwer ko walang ka chat eh kawawa naman\nhttps://facebook.com/markflurry14\n╰─..★.──────────╯"
        
      },
      "12:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n╭──────────.★..─╮\n⏰ time now - 12:00 𝐏𝐌\n\n (⁠◠⁠‿⁠◕⁠) | eat na po dont skip your lunch\n╰─..★.──────────╯"
        
      },
      "01:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 01:00 𝐏𝐌\n\n📌 | free to ask anything but for educational purposes only."
        
      },
      "02:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 02:00 𝐏𝐌\n\n📌 | try more command type -help for more commands."
        
      },
      "03:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 03:00 𝐏𝐌\n\n📌 | meryenda na"
        
      },
      "04:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 04:00 𝐏𝐌\n\n📌 | good evening guys"
        
      },
      "05:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 05:00 𝐏𝐌\n\n📌 | imisshim"
        
      },
      "06:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 06:00 𝐏𝐌\n\n📌 | don't forget to eat y'all dinner"
        
      },
      "07:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 07:00 𝐏𝐌\n\n📌 | ano silbe ng pag online mo kung hinde mo din naman e chachat owner ko!?"
        
      },
      "08:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 08:00 𝐏𝐌\n\n📌 | kain na kayo wag magpapalipas ng gutom"
        
      },
      "09:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 09:00 𝐏𝐌\n\n📌 | goodnight guys sleep na kayo"
        
      },
      "10:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 10:00 𝐏𝐌\n\n📌 | wag na matulog magpuyat nalang"
        
      },
      "11:00:00 PM": {
        message: "🎀 | 𝗔𝗹𝗶𝗰𝗲 𝗕𝗼𝘁:\n▬▬▬▬▬▬▬▬▬▬▬▬\n⏰ time now - 11:00 𝐏𝐌\n\n📌 | alas eleven na ano wag kana matulog"
      } 

    // Add more messages for other times as needed
  }; 

  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Manila');
    const currentTime = now.format('hh:mm:ss A'); 

    const messageData = arrayData[currentTime]; 

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async (threadID, index) => {
        api.sendMessage({ body: messageData.message }, threadID);
      });
    } 

    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  }; 

  checkTimeAndSendMessage();
}; 

module.exports.onStart = () => {};
