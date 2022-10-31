//Função de pesquisa do CEP
$("#cep").blur(function () {
    var cep = this.value;

    if (cep.length != 8) {
        return false;
    }

    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    $.getJSON(url, function (dadosRetorno) {
        try {
            $("#endereco").val(dadosRetorno.logradouro);
            $("#bairro").val(dadosRetorno.bairro);
            $("#cidade").val(dadosRetorno.localidade);
            $("#estado").val(dadosRetorno.uf);
        } catch (ex) { }
    });
});
//Fim da função de pesquisa do CEP


//Classe do objeto Clientes
class Clientes {

    constructor() {
        this.id = 1;
        this.listaClientes = []; //Criacao do ARRAY
    }

    salvar() {
        var clientes = this.lerDados();
        if (this.validacao(clientes)) {
            this.adicionar(clientes);
        }
        console.log(this.listaClientes);
    }

    adicionar(clientes) {
        this.listaClientes.push(clientes); /*Os dados contidos no objeto clientes são 
                                             adicionados ao ARRAY por meio do método push*/
        this.id++;
    }

    //Metodo que ira ler os dados dos inputs
    lerDados() {
        var clientes = {}; //Variavel objeto para receber os parametros

        //Adicionando valores digitados ao objeto
        clientes.id = this.id;
        clientes.nome = document.getElementById("nome").value;
        clientes.cpf = document.getElementById("cpf").value;
        clientes.email = document.getElementById("email").value;
        clientes.telefone = document.getElementById("telefone").value;
        clientes.dataNascimento = document.getElementById("dataNascimento").value;
        clientes.sexo = document.getElementById("sexo").value;
        clientes.endereco = document.getElementById("endereco").value;
        clientes.bairro = document.getElementById("bairro").value;
        clientes.cidade = document.getElementById("cidade").value;
        clientes.estado = document.getElementById("estado").value;

        return clientes; //Retorna os valores do objeto Produto

    }

    validacao(clientes) { //Funcao que ira validar se os campos obrigatórios foram preenchidos 
        var mensagem = "";
        if (clientes.nome == "") {
            mensagem += " - Digite o nome! \n"
        }
        if (clientes.cpf == "") {
            mensagem += " - Digite o CPF! \n"
        }
        if (clientes.dataNascimento == "") {
            mensagem += " - Digite a data de nascimento \n"
        }
        if (mensagem != "") {
            alert(mensagem);
            return false;
        }

        return true;
    }
}

var clientes = new Clientes(); //Criação do Objeto Clientes



