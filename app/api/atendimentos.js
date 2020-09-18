

var fs = require('fs');


let api = {};

api.atendimentos = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");

	fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){
			
			setTimeout(function(){
				if(req.query.id) return res.json(data[req.query.id]);
		
				res.json(JSON.parse(data));
			},1500);			
		})

};


api.novoatendimento = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	console.log(req.body)
	fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){
	let novo = data + req.body;
	res.json(novo);

	})


}

module.exports = api;
