//Função que confere se as senhas digitadas são iguais e redireciona para a tela inicial.
function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]');

    if (confirma.value === senha.value) {
        confirma.setCustomValidity('');
        senhaOK();
        document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/tela_inicial.html';

    } else {
        confirma.setCustomValidity('As senhas não conferem');

    }
}

//Função que gera um alerta de senha redefinida
function senhaOK() {
    alert("Senha redefinida com sucesso!")
}

//Função que cancela a operação e redireciona para a tela inicial
function sair() {
    document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/tela_inicial.html';
}