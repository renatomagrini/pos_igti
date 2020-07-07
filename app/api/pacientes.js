const cors = require('cors');
var fs = require('fs');
let api = {};
var dataAtual = require('../helpers/dataAtual')




api.pacientes = function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	fs.readFile("cadPacientes.json","utf-8",function(err,data){			
			setTimeout(function(){
				if(req.query.id) return res.json(data[req.query.id]);
		
				res.json(JSON.parse(data));
			},1500);			
		})
};

api._idPaciente = function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	fs.readFile("cadPacientes.json","utf-8",function(err,data){	
		let json = JSON.parse(data);
		let paciente = json.find(paciente => paciente.idPaciente == req.params.id)
		res.send(paciente);
	})
};

api.newpacientes = function(req, res) {
	console.log(req.body)
}

api.dataPacientes =  function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	fs.readFile("dataPacientes.json","utf-8",function(err,data){	
		let json = JSON.parse(data);
		let paciente = json.find(paciente => paciente.idPaciente == req.params.id)
		res.send(paciente);
		console.log(dataAtual())


	})
}


module.exports = api;
