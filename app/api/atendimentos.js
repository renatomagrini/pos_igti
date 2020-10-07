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

api.pacEmpAtendimentos= function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	
	console.log(req.params.idP)
	console.log(req.params.idE)
	
	fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){	
		let json = JSON.parse(data);
		let atendimento = json.filter(atendimento => atendimento.idPaciente == req.params.idP && atendimento.idEmpregado == req.params.idE)
		res.send(atendimento)			
	})
};

api.empAtendimentos= function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	
	console.log(req.params.idE)
	
	fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){	
		let json = JSON.parse(data);
		let atendimento = json.filter(atendimento => atendimento.idEmpregado == req.params.idE)
		res.send(atendimento)		

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
