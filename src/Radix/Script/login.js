function entrar() {
    var usuario = document.getElementById('cnpj_cpf').value;
    var senha = document.getElementById('senha').value;

    if (usuario === '12345678912' && senha === '123456' || usuario === '12345678912345' && senha === '123456') {
        alert('Login efetuado com sucesso!')
        document.location.href = 'tela_inicial.html';
    } else {
        alert ('Usuário não cadastrado')
        document.getElementById('cnpj_cpf').value = '';
        document.getElementById('senha').value = '';
    }
}