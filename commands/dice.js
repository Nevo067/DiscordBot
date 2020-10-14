//Command that roll dice
const messages = require("../events/messages");

const Discord = require("discord.js");
//Class that contains differents methods to roll dices
class RollDice {
    constructor(dice,numbers,valDice) {
        this.dice = dice;
        this.numbers = numbers;
        this.valDice = valDice;
        const typeDice = ["go","ta"];
        
    }
    // init value to roll a dice 
    InitVal(args,indexArgs)  {
        this.dice = args[indexArgs];
        this.numbers = this.dice[0];
        this.valDice = this.dice.slice(2);
       
    }
    //init value separately to roll dices
    InitValSep(numbers,valDice)
    {
        //this.dice = dice
        this.numbers = numbers
        this.valDice = valDice;
    }
    //Role Dice as Goetia
    RollGoetia()
    {
        let tab;
        let sum = 0;
        //init roll dice
        this.InitValSep(3,6);
        //roll dice
        tab=this.RollMultipleDice();
        console.log(tab);
        return tab;
    }
    //TODO:A supprimer
    RollTarian(nb)
    {
        let tab;
        let sum = 0;
        //init roll dice
        this.InitValSep(nb,100);
        //roll dice
        tab=this.RollMultipleDice();
        console.log(tab);
        return tab;
    }
    // return a random value
    RollOneDice() {
        let min = Math.ceil(1);
        let max = Math.floor(Number(this.valDice));
        return Math.floor(Math.random() * (max - min +1)) + min;
        
    }
    //return a tab of number
    RollMultipleDice() {
        let tab = [];
        for (let i = 0; i < this.numbers; i++) {
            tab.push(this.RollOneDice());
        }
        console.log(tab);
        return tab;
    }
    IsBigger(tab,valSupp)
    {
        nbTrue = 0;
        nbFalse = 0;
        

        tab.forEach(element => {
           if(element>valSupp)
           {
               nbTrue++;
           }
           else
           {
               nbFalse++;
           } 
        });

        if(nbTrue>nbFalse)
        {
            return true;
        }
        return false;
    }
    //return a table of bolean value depending to if tab value  bigger that valsupp
    IsBiggerVal(tab,valSupp)
    {
        let tabValue = [];
        tab.forEach(element => {
            val = (element>valSupp)
            tabValue.push(val);
            
         });
         return tabValue;
    }
    IsSmaler()
    {
        nbTrue = 0;
        nbFalse = 0;
        

        tab.forEach(element => {
           if(element<valSupp)
           {
               nbTrue++;
           }
           else
           {
               nbFalse++;
           } 
        });

        if(nbTrue>nbFalse)
        {
            return true;
        }
        return false;
    }
    IsBiggerVal(tab,valSupp)
    {
        let tabValue = [];
        let val;
        tab.forEach(element => {
            val = (element>valSupp)
            tabValue.push(val);
            
         });
         return tabValue;
    }
    //return a table of bolean value depending to if tab value  smaller that valsupp
    IsSmallerVal(tab,valSupp)
    {
        let tabValue = [];
        let val;
        tab.forEach(element => {
            val = (element<valSupp)
            tabValue.push(val);
            
         });
         return tabValue;
    }
    //return a table of bolean value depending to if tab value equal that valsupp
    IsEqualVal(tab,valEqual)
    {
        let tabValue = [];
        let val;
        tab.forEach(element => {
            val = (element==valEqual)
            tabValue.push(val);
         });
         return tabValue;
    }
    //Calcul the number of true value on tab
    CalculSucess(tab)
    {
        let nb = 0;
        tab.forEach(element => {
            if(element)
            {
                nb++;
            }
        });
        return nb;
    }
    //find prefix
    IsContainPrefix(pref)
    {
        return typeDice.includes(pref);
    }
    //add tab value
    SumTab(tab)
    {
        let sum = 0;
        tab.forEach(element => {
            sum += element;
        });
        return sum;
    }
    
    toString()
    {
        console.log(this.dice);
        console.log(this.numbers);
        console.log(this.valDice);
        
    }
}


//run to command
exports.run =(bot,message,args)=>{
    
    //prefixe to different roll dice
    const typeDice = ["go","ta"];
    //console.log("pi");
    //init
    let lengthArgs = args.length;
    let dice = 0;
    let numbers= 0;
    let valDice = 0;
    let rollDice = new RollDice(dice,numbers,valDice);
    
    //check the numbers of parameter
    if(lengthArgs >= 1)
    {
        console.log(lengthArgs);
                switch(args[0])
                {
                    //Goetia
                    case 'go':
                        //check numbers of argument
                        switch(lengthArgs)
                        {
                            case 1:
                                message.channel.send(rollDice.RollGoetia());
                            break;

                            case 2:
                                let prefx = args[1].slice(0,1);
                                let numberVal = args[1].slice(1);
                                let tabVal;
                                let sum;
                                let nbSuccess = 0;
                                switch (prefx) {
                                    case ">":
                                        tabVal = rollDice.RollGoetia();
                                        sum = rollDice.SumTab(tabVal);
                                        if(sum >= numberVal)
                                        {
                                            nbSuccess++;
                                        }
                                        message.channel.send(tabVal);
                                        message.channel.send("Somme "+sum);
                                        message.channel.send(nbSuccess+" Success");
                                    break;
                                
                                    default:
                                        break;
                                }
                            break;

                            default:
                                console.log("cela bug");
                            break;
                        }
                    break;
                    
                    default:
                        switch(lengthArgs)
                        {
                            case 1:
                                rollDice.InitVal(args,lengthArgs-1);
                                console.log(rollDice.numbers+"numbers");
                                message.channel.send(rollDice.RollMultipleDice());
                            break;

                            case 2:
                                let prefx = args[1].slice(0,1);
                                let numberVal = args[1].slice(1);
                                console.log(numberVal);
                                let tab;
                                rollDice.InitVal(args,0);
                                //console.log(rollDice.numbers+"numbers");
                                tab = rollDice.RollMultipleDice();

                               switch(prefx)
                               {
                                   case ">":
                                      message.channel.send(tab); 
                                      message.channel.send(rollDice.CalculSucess(rollDice.IsBiggerVal(tab,numberVal))+" success");
                                    break;

                                    case "<":
                                        message.channel.send(tab); 
                                        message.channel.send(rollDice.CalculSucess(rollDice.IsSmallerVal(tab,numberVal))+" success");
                                    break;

                                    case "=":
                                        message.channel.send(tab); 
                                        message.channel.send(rollDice.CalculSucess(rollDice.IsEqualVal(tab,numberVal))+" success");
                                    break;
                                    default:
                                    break;
                               }
                            break;
                        } 
                    break;
                }
    }
    //message.channel.send("GOODMORNING WORLD"+" "+message.author.username,`${message.author}`); 
}

