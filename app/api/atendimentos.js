

var fs = require('fs');


let api = {};

api.atendimentos = function(req, res) {

	fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){
			
			setTimeout(function(){
				if(req.query.id) return res.json(data[req.query.id]);
		
				res.json(JSON.parse(data));
			},1500);			
		})

};


api.novoatendimento = function(req, res) {
	console.log(req.body)
	fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){
	let novo = data + req.body;
	res.json(novo);

	})


}

module.exports = api;
