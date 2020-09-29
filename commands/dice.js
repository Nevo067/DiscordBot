const messages = require("../events/messages");

const Discord = require("discord.js");

class RollDice {
    constructor(dice,numbers,valDice) {
        this.dice = dice;
        this.numbers = numbers;
        this.valDice = valDice
    }
    InitVal(args,indexArgs)  {
        this.dice = args[indexArgs];
        this.numbers = this.dice[0];
        this.valDice = this.dice.slice(2);
       
    }
    RollOneDice() {
        let min = Math.ceil(1);
        let max = Math.floor(Number(this.valDice));
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    RollMultipleDice() {
        tab = [];
        for (let i = 0; i < this.numbers; i++) {
            tab.push(RollOneDice(this.valDice));
        }
        return tab;
    }
    toString()
    {
        console.log(this.dice);
        console.log(this.numbers);
        console.log(this.valDice);
        
    }
}



exports.run =(bot,message,args)=>{

    const typeDice = ["go","ta"]

    let lengthArgs = args.length;
    let dice = 0;
    let numbers= 0;
    let valDice = 0;
    let rollDice = new RollDice(dice,numbers,valDice);
    
    console.log(lengthArgs);
    console.log(args)
    if(lengthArgs >= 1)
    {
        console.log(lengthArgs);
        switch(lengthArgs)
        {
            case 1:

                /*
                dice = args[0];
                numbers = dice;
                valDice = dice.slice(2);
                */
                rollDice.InitVal(args,lengthArgs-1);
                console.log(rollDice.numbers+"numbers");
                message.channel.send(message.channel.send(rollDice.RollOneDice()));
                break;
            default:
                console.log("cela bug");

        }
    }
    //message.channel.send("GOODMORNING WORLD"+" "+message.author.username,`${message.author}`); 
}



// init value to roll a dice  
function InitVal(args,dice,numbers,valDice,indexArgs)  {
     dice = args[indexArgs];
     numbers = dice[0];
     valDice = dice.slice(2);
     console.log(numbers+"num");
     return dice,numbers,valDice;
}
// return a random value
function RollOneDice(val) {
    min = Math.ceil(1);
    max = Math.floor(Number(val));
    return Math.floor(Math.random() * (max - min +1)) + min;
}
//return a tab of number
function RollMultipleDice(number,val) {
    tab = [];
    for (let i = 0; i < number; i++) {
        tab.push(RollOneDice(val));
    }
    return tab;
}

