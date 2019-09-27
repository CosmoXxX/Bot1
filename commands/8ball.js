module.exports = {
    name: "8ball",
    category: ":tada: **Fun**",
    description: "Magique 8ball",
    usage: "*8ball <question>",
    run: async (client, message, args) => {
    if (!args[1]) return message.reply("S'il te plaît, pose-moi une question !"); 
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non","Surement","Je pense que oui","Bien sûr!","Mes sources disent non.","Je sais pas"];
    let res = Math.floor(Math.random() * replies.length);  
    message.channel.send(`:8ball: | ${replies[res]}`)
};
