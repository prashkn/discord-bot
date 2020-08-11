const Discord = require('discord.js');
module.exports = {
    name: 'simp',
    description: 'this is a simpCard command. returns a card for each user with a simp status.',
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        let simpStatus = Math.floor(Math.random()*5);
            switch(simpStatus){
                case 0:
                    simpStatus = '4 Counts of Simping'; break;
                case 1:
                    simpStatus = 'Simp Police'; break;
                case 2:
                    simpStatus = 'Currently in Simp Jail'; break;
                case 3:
                    simpStatus = 'Simp on the loose';
                case 4:
                    simpStatus = 'Tier 3 Prash Sub Simp'; break;
                default:
                    simpStatus = 'Simp Detective on the case'; break;            }
                embed.setTitle('Simp Card');
                embed.setColor(0xF1C232);
                embed.setThumbnail(message.author.avatarURL());
                embed.addField('Name', message.author.username);
                embed.addField('Simp Status', simpStatus);
            message.channel.send(embed);
    }
}