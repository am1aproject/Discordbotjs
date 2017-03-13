const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MjkwNzc2NTgyNzUzMzUzNzI4.C6f2UA.kbsddY-LTqfEgHJHzW79b4PllLU');