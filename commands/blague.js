
const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
const Joker = require("blague.xyz");
const joker = new Joker({
    token: "ESC.CqoMAm-G50-rjM2.52L1GMYU.r1qovog_n6BZtFqMbzwaL6M.m1q9rVaY_yr"
});
 
// Obtenir une blague alÃ©atoire
joker.random().then(joke => {
    console.log(joke.question); // Que dit une feuille quand elle tombe dans l'eau ?
    console.log(joke.answer);
const em = new MessageEmbed()
.setColor(0x0040ff)
.addField("__Blague aléatoire__",`${joke.question}\n||${joke.answer}||`)
message.channel.send(em)
})
}
module.exports.config = {
name: "blague",
aliases: []
}
