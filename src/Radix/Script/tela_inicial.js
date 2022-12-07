//Redireciona para a tela de alteração de senha.
function user() {
    document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/alterar_senha.html'
}

//Desloga o usuário
function sair() {
    let confirmacao = confirm('Deseja realmente sair?');
    if (confirmacao == true) {
        document.location.href = 'https://marlloncas.github.io/pmv-ads-2022-2-e1-proj-web-t3-grupo-2-1/src/Radix/login.html'
    }
}
