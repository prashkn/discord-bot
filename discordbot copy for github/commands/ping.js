module.exports = {
    name: 'ping',
    description: 'this is a ping command. returns "pong"',
    execute(message, args){
        message.channel.send('pong!');
    }
}