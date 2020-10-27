const {jdrDao} = require("../dataBases/jdrDao");
const { MembreDao } = require("../dataBases/membreDAO");
//enable to check differents parameter
class verifRecu
{
    constructor(maxArgs)
    {
        this.maxArgs = maxArgs;
    }
    IsBetweenMaxArgs(args)
    {
        if(args.length > this.maxArgs || args.length <= 0)
        {
            return false;
        }
        return true;
    }

    
}
exports.run = (bot,message,args) =>{
    let verif = new verifRecu(4);
    //let jdrDao = new jdrDao();
    let membreDao = new MembreDao();
    if(verif.IsBetweenMaxArgs(args))
    {
        switch (args[0]) {
            case "show":
                    switch (args[1]) {
                        case "jdr":
                            
                            break;
                        case "player":
                            let promesse =membreDao.getMembreByPs(message.author.id);
                            promesse.then(x =>{
                                message.channel.send(JSON.stringify(x));
                            })
                               
                            break;
                        case "objet":

                            break;
                        default:
                            break;
                    }
                //jdrDao.getJdr();
                break;
            case "add":
                switch (args[1]) {
                    case "jdr":
                        
                        break;
                    case "player":
                        console.log(message.author.id);
                        membreDao.postMembres(args[2],message.author.id);
                        break;
                    case "objet":

                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
}
