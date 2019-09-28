const botconfig = require('./botconfig.json');
const { Client , Collection } = require('discord.js');
const client = new Client();

client.on("ready", async () => {
    console.log(`${client.user.username} est prêt!`);
    client.user.setActivity("*help");
})

const fs = require('fs');
client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    const jsfile = files.filter(f => f.endsWith('.js'));
    if (jsfile.length <= 0) return console.log("[FS] Couldn't Find Commands!");

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, Object.assign(pull, { 
            triggers: [ pull.config.name, ...(pull.config.aliases || []) ];
        }))
    })
});

client.on("message", async message => {
    const prefix = botconfig.prefix;
    if(message.author.bot || message.channel.type === 'dm') return;
    if(!message.content.startsWith(prefix)) return;

    const [ cmd, ...args ] = message.content.slice(prefix.length).split(/ +/g) 

    let commandFile = client.commands.find(c => c.triggers.includes(cmd.toLowerCase()));
    if(commandFile) commandFile.run(client, message, args)
})

client.login(botconfig.token)
