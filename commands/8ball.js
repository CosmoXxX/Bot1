module.exports.run = async (client, message, args) => {
    if (!args[1]) return message.reply("S'il te plaît, pose-moi une question !"); 
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non","Surement","Je pense que oui","Bien sûr!","Mes sources disent non.","Je sais pas"];
    let res = Math.floor(Math.random() * replies.length);  
    message.channel.send(`:8ball: | ${replies[res]}`)
};
module.exports.config = {
name:"8ball",
aliases: []
}
