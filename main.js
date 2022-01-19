const Discord = require('discord.js');
require("dotenv").config();
const {fetchNeko} = require("nekos-best.js");
const fetch = require('cross-fetch');

const client = new Discord.Client({
     intents:  [
         "GUILDS", 
         "GUILD_MESSAGES",
         "GUILD_MEMBERS"
        ] 
    })

// const welcome = require("./welcome");

client.once('ready', () => {
    console.log('code name');

  //  welcome(client);
});

client.login(process.env.BOTTOKEN);

/*const welcomeChannelId = "894571100565020682"

client.on("guildMemberAdd", (member) => 
{
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Konnichiwa <@${member.id}> Welcome to the server!`})
})*/

const jokes = [
    'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
    '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
    'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
    'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
    'If you listen to a UNIX shell, can you hear the C?',
    'Why do Java programmers have to wear glasses? Because they do not C#.',
    'What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.',
    'When Apple employees die, does their life HTML5 in front of their eyes?',
    'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    'Before software can be reusable it first has to be usable.',
    'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
    'I think Microsoft named .Net so it would not show up in a Unix directory listing.',
    'There are two ways to write error-free programs; only the third one works.',
 ];

 const baseball = [
    'Foul Ball!',
    'Hit by pitch! (you go to first base😩)',
    'Ground Ball. ERROR THROW!!! (Single)',
    'Homerun!!',
    'Triple!',
    'Double!',
    'Single!',
    'Ball.',
    'Ground ball.', 
    'Swung and miss!',
    'Foul tipped into catchers glove. (Strike)',
    'Line Drive caught.',
    'Foul tipped into catchers glove.',
    'Ground Rule Double.',
    'Ground ball ERROR.',
    'Hit by pitch.',
    'Swung too early.',
    'Swung wayyy too late.',
    'Fly out.',
    'Pop up.',
 ]
 
 // fetchNeko('hug', 15).then(console.log);

 /*client.setActivity(`Currently in ${client.guilds.cache.size} servers`);
 module.exports.run = async (client, msg, arguments) => {
    const guild = client.guilds.get("566596189827629066");
    setInterval(function() {
       var memberCount = guild.members.filter(member => !member.user.bot).size;
       var memberCountChannel = client.channels.get("626462657817477131");
       memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
    }, 1000);
 };*/

client.on('message', gotMessage);

const replies = [
    'Yes assistant?',
    'It is my code name...',
    'How can I help you?',
    'I love taking naps what about you?',
    'Yes, I am a detective',
    '私は伝説の探偵です',
    'あなたは私の相棒です'
]


