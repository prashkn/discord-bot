const Discord = require('discord.js');
module.exports = {
    name: 'word',
    description: 'this is a word command. sends the definition of a word.',
    execute(message, args){
        if (!args[1]){
            return message.reply("Uh oh. You didn't specify what word you wanted to look up.");
        }
        message.channel.send("https://www.dictionary.com/browse/" + args[1] + "?s=t");
    }
}