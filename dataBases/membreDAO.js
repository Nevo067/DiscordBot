const fetch = require('node-fetch');

class MembreDao
{
     constructor()
     {
        this.fetch = require('node-fetch');
     }
     //return membre on the database on form a promesse
     getMembre()
     {
         console.log("je suis appeller")
        return this.fetch('http://localhost/backEndNutsBots/')
        .then(res =>  res.text())
        //.then(cs => console.log(cs))
        .then(function(result)
        {
            console.log(result);
            return result;
        });

     }
}
module.exports = {
    MembreDao : MembreDao
}