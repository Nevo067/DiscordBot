const {jdrDao} = require("../dataBases/jdrDao");
const { MembreDao } = require("../dataBases/membreDAO");
var {ObjetDao} = require('../dataBases/objetDao');
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
    //Dao of jdr
    let jdrDao = new jdrDao();
    //Dao of member
    let membreDao = new MembreDao();
    //Dao of objet
    let objetDao = new objetDao;
    if(verif.IsBetweenMaxArgs(args))
    {
        switch (args[0]) {
            case "show":
                    switch (args[1]) {
                        //Show jdr
                        case "jdr":
                            let promesse = jdrDao.getjdr();
                            promesse.then(x =>{
                                let chaine;
                                x.array.forEach(element => {
                                    chaine += 
                                     " "+x.nom+
                                     " "+x.val +"/n";
                                });
                                message.channel.send(chaine);
                            })
                            break;
                        //show player
                        case "player":
                            let promesse =membreDao.getMembreByPs(message.author.id);
                            promesse.then(x =>{
                                let chaine;
                                x.array.forEach(element => {
                                    chaine += 
                                     " "+x.login+
                                     "/n";
                                });
                                message.channel.send(chaine);
                            })
                               
                            break;
                        // show objet
                        case "objet":
                            let promesse = objetDao.querry();
                            let chaine;

                            promesse.then(x =>{
                                x.forEach(element => {
                                 chaine +=
                                 " "+x.nom+
                                 " "+x.val+
                                 "/n";   
                                });
                                message.channel.send(chaine);
                            });
                            break;
                        default:
                            message.channel.send("Argument n'est pas dans la liste ");
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
