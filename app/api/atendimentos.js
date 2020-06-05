let api = {};

var atendimentos
 = [
    {_idEmpregado: 0, _idPaciente: 1,historico:'foi realizado um atendimento x y e z', dataAtendimento: '17/05/2020' },
    {_idEmpregado: 2, _idPaciente: 3,historico:'foi realizado um atendimento x y e z', dataAtendimento: '10/05/2020' },
	];

api.atendimentos = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(atendimentos[req.query.id]);

		res.json(atendimentos);
	},1500);

};

module.exports = api;
