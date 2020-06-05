let api = {};

var pacientes
 = [
	{_idPaciente: 0, nome:'Carla .',idade: 15, endereco:'Rua 1 avenida' },
	{_idPaciente: 1, nome:'Ademr', idade: 22, endereco:'Rua 2 avenida' },
	{_idPaciente: 2, nome:'João', idade: 15, endereco:'Rua 3 avenida' },
	{_idPaciente: 3, nome:'Pedro', idade: 19, endereco:'Rua 4 avenida' },
	{_idPaciente: 4, nome:'Vitor', idade : 35, endereco:'Rua 5 avenida' },
	{_idPaciente: 5, nome:'Bruno', idade: 45, endereco:'Rua 6 avenida' },
	{_idPaciente: 6, nome:'Tiago', idade: 42, endereco:'Rua 7 avenida' },
	{_idPaciente: 7, nome:'Pedro 2',idade: 40, endereco:'Rua 8 avenida' },
	{_idPaciente: 8, nome:'Caio', idade: 47, endereco:'Rua 9 avenida'},
	{_idPaciente: 9, nome:'Cristina', idade: 40, endereco:'Rua 11 avenida'},	
	{_idPaciente: 10, nome:'Cristina', idade: 40, endereco:'Rua 11 avenida'},	
  ];


api.pacientes = function(req, res) {
	setTimeout(function(){
		if(req.query.id) return res.json(pacientes[req.query.id]);
		res.json(pacientes);
	},1500);
};

api._idPaciente = function(req,res,next){
	console.log('ID:', req.params.id); 
 	const busca =buscaPaciente(req.params.id)	
 	res.send(busca);
};

function buscaPaciente(id){
		for(var i = 0; i < pacientes.length ; i++){
			if(id == pacientes[id]._idPaciente)
				pacienteRetorno = pacientes[id]
				break
		}
	return pacienteRetorno		
}


module.exports = api;