async function gotMessage(msg)
{
    let tokens = msg.content.split('');

    console.log(msg.content);
    if(msg.content === '.siesta')
    {
        const index = Math.floor(Math.random() * replies.length);
        msg.reply(replies[index]);
    }
    else if(msg.content === '.joke')
    {
        const index = Math.floor(Math.random() * jokes.length);
        msg.reply(jokes[index]);
    }
    else if(msg.content === '.swing')
    {
        const index = Math.floor(Math.random() * baseball.length);
        msg.reply(baseball[index]);
    }
    else if(msg.content === '.help')
    {
        msg.reply('PREFIX: ```.```' + 'SIESTA: ```.siesta```' + 'HELP: ```.help```' + 'JOKE: ```.joke```' + 'BASEBALL: ```.swing```' + 'INTERACTION GIF: ```.(any interaction command, like .hug)```' + 'DEMONSLAYER INTERACTION GIF: ```.breathof(any breathing technique) | .hinokamikaguradance```' + 'MHA INTERACTION GIF: ```.smash```');
    }  
    else if(msg.content == ".hug")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animehug&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} hugs`);
    }
    else if(msg.content == ".pat")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animepat&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} pats`);
    }
    else if(msg.content == ".cry")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animecry&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} cries`);
    }
    else if(msg.content == ".cuddle")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animecuddle&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} cuddles`);
    }
    else if(msg.content == ".sleep")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animesleep&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} .sleeps`);
    }
    else if(msg.content == ".slap")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeslap&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} slaps`);
    }
    else if(msg.content == ".kick")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animekick&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} kicks`);
    }
    else if(msg.content == ".kiss")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animekiss&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} kisses`);
    }
    else if(msg.content == ".bite")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animebite&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} bites`);
    }
    else if(msg.content == ".punch")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animepunch&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} punches`);
    }
    else if(msg.content == ".dance")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animedance&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} dances`);
    }
    else if(msg.content == ".fumo")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=fumos&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} fumos`);
    }
    else if(msg.content == ".smash")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=deteroitsmash&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} deteroit smashes`);
    }
    else if(msg.content == ".breathofthunder")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=thunderbreathing&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} uses thuder breathing`);
    }
    else if(msg.content == ".breathofwater")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=waterbreathing&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} uses water breathing`);
    }
    else if(msg.content == ".hinokamikaguradance")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=hinokamikaguradance&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} uses sun breathing`);
    }
    else if(msg.content == ".breathoffire")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=firebreathing&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} uses fire breathing`);
    }
    else if(msg.content == ".breathofmist")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=mistbreathing&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} uses mist breathing`);
    }
    else if(msg.content == ".poke")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animepoke&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} pokes`);
    }
    else if(msg.content == ".boop")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeboop&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} boops`);
    }
    else if(msg.content == ".lick")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animelick&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} licks`);
    }
    else if(msg.content == ".snuggle")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animesnuggle&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} snuggles`);
    }
    else if(msg.content == ".blush")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeblush&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} blushes`);
    }
    else if(msg.content == ".kill")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animekill&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} kills`);
    }
    else if(msg.content == ".handhold")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animehandhold&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} holds hands with`);
    }
    else if(msg.content == ".highfive")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animehighfive&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} highfives`);
    }
    else if(msg.content == ".yeet")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeyeet&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} yeets`);
    }
    else if(msg.content == ".fbi")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animefbi&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} calls the fbi`);
    }
    else if(msg.content == ".run")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animerun&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} runs away`);
    }
    else if(msg.content == ".pout")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animepout&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} pouts`);
    }
    else if(msg.content == ".disappear")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animedisappear&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} disappears`);
    }
    else if(msg.content == ".yo")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animehello&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} watups`);
    }
    else if(msg.content == ".bye")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animesayonara&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} cya's`);
    }
    else if(msg.content == ".protect")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeprotect&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} protects`);
    }
    else if(msg.content == ".lonely")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animelone&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} feels lonely`);
    }
    else if(msg.content == ".mad")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animemad&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} gets mad`);
    }
    else if(msg.content == ".angry")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeangry&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} gets angry`);
    }
    else if(msg.content == ".hide")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animehide&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} hides`);
    }
    else if(msg.content == ".coffee")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animecoffee&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} sips coffee`);
    }
    else if(msg.content == ".confuse")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeconfused&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} is confused`);
    }
    else if(msg.content == ".scream")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animescream&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} screams`);
    }
    else if(msg.content == ".scare")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animescare&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} scares`);
    }
    else if(msg.content == ".icecream")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animeicecream&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} licks an ice-cream`);
    }
    else if(msg.content == ".jump")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animejump&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} jumps`);
    }
    else if(msg.content == ".stare")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animestare&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} stares`);
    }
    else if(msg.content == ".loves")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animelove&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} loves`);
    }
    else if(msg.content == ".ok")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animethumbsup&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} okays`);
    }
    else if(msg.content == ".die")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animedie&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} dies`);
    }
    else if(msg.content == ".smug")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animesmug&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} smugs`);
    }
    else if(msg.content == ".smile")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animesmile&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} smiles`);
    }
    else if(msg.content == ".lazy")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animelazy&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} is too lazy to work`);
    }
    else if(msg.content == ".sigh")
    {
       /*let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let url = `https://api.tenor.com/v1/search?q=animesigh&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} sighs`);
    }
}