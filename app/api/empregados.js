
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


module.exports = api;
