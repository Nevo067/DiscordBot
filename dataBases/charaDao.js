class CharaDao
{
    constructor()
    {
        this.fetch = require('module');
    }
    getChara()
    {
        return this.fetch("https://localhost:5001/api/chara")
        .then(res => res.json)
        .then(x => console.log(x))
        .then(resul => {return resul})
    }
}
module.exports ={
    CharaDao:CharaDao
}
