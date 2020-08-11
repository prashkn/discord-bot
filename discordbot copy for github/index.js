const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQyMzg3MzYxNTI2MTg2MDc0.XzFYGw.i2sjQVDIm-LFCMDm07ZdVbPWmK4';
const prefix = '.';

//Allows command files to work
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=> {
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]) {
        case 'ping':
            bot.commands.get('ping').execute(message, args); break;
        case 'simp':
            bot.commands.get('simp').execute(message, args); break;
        case 'info':
            bot.commands.get('info').execute(message, args); break;
        case 'profile':
            bot.commands.get('profile').execute(message, args); break;
        case 'erase':
            bot.commands.get('erase').execute(message, args); break;
        case 'coinflip':
            bot.commands.get('coinflip').execute(message, args); break;
        case 'randomPic':
            bot.commands.get('randomPic').execute(message, args); break;
        case 'word':
            bot.commands.get('word').execute(message, args); break;
        case 'scramble':
            bot.commands.get('scramble').execute(message, args); break;
    }
})

bot.login(token);