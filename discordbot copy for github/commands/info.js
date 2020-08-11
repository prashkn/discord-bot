const Discord = require('discord.js');
module.exports = {
    name: 'info',
    description: 'this is a info command. returns info for the bot',
    execute(message, args){
        const embedHelp = new Discord.MessageEmbed();
        embedHelp.setTitle('Prashy Help')
        embedHelp.setColor(0xF1C232);
        embedHelp.setThumbnail('https://image.flaticon.com/icons/svg/1066/1066372.svg');
        embedHelp.setDescription('Trigger Prashy commands by typing "."');
        embedHelp.addFields(
            {name: '\u200B', value: '\u200B'},
            {name: 'Ping Command', value: 'Will respond with "pong".', inline: true},
            {name: 'SimpCard Command', value: 'Will respond with Simp card.', inline: true},
            {name: 'Avatar Command', value: 'Will respond with a link to your avatar.', inline: true},
            {name: 'Clear[n] Command', value: 'Will clear the last n number of messages sent.', inline: true},
            {name: 'Flip Command', value: 'Will flip a coin.', inline: true},
            {name: 'RandomPic Command', value: 'Will send a link to a random picture.', inline: true},
            {name: 'Word[word] Command', value: 'Will send the definition of the specified word.', inline: true},
            {name: 'Scramble Command', value: 'Will scramble a specified word.', inline: true},
            {name: '\u200B', value: '\u200B'}
        );
        embedHelp.addField('Links', 'Github: https://github.com/prashkn\nLinkedin: https://www.linkedin.com/in/prashant-n/');
        embedHelp.setFooter('Made by Prashant Naganaboyina');
        embedHelp.setTimestamp();
        message.channel.send(embedHelp);
    }
}