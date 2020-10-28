class ObjetDao
{
    constructor()
    {
         this.fetch = require('node-fetch');
    }
    
    
    querry()
    {
        let url ="";
        return this.fetch(url)
        .then(res => res.json)
        .then(result => {return result;})
    }
    postObject(object,val)
    {
        let url ="";
        let body ={

            "val":val,
        };
        let header = {
            "Content-type":"json/application"
        }

        return this.fetch(url,{
            method:"POST",
            headers:header,
            body:body})
    }
    
}
module.exports = {
    ObjetDao : ObjetDao
}