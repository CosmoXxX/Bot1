module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(Vous n'avez pas la permission **Manage Messages** pour effectuer cette commande.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('Je n'aipas la permission **Manage Messages** dans ce serveur.');

    if (!args[0]) return message.channel.send('Vous devez préciser le nombre de message à supprimer.');
    if (args[0] < 1 && args[0] > 100) return message.channel.send('Veuillez choisir un nombre entre 1-100 de messages à supprimer.');
    if (isNaN(args[0])) return message.channel.send('Ce n'est pas un nombre correcte.');


    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`J'ai supprimé **${args[0]}** messages.`).then(msg => msg.delete({
          timeout: 3000
        }))).catch().catch((e) => message.channel.send('Vous ne pouvez pas supprimer les messages de plus de 14 jours.'));
}
module.exports.config = {
  name: "clear",
  aliases: ["purge","prune"]
}
