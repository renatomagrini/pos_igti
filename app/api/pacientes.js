var fs = require('fs');
let api = {};




api.pacientes = function(req, res) {
	fs.readFile("cadPacientes.json","utf-8",function(err,data){			
			setTimeout(function(){
				if(req.query.id) return res.json(data[req.query.id]);
		
				res.json(JSON.parse(data));
			},1500);			
		})
};

api._idPaciente = function(req,res,next){
	fs.readFile("cadPacientes.json","utf-8",function(err,data){	
		let json = JSON.parse(data);
		let paciente = json.find(paciente => paciente.idPaciente == req.params.id)
		res.send(paciente);
	})
 	
};

api.newpacientes = function(req, res) {
	console.log(req.body)
}



module.exports = api;
