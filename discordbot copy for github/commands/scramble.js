const Discord = require('discord.js');
module.exports = {
    name: 'scramble',
    description: 'this is a scramble command. scrambles a word.',
    execute(message, args){
        if (!args[1]){
            return message.reply("Uh oh. You didn't specify what word you wanted to scramble.");
        }
        let originalWord = args[1].toLowerCase();
        let originalArray = originalWord.split('');
        let newWord = [];
        for (let n = 0; n < originalWord.length; n++) {
            let tempNumber = Math.floor(Math.random()*originalArray.length);
            newWord[n] = originalArray[tempNumber];
            originalArray.splice(tempNumber, 1);
        }
        message.reply(newWord.join(''));
    }
}