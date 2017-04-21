const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content == 'ping') {
    message.reply('pong `' + client.ping + 'ms `');
  }
});

client.on('message', message => {
  if (message.content === 'whoami') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content == 'nigger') {
    message.delete().then(msg => console.log(`Deleted message from ${msg.author}`)).catch(console.error);
  }
});

client.on('message', message => {
  if (message.content == 'pinme'){
      if (message.pinnable){
        message.pin;
    }
  }
  
})

client.on('message', message => {
  var string = message.content;
  if (string.includes("nigger")) {
    message.reply("you've been warned! [Racism]"),
    message.delete('nigger', message).then(msg => console.log(`Deleted message ${msg.content} from ${msg.author}`)).catch(console.error);
  }else if(string.includes("test")) {
    message.reply("shut up")
    message.delete('test', message).then(msg => console.log(`Deleted message "${msg.content}" from ${msg.author}`)).catch(console.error);
  }
});

client.login('MjkwNzc2NTgyNzUzMzUzNzI4.C6f2UA.kbsddY-LTqfEgHJHzW79b4PllLU');