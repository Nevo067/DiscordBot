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

    postJdr(nom)
    {
       const form = new FormData();
       form.append('nom', nom);
       const options = {
           method: 'POST',
           body: form,
           headers: form.getHeaders()
       }
       return this.fetch('http://localhost/backEndNutsBots/index.php/api/jdr',{method:'POST',body:form})
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