const Discord = require ('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Bot listo');
});
client.on('message', message =>{
    //recibiendo mensaje
    console.log(message.content);
    if (message.content === 'ping'){message.reply('pong')};
});



client.login('NzMyMzcwNzI4MTQ1NjQ5ODI0.Xwznpg.dy9_Cj6Nt5v7aI8PcP5EfmALQbc');