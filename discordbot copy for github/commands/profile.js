const Discord = require('discord.js');
module.exports = {
    name: 'profile',
    description: 'this is a profile command. returns the users avatar profile link',
    execute(message, args){
        const embedProfile = new Discord.MessageEmbed();
        embedProfile.setImage(message.author.displayAvatarURL());
        message.reply(embedProfile);
    }
}