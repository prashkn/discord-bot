const Discord = require('discord.js');
module.exports = {
    name: 'erase',
    description: 'this is a erase command. clears the last n messages',
    execute(message, args){
        if (!args[1]){
            return message.reply("Uh oh. You didn't specify how many messages you wanted to delete.");
        }
        message.channel.bulkDelete(args[1]);
    }
}