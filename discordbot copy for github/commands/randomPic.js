const Discord = require('discord.js');
module.exports = {
    name: 'randomPic',
    description: 'this is a randomPic command. sends a randomPic',
    execute(message, args){
        let urlString = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let count = 0; count < 6; count++)
        {
            urlString += characters.charAt(Math.floor(Math.random()*characters.length));
        }
        message.channel.send(urlString);
        message.channel.send("https://prnt.sc/" + urlString);
    }
}