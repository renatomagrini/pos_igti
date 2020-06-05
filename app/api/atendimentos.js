var fs = require('fs');

var novo;
let api = {};
 


var atendimentos
 = [
    {_idEmpregado: 0, _idPaciente: 1,historico:'foi realizado um atendimento x y e z', dataAtendimento: '17/05/2020' },
    {_idEmpregado: 2, _idPaciente: 3,historico:'foi realizado um atendimento x y e z', dataAtendimento: '10/05/2020' },
	];



api.atendimentos = function(req, res) {

	fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){
		
		setTimeout(function(){
			if(req.query.id) return res.json(data[req.query.id]);
	
			res.json(JSON.parse(data));
		},1500);
		
		
		})



};

module.exports = api;
