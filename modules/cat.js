class Cat{
    i_meowTime = 0;

    command(command){
        let first_arg = command[0];
        if ( first_arg === "meow" )
            return this.meow();

        return "Meow meow the fuck?";
    }

    meow(){
        let oString = "o";
        for (let i = 0; i < this.i_meowTime; i++)
            oString += "o";
        this.i_meowTime++;
        return "Me"+oString+"w";
    }
}
module.exports = new Cat();