const {JdrDao} = require("../dataBases/jdrDao");
const { MembreDao } = require("../dataBases/membreDAO");
const {ObjetDao} = require('../dataBases/objetDao');
const {CharaDao} = require('../dataBases/charaDao');
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
    let verif = new verifRecu(6);
    //Dao of jdr
    let jdrDao = new JdrDao();
    //Dao of member
    let membreDao = new MembreDao();
    //Dao of objet
    let objetDao = new ObjetDao();

    let charaDao = new CharaDao();
    
    let promesse ="";
    if(verif.IsBetweenMaxArgs(args))
    {
        switch (args[0]) {
            case "show":
                    switch (args[1]) {
                        //Show jdr
                        case "jdr":
                            promesse = jdrDao.getJdr();
                            promesse.then(x =>{
                                let chaine ="";
                                x.forEach(element => {
                                    //console.log(element);
                                    chaine += 
                                     " "+element.id+
                                     " "+element.nom+
                                     " " +"\n";
                                });
                                message.channel.send(chaine);
                            })
                            break;
                        //show player
                        case "member":
                            promesse =membreDao.getMembres();
                            promesse.then(x =>{
                                let chaine ="";
                                x.forEach(element => {
                                    chaine += 
                                     " "+element.login+
                                     "\n";
                                });
                                message.channel.send(chaine);
                            })
                               
                            break;
                        // show objet
                        case "objet":
                            promesse = objetDao.querry();
                            promesse.then(t =>{
                                console.log(t);
                                let chaine = "";
                                console.log(Object.keys(t));
                                t.forEach(element => {
                                    chaine += 
                                     " "+element.objetId+
                                     " "+element.nom+
                                     " "+element.val+
                                     " "+element.CharaId+
                                     "\n";
                                });
                                message.channel.send(chaine);
                                
                            });
                            break;
                        case "chara":
                            promesse = charaDao.getChara();
                            promesse.then(x => {
                                x.forEach(element => {
                                    chaine +=
                                    " "+x.nom+
                                    " "+x.val+
                                    " "+x.MembredId+
                                    "\n";   
                                   });
                                   message.channel.send(chaine);
                            })
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
                        jdrDao.postsJdr(args[1])
                        .then(message.channel.send("Votre jdr a été creer"))
                        break;
                    case "member":
                        console.log(message.author.id);
                        membreDao.postMembres(args[2],message.author.id)
                        .then(message.channel.send("votre membre a été ajouter")
                        .catch(e=>{
                            console.log(e)
                        }));
                        break;
                    case "objet":
                        console.log("cdx")
                        objetDao.postObject(args[2],args[3],args[4])
                        .then(message.channel.send("Votre objet est ajouter")
                        .catch(e=>{
                            console.log(e)
                        })
                        );
                        break;
                    case "chara":
                        promesse = charaDao.postChara(args[2],args[3],args[4])
                        console.log(promesse)
                        promesse.then(message.channel.send("Votre charatere est ajouter"));
                        break;
                    default:
                        message.channel.send("L'argument n'est pas dans la liste");
                        break;
                }
                break;
            default:
                break;
        }
    }
}
