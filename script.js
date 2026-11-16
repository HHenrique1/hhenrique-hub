function atualizarHorario(){

    const agora = new Date();

    const options = {
        dateStyle:'full',
        timeStyle:'medium'
    };

    document.getElementById("clock").innerHTML =
        agora.toLocaleString("pt-BR",options);
}

setInterval(atualizarHorario,1000);

atualizarHorario();
