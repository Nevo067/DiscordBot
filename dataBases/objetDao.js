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
        .then(res => res.json())
        .then(result =>{
            return result;
        })
        .catch(e=>{
            console.log(e);
        });
    }
    postObject(object,val,charaId)
    {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 
        let url ="https://localhost:5001/api/objet";
        let body ={
            "nom":object,
            "val":val,
            "CharaId":charaId
        };
        let header = {
            "Content-Type":"application/json"
        }

        return this.fetch(url,{
            method:"POST",
            headers:header,
            body:body})
            .then(res => res.text);
    }
    
}
module.exports = {
    ObjetDao : ObjetDao
}