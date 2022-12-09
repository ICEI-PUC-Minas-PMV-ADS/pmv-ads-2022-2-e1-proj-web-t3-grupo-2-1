//Valida os campos digitados
function validacao() {
    const email = document.querySelector('input[id=email]');
    const cpfCnpj = document.querySelector('input[id=cpf_cnpj]');

    if (email.value === 'radix@radix.com.br' && cpfCnpj.value === '12345678912' ||
        email.value === 'radix@radix.com.br' && cpfCnpj.value === '12345678912345') {
        cpfCnpj.setCustomValidity('');
        
        sair();
    } else {
        cpfCnpj.setCustomValidity('Email ou CPF/CNPJ não encontrado!');
    }

}

//Alerta em caso de sucesso
function dadosOk() {
    alert('Foi enviado as orientações de reset de senha para o e-mail cadastrado');
}

//Retorna para a tela de login
function sair() {
    document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/login.html';
}