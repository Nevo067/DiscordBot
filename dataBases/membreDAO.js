const fetch = require('node-fetch');
const FormData = require('form-data');

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
}
module.exports = {
    MembreDao : MembreDao
}