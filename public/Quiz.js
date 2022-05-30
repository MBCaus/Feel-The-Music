var estilos = ["Rock", "Funk", "Sertanejo"];

var rock = 0,
    funk = 0,
    sertanejo = 0,
    contador = 0;

function iniQuiz() {
    iniJogo.style.display = "none";
    parte1.style.display = "block";
    msg.style.display = "block";

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`
}

// Parte 1

function rock1() {
    parte1.style.display = "none";
    parte2.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    rock += + 1;
}

function funk1() {
    parte1.style.display = "none";
    parte2.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    funk += + 1;
}

function sertanejo1() {
    parte1.style.display = "none";
    parte2.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    sertanejo += + 1;
}

// Fim da Parte 1

// Parte 2

function rock2() {
    parte2.style.display = "none";
    parte3.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    rock += + 1;
}

function funk2() {
    parte2.style.display = "none";
    parte3.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    funk += + 1;
}

function sertanejo2() {
    parte2.style.display = "none";
    parte3.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    sertanejo += + 1;
}

// Fim da parte 2

// Parte 3

function rock3() {
    parte3.style.display = "none";
    parte4.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    rock += + 1;
}

function funk3() {
    parte3.style.display = "none";
    parte4.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    funk += + 1;
}

function sertanejo3() {
    parte3.style.display = "none";
    parte4.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    sertanejo += + 1;
}

// Fim da parte 3

// Parte 4

function rock4() {
    parte4.style.display = "none";
    parte5.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    rock += + 1;
}

function funk4() {
    parte4.style.display = "none";
    parte5.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    funk += + 1;
}

function sertanejo4() {
    parte4.style.display = "none";
    parte5.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    sertanejo += + 1;
}

// Fim da parte 4

// Parte 5

function rock5() {
    parte5.style.display = "none";
    parte6.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    rock += + 1;
}

function funk5() {
    parte5.style.display = "none";
    parte6.style.display = "block";
    
    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    funk += + 1;
}

function sertanejo5() {
    parte5.style.display = "none";
    parte6.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    sertanejo += +1;
}

// Fim da parte 5

// Parte 6

function rock6() {
    parte6.style.display = "none";
    parte7.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    rock += + 1;
}

function funk6() {
    parte6.style.display = "none";
    parte7.style.display = "block";
    
    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    funk += + 1;
}

function sertanejo6() {
    parte6.style.display = "none";
    parte7.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    sertanejo += +1;
}

// Fim da parte 6

// Parte 7

function rock7() {
    parte7.style.display = "none";
    parte8.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    rock += + 1;
}

function funk7() {
    parte7.style.display = "none";
    parte8.style.display = "block";
    
    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    funk += + 1;
}

function sertanejo7() {
    parte7.style.display = "none";
    parte8.style.display = "block";

    contador += + 1;

    msg.innerHTML = `Quantidade de Perguntas: 8 <br> Perguntas respondidas: ${contador}`

    sertanejo += +1;
}

// Fim da parte 7

// Parte 8

function rock8() {
    contador = 0;

    parte8.style.display = "none";
    msg.style.display = "none";
    fim.style.display = "block";

    if(rock > funk && rock > sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Rock.html">${estilos[0]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Rock.html">${estilos[0]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Rock.html">${estilos[0]}</a>.`
    } else if(funk > rock && funk > sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Funk.html">${estilos[1]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Funk.html">${estilos[1]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Funk.html">${estilos[1]}</a>.`
    } else if(sertanejo > rock && sertanejo > funk) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Sertanejo.html">${estilos[2]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Sertanejo.html">${estilos[2]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Sertanejo.html">${estilos[2]}</a>.`
    } else if(rock == funk || rock == sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Rock.html">${estilos[0]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Rock.html">${estilos[0]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Rock.html">${estilos[0]}</a>.`
    } else if(funk == rock || funk == sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Funk.html">${estilos[1]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Funk.html">${estilos[1]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Funk.html">${estilos[1]}</a>.`
    } else if(sertanejo == rock || sertanejo == funk) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Sertanejo.html">${estilos[2]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Sertanejo.html">${estilos[2]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Sertanejo.html">${estilos[2]}</a>.`
    }

}

function funk8() {
    contador = 0;

    parte8.style.display = "none";
    msg.style.display = "none";
    fim.style.display = "block";

    if(rock > funk && rock > sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Rock.html">${estilos[0]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Rock.html">${estilos[0]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Rock.html">${estilos[0]}</a>.`
    } else if(funk > rock && funk > sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Funk.html">${estilos[1]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Funk.html">${estilos[1]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Funk.html">${estilos[1]}</a>.`
    } else if(sertanejo > rock && sertanejo > funk) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Sertanejo.html">${estilos[2]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Sertanejo.html">${estilos[2]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Sertanejo.html">${estilos[2]}</a>.`
    } else if(rock == funk || rock == sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Rock.html">${estilos[0]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Rock.html">${estilos[0]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Rock.html">${estilos[0]}</a>.`
    } else if(funk == rock || funk == sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Funk.html">${estilos[1]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Funk.html">${estilos[1]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Funk.html">${estilos[1]}</a>.`
    } else if(sertanejo == rock || sertanejo == funk) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Sertanejo.html">${estilos[2]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Sertanejo.html">${estilos[2]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Sertanejo.html">${estilos[2]}</a>.`
    }

}

function sertanejo8() {
    contador = 0;

    parte8.style.display = "none";
    msg.style.display = "none";
    fim.style.display = "block";
    
    if(rock > funk && rock > sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Rock.html">${estilos[0]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Rock.html">${estilos[0]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Rock.html">${estilos[0]}</a>.`
    } else if(funk > rock && funk > sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Funk.html">${estilos[1]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Funk.html">${estilos[1]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Funk.html">${estilos[1]}</a>.`
    } else if(sertanejo > rock && sertanejo > funk) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Sertanejo.html">${estilos[2]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Sertanejo.html">${estilos[2]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Sertanejo.html">${estilos[2]}</a>.`
    } else if(rock == funk || rock == sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Rock.html">${estilos[0]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Rock.html">${estilos[0]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Rock.html">${estilos[0]}</a>.`
    } else if(funk == rock || funk == sertanejo) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Funk.html">${estilos[1]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Funk.html">${estilos[1]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Funk.html">${estilos[1]}</a>.`
    } else if(sertanejo == rock || sertanejo == funk) {
        span_inc2.innerHTML = `Seu estilo músical é: <a href="Sertanejo.html">${estilos[2]}</a> <br> <br> <br> <br>
        Caso queira saber mais sobre o estilo músical <a href="Sertanejo.html">${estilos[2]}</a>, 
        clique na palavra e seja redirecionado a uma página 
        com a história do <a href="Sertanejo.html">${estilos[2]}</a>.`
    }
}

// Fim da parte 8

// Jogar novamente

function jogar_denovo() {
    rock = 0;
    funk = 0;
    sertanejo = 0;

    fim.style.display = "none";
    genero1.style.display = "none";
    iniJogo.style.display = "block";
}

// Fim do Jogar novamente

// Inicio do cadastro de novos gêneros

function novo_cadastro() {
    fim.style.display = "none";
    genero1.style.display = "block";
}

function cadastrar() {
    var genero = ipt_genero.value,
        descricao = ipt_descricao_genero.value;

    if(genero == "" || descricao == "") {
        alert("Nenhum campo deve estar vazio na hora do cadastro, por favor, preencha corretamente os campos.")
    } else {

    }
}

// Fim do Cadastro de novos gêneros