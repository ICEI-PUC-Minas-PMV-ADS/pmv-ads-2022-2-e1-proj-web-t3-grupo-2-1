//Valida se os campos digitados estão corretos e retorna para a tela de login
function validacaoOK() {
    var email = document.getElementById('email');
    var cpf_cnpj = document.getElementById('cpf_cnpj');

    if (email.value === 'radix@radix.com.br' && cpf_cnpj.value === '12345678912' || email.value === 'radix@radix.com.br' && cpf_cnpj.value === '12345678912345') {
        redefinicaoOK();
        sair();

    } else {
        alert('E-mail ou CPF/CNPJ não encontrados!')
        document.getElementById('email').value = '';
        document.getElementById('cpf_cnpj').value = '';
    }
}

function redefinicaoOK() {
    alert('E-mail de refinição enviado com sucesso!');
}

//Retorna para a tela de login
function sair() {
    document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/login.html';
}