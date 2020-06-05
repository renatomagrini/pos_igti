const validaLogin = require('../model/validaLogin');

let api = {};

var empregados
 = [
    {_idEmpregado: 0, nome:'Dr. Renato .',login :'renato', password: 1234 },
	{_idEmpregado: 1, nome:'Dr. Valdir', login :'valdir', password: 1234  },
	{_idEmpregado: 2, nome:'Dr. Aparecida', login :'aparecida', password: 1234  },
	{_idEmpregado: 3, nome:'Dr Leo', login :'leo', password: 1234  }
	];

api.empregados = function(req, res) {

	setTimeout(function(){
        if(req.query.id) return res.json(empregados[req.query.id]);
        
		res.json(empregados);
	},1500);

};

api.login = () =>{
    console.log('estou na tela de login')
}




module.exports = api;
