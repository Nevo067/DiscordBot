class ObjetDao
{
    constructor()
    {
         this.fetch = require('node-fetch');
    }
    
    
    querry()
    {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
        
        let url ="https://localhost:5001/api/objet";
        return this.fetch(url)
        .then(res => res.json)
        .then(result =>{
            return result;
        })
        .catch(e=>{
            console.log(e);
        });
    }
    postObject(object,val)
    {
        let url ="";
        let body ={
            "nom":nom,
            "val":val,
            "chara":{

            }
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