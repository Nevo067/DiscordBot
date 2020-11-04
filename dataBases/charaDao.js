const fetch = require('node-fetch');

class CharaDao
{
    constructor()
    {
        this.fetch = require('node-fetch');
    }
    getChara()
    {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 
        return this.fetch("https://localhost:5001/api/chara")
        .then(res => res.json)
        .then(x => console.log(x))
        .then(resul => {return resul})
    }
    postChara(nom,membreId,jdrId)
    {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 
        let header ={
            'Content-type':'application/json'
        }
        let bodys ={
            "nom":nom,
            "MembreId":parseInt(membreId),
            "JdrId":parseInt(jdrId)
        }
        console.log(bodys);
        console.log(JSON.stringify(bodys))
        return this.fetch("https://localhost:5001/api/chara",
        {method:'POST',body:JSON.stringify(bodys),headers:header}
        )
        .then(console.log("txxxxxxxt"));
        
        
    }
}
module.exports ={
    CharaDao:CharaDao
}
