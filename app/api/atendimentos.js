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
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "	Origin, X-Requested-With, Content-Type, Accept");

	let dados = req.body;

	let idPaciente = req.body.idPaciente
	let idEmpregado = req.body.idEmpregado
	let evolucao = req.body.evolucao
	let resumo = req.body.resumo
	let atendimento = req.body.atendimento
	let proximoAtendimento = req.body.proximoAtendimento
	let dataAtual = now.getDay() + "/" + now.getMonth() + "/" + now.getFullYear() 

	delete dados.proximoAtendimento
	dados.dataAtendimento = dataAtual

	console.log(dados)




//salva novo atendimento
fs.readFile("atendimentosPacientes.json","utf-8",function(err,data){	
	let json = JSON.parse(data);
	json.push(dados)
	//console.log(json)
	newJson =  JSON.stringify(json);


	
	fs.writeFile('atendimentosPacientes.json', newJson,'utf8',function(err) {
    if (err) throw err;
    console.log('complete');
    }
	);

	
})

//salva dados em outras tabelas
fs.readFile("cadPacientes.json","utf-8",function(err,data){	
	let json = JSON.parse(data);
	let paciente = json.find(paciente => paciente.idPaciente == req.body.idPaciente)
	let id = paciente.idPaciente
	json[id].ultimoAtendimento=dataAtual;
	json[id].proximoAtendimento=proximoAtendimento;
	json[id].evolucao=evolucao;

	newJson =  JSON.stringify(json);

		
	fs.writeFile('cadPacientes.json', newJson,'utf8',function(err) {
    if (err) throw err;
    console.log('complete');
    }
	);
		
	
})

	res.send("ok");



}

module.exports = api;
