//Função que confere se as senhas digitadas são iguais.
function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]');

    if (confirma.value === senha.value) {
        confirma.setCustomValidity('');
        senhaOK();
        sair();
        
    } else {
        confirma.setCustomValidity('As senhas não conferem');

    }
}

//Função que gera um alerta e redireciona se todos os campos foram preenchidos corretamente.
function senhaOK() {
    alert("Senha redefinida com sucesso!")
}
//Função que retorna para a tela de login
function sair() {
    document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/login.html'; 
}