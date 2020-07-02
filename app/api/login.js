var fs = require('fs');

let api = {};

api.empregados = function(req, res) {

    fs.readFile("cadEmpregados.json","utf-8",function(err,data){

        setTimeout(function(){
            if(req.query.id) return res.json(data[req.query.id]);
            
            res.json(JSON.parse(data));
        },1500);
    })
};

api.login = (req, res) =>{
let username = req.body.username.toLowerCase()
let password = req.body.password

console.loh(username)
console.loh(password)


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
 }else res.send('Senha Incorreta')
})
    
}


module.exports = api;
