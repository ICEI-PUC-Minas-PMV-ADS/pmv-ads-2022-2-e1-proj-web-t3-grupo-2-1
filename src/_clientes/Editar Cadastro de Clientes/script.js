//Função de pesquisa do 
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

//Função para armazenar os dados digitados
function salvar() {

}

function cancelar() {

}