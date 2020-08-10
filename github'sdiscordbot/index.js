const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'enter your token here';

const prefix = '.';
bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=> {
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]) {
        case 'ping':
            message.reply('pong!'); break;
        case 'simpCard':
            let simpStatus = Math.floor(Math.random()*5);
            switch(simpStatus){
                case 0:
                    simpStatus = '4 Counts of Simping'; break;
                case 1:
                    simpStatus = 'Simp Police'; break;
                case 2:
                    simpStatus = 'Currently in Simp Jail'; break;
                case 3:
                    simpStatus = 'Simp on the loose'; break;
                case 4:
                    simpStatus = 'Tier 3 Prash Sub Simp'; break;
                default:
                    simpStatus = 'Simp Detective on the case'; break;
            }
            const embed = new Discord.MessageEmbed();
                embed.setTitle('Simp Card');
                embed.setColor(0xF1C232);
                embed.setImage(message.author.avatarURL());
                embed.addField('Name', message.author.username);
                embed.addField('Simp Status', simpStatus);
            message.channel.send(embed); break;
        case 'help':
            const embedHelp = new Discord.MessageEmbed();
                embedHelp.setTitle('Prashy Help')
                embedHelp.setColor(0xF1C232);
                embedHelp.addField('Who is Prashy?', 'Prashy is a bot made with the intentions to add ~flavor~ to your discord!');
                embedHelp.addField('List of Commands', '.ping, .simpCard, .avatar, .clear [number], .flip');
                embedHelp.addField('About', 'Prashy was created by Prashant. Find his github here: https://github.com/prashkn. Find his linkedin here: https://www.linkedin.com/in/prashant-n/');
            message.channel.send(embedHelp); break;
        case 'avatar':
            message.reply('hey! This is your avatar: ' + message.author.displayAvatarURL()); break;
        case 'clear':
            if (!args[1]){
                return message.reply("Uh oh. You didn't specify how many messages you wanted to delete.");
            }
            message.channel.bulkDelete(args[1]); break;
        case 'flip':
            let cointoss = Math.random();
            if (cointoss < 0.5) {
                message.reply('tails!');
            } else if (cointoss > 0.5) {
                message.reply('heads!');
            } else {message.reply('the chances of you getting this is unbelievably high. you are insane')} break;
    }
})

bot.login(token);