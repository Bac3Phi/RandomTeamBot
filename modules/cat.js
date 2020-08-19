const { default: Axios } = require("axios");

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
        {
            this.showPussy(msg);
        }else
        {
            msg.reply("Meow meow the fuck?");
        }
    }

    meow(){
        let oString = "o";
        for (let i = 0; i < this.i_meowTime; i++)
            oString += "o";
        this.i_meowTime += 2;
        return "Me"+oString+"w";
    }

    showPussy(msg){        
        let random_page = Axios.get(GIFY_URL).then((data)=>{
            msg.channel.send(data.data.data.url);
        }).catch(() => {
            msg.reply("only nuke is sent!! Myao")
        });
    }
}
module.exports = new Cat();