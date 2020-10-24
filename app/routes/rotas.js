 module.exports = function(app) {

	//let api = app.api.pacientes;

	app.route('/pacientes/')
		.get(app.api.pacientes.pacientes);

		app.route('/')
		.get(function(req, res, next){
			res.sendStatus(200);
	});
	
	app.route('/pacientes/:id')
		.get(app.api.pacientes._idPaciente);

	app.route('/pacientes_emp/:id')
		.get(app.api.pacientes._idEmpregado);

 	app.route('/empregados/')
		 .get(app.api.empregados.empregados);
		 
	app.route('/atendimentos/')
		 .get(app.api.atendimentos.atendimentos);

	app.route('/atendimento_pac_emp/:idP/:idE')
		 .get(app.api.atendimentos.pacEmpAtendimentos);

	app.route('/atendimento_emp/:idE')
		 .get(app.api.atendimentos.empAtendimentos);
		 
	app.route('/cadastro_paciente/:id')
		 .get(app.api.pacientes.dataPacientes);


	 app.route('/novo_atendimento/')
		 .post(app.api.atendimentos.novoatendimento);

     app.route('/login/')
		 .post(app.api.login.login);


};
