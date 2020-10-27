const fetch = require('node-fetch');
const FormData = require('form-data');
const https = require("https");
const { debug } = require('console');



class MembreDao
{
     constructor()
     {
        this.fetch = require('node-fetch');
     }
     //return membre on the database on form a promesse
     /*
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
     */
     getMembre()
     {
         console.log("je suis appeller");
         const agent = new https.Agent({
            rejectUnauthorized: false,
          });
          process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;  
        return this.fetch('https://localhost:5001/api/membre',{ httpsAgent: agent })
        .then(res =>  res.json())
        //.then(cs => console.log(cs))
        .then(function(result)
        {
            console.log(result);
            return result;
        });

     }
     getMembreByPs(ps)
     {
        let url = "https://localhost:5001/api/membre/ps/"+ps;
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;  
        return this.fetch(url,{ httpsAgent: agent })
        .then(res =>  res.json())
        //.then(cs => console.log(cs))
        .then(function(result)
        {
            console.log(result);
            return result;
        });
     }
     postMembre(logins,pss)
     {
        const form = new FormData();
        form.append('login', logins);
        form.append('ps',pss);
        const options = {
            method: 'POST',
            body: form,
            headers: form.getHeaders()
        }
        return this.fetch('https://localhost:5001/api/membre',{method:'POST',body:form})
         .then((res) =>{
            return res.text();
         })
         .then((json)=>{
             console.log(json);
         })
     }
     postMembre(logins,pss)
     {
        const form = new FormData();
        form.append('login', logins);
        form.append('ps',pss);
        const options = {
            method: 'POST',
            body: form,
            headers: form.getHeaders()
        }
        return this.fetch('http://localhost/backEndNutsBots/index.php/api/membre',{method:'POST',body:form})
         .then((res) =>{
            return res.text();
         })
         .then((json)=>{
             console.log(json);
         })
     }

     postMembres(logins,pss)
     {
        const bodys = {
            "login":logins,
            "ps":pss
        }
        
        const headers = {
            'Content-Type': 'application/json' 
        }
        console.log(bodys);
        
       process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;  
        return this.fetch('https://localhost:5001/api/membre',{method:'POST',headers:headers,body:JSON.stringify(bodys)})
         .then((res) =>{
            return res.text();
         })
         .then((json)=>{
             console.log(json);
         })
     }
}
module.exports = {
    MembreDao : MembreDao
}