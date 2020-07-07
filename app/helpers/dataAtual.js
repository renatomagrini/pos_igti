now = new Date
dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado") 
monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")


dataAtual =  function(){

  return(now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear())
}

module.exports = dataAtual