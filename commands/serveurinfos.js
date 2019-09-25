module.exports.run = (client , message, args) => {
    const { MessageEmbed } = require("discord.js")
let verifLevels = ["Aucune", "Faible", "Moyenne", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
            "singapore": ":flag_sg: Singapoure",
            "us-central": ":flag_us: U.S. Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. East",
            "us-south": ":flag_us: U.S. South",
            "us-west": ":flag_us: U.S. West",
            "eu-west": ":flag_eu: Western Europe",
            "vip-us-east": ":flag_us: VIP U.S. East",
            "london": ":flag_gb: London",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russie",
            "southafrica": ":flag_za:  Sud Afrique"
        };
        let serverembed = new MessageEmbed()
        .setColor(0x0040ff)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Nom", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Créateur", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Région", region[message.guild.region], true)
        .addField("Total | Humains | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
        .addField("Salons", `${message.guild.channels.filter(channel => channel.type === 'voice').size} Salons Vocaux / ${message.guild.channels.filter(channel => channel.type === 'text').size} Salons Textuels`, true)
        .addField("Rôles", message.guild.roles.size, true)
        .setThumbnail(message.guild.iconURL)
        message.channel.send(serverembed)

}
module.exports.config = {
    name: "serveurinfos",
    aliases: ["si"]
}