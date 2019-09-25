const { MessageEmbed } = require("discord.js");
const weather = require('weather-js')

module.exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  
if(result.length === 0){
message.channel.send("**S'il vous plaît, fournissez moi un emplacement valide.**")
return;
}

  var current = result[0].current;
  var location = result[0].location;
const i = new MessageEmbed()
.setColor(0x0040ff)
.setThumbnail(current.imageUrl)
.setDescription(`Météo de ${current.observationtime}`)
.addField("Lieu",location.name)
.addField("Fuseau Horaire",`UTC${location.timezone}`)
.addField("Date",current.date)
.addField("Température", `${current.temperature}`C)
.addField("Ressentie",current.feelslike)
.addField("Humidité",current.humidity)
.addField("Vent",current.windspeed)
.addField("Altitude",location.lat)
.addField("Longitude",location.long)
   });
  }
module.exports.config = {
name: "meteo",
aliases: ["weather"]
}
