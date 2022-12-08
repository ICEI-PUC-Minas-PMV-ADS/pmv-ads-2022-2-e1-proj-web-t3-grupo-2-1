//Redireciona para a tela de alteração de senha.
function user() {
    document.location.href = 'alterar_senha.html'
}

//Desloga o usuário
function sair() {
    let confirmacao = confirm('Deseja realmente sair?');
    if (confirmacao == true) {
        document.location.href = 'login.html'
    }
}
