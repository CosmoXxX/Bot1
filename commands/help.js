module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const lang = require('../lang/fr.json').help
    const embed = new Discord.MessageEmbed()

.setAuthor(message.author.username, message.author.avatarURL)
.setColor('0040ff')
.setTitle(lang.title)
.setThumbnail(client.user.avatarURL)
.addField("📰 **Informations** →", "-`help` , `serveurinfos`")
.addField(":camping: **Images** →", "-`beautiful` , `blur` , `glitch`")
.addField(lang.jeux,"-`apextstats` , `brstats` , `fnstats` , `skin`")
.addField(":tada: **Fun** →","-`8ball` , `blague` , `joke`")
.addField(":rotating_light: **Modérations** →" , "-`clear`") 
.addField(":police_car: **Staff** →", "-`eval`")
.addField(":tools: **Utilitaires** →", "-`calcul` , `meteo`")
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL)
message.channel.send(embed)
}
module.exports.config = {
    name: "help",
    aliases: ["h"]
}
