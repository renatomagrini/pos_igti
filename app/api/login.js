var fs = require('fs');

let api = {};

api.login = (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "	Origin, X-Requested-With, Content-Type, Accept");

let username = req.body.username.toLowerCase()
let password = req.body.password

console.log(username)
console.log(password)


fs.readFile("cadEmpregados.json","utf-8",function(err,data){	
  let json = JSON.parse(data);
  let resp = json.find(resp => resp.login == username)

 if (resp == undefined){
    console.log("nao foi localizado")
    res.send('Usuario Incorreto')
    return
 }

 if(resp.password == password){    
    delete resp.password
    res.send(resp)
 }
 
 else res.send('Senha Incorreta')
})
    
}


module.exports = api;
