const Discord = require('discord.js');
module.exports = {
    name: 'coinflip',
    description: 'this is a coinflip command. returns heads or tails',
    execute(message, args){
        let cointoss = Math.random();
        if (cointoss < 0.5) {
            message.reply('tails!');
        } else if (cointoss > 0.5) {
            message.reply('heads!');
        } else {
            message.reply('the chances of you getting this is unbelievably high. you are insane');
        }
    }
}