module.exports.run = (bot, message, args) => {
const  { MessageEmbed } = require ("discord.js")
const moment = require("moment")
moment.locale("fr")
let c = message.mentions.channels.first() ||  message.channel;
const em = new MessageEmbed()
.setColor("0040ff")
.setTitle("Informations du salon")
.setDescription(`<# ${c.id}>`)
.addField("Nom :",c.name)
.addField("ID :",c.id)
.addField("Type :",c.type)
.addField("Position :",c.position)
.addField("Créé le :",moment(c.createdAt).format("Do MMMM YYYY, LTS"))
message.channel.send(em)
}
module.exports.config = {
  name: "channelinfos",
  aliases: ["ci"]
}
