const fetch = require('node-fetch');
const FormData = require('form-data');

class JdrDao
{
    constructor()
    {
        this.fetch = require('node-fetch');
    }
    getJdr()
    {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;  
        console.log("je suis appeller")
        return this.fetch('https://localhost:5001/api/jdr')
        .then(res =>  res.json())
        //.then(cs => console.log(cs))
        .then(function(result)
        {
            console.log(result);
            return result;
        });
    }

    postsJdr(nom)
    {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;  
        let url ="https://localhost:5001/api/jdr";
        let bodys ={
            "nom":nom,
        };
        let header = {
            "Content-Type":"application/json"
        }
       return this.fetch('https://localhost:5001/api/jdr',{method:'POST',body:JSON.stringify(bodys),headers:header})
        .then((res) =>{
           return res.text();
        })
        .then((json)=>{
            console.log(json);
        })
    }
    
    
}
module.exports = {
    JdrDao : JdrDao
}