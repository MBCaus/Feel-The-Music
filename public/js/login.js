
function entrar() {

    var nomeVar = ipt_nome.value;
    var senhaVar = ipt_senha.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (nomeVar == "" || senhaVar == "") {
        alert("Algum campo vazio, por favor, verifique novamente.");
        return false;
    }

    console.log("FORM LOGIN: ", nomeVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location = "../Principal.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            alert("Houve um erro ao tentar realizar o login, por favor, tente novamente mais tarde.");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function validarSessao() {

    var login = sessionStorage.LOGIN_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (login != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

    } else {
        window.location = "Index.html";
    }
}

function sair() {
    
    sessionStorage.clear();
    
    window.location = "Index.html";
}

// Registro 

function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = ipt_nome.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmacaoVar = ipt_confirmacao.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoVar == "") {
        alert("Algum campo vazio, por favor, verifique novamente.");
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        alert("Email invalido, insira um emaio valido para prosseguir.");
        return false;
    }

    if (senhaVar != confirmacaoVar) {
        alert("As senhas inseridas devem EXATAMENTE iguais, por favor, insira novamente.");
        return false;
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso.");
            window.location = "Index.html";
            limparFormulario();
        } else {
            alert("Houve um erro ao tentar Cadastrar, por favor, tente novamente mais tarde.");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function cadastrar_genero() {

    var generoVar = ipt_genero.value;
    var descricaoVar = ipt_descricao_genero.value;
    var userVar = sessionStorage.ID_USUARIO;

    if (generoVar == "" || descricaoVar == "") {

        alert("Preencha todos os campos!");
        return false;
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar_genero", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            generoServer: generoVar,
            descricaoServer: descricaoVar,
            userServer: userVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastrado com sucesso!");
            console.log("Cadastrado com sucesso!");

            ipt_genero.value = '';
            ipt_descricao_genero.value = '';
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}