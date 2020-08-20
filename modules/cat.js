const { default: Axios } = require("axios");
const { MessageEmbed } = require("discord.js");
const fs = require('fs');

const GIFY_URL = "https://api.giphy.com/v1/gifs/random?api_key=H6tV7jlwm5ZToHsgclGr99rhA2V9pTHp&tag=cute cat&rating=g"

class Cat{
    constructor(){
        this.i_meowTime = 0;
        this.url_timeout = 4;
    }

    command(command, msg){
        let first_arg = command[0];
        if ( first_arg === "meow" )
            msg.reply( this.meow() );
        else if ( first_arg === "showpussy" )
            this.showPussy(msg);
        else if (first_arg === "help")
            this.help(msg);
        else if (first_arg === "feed")
            this.feed(command,msg);
        else
            msg.reply('Meow meow the fuck?( "*cat help" )');
    }

    meow(){
        /// Meowing aggrsivelyy
        let oString = "o";
        for (let i = 0; i < this.i_meowTime; i++)
            oString += "oo";
        this.i_meowTime += 1;
        return "Me"+oString+"w!";
    }

    showPussy(msg){  
        /// Send some pussy pic      
        let random_page = Axios.get(GIFY_URL).then((data)=>{
            msg.channel.send(data.data.data.url);
        }).catch(() => {
            msg.reply("only nuke is sent!! Myao")
        });
    }

    help(msg){
        /// Help me, HELP!!
        let helpFile = fs.readFileSync("./modules/cat.help.json");
        let data =JSON.parse(helpFile);
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Let me give you a helping paw')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription(data);
        
        console.log(data);
        // msg.channel.send(embed);
    }

    feed(command,msg){
        /// Remember to feed me
    }
}
module.exports = new Cat();