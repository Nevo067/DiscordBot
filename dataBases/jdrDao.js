const fetch = require('node-fetch');
const FormData = require('form-data');

class jdrDao
{
    constructor()
    {
        this.fetch = require('node-fetch');
    }
    getJdr()
    {
        console.log("je suis appeller")
        return this.fetch('http://localhost/backEndNutsBots/index.php/api/jdr')
        .then(res =>  res.text())
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