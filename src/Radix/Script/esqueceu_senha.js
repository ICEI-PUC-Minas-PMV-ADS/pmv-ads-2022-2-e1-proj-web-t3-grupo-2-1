//Função que valida se os campos digitados estão corretos.
function validacaoOK() {
    var email = document.getElementById('email');
    var cpf_cnpj = document.getElementById('cpf_cnpj');

    if (email.value === 'radix@radix.com.br' && cpf_cnpj.value === '12345678912'|| email.value === 'radix@radix.com.br' && cpf_cnpj.value === '12345678912345' ) {
        alert('E-mail de refinição enviado com sucesso!');
        document.location.href = 'http://www.google.com.br';
               
    } else { 
        alert('E-mail ou CPF/CNPJ não encontrados!')
        document.getElementById('email').value = '';
        document.getElementById('cpf_cnpj').value = '';
    }
}

//Função que retorna para a tela de login
function sair() {
    document.location.href = 'http://www.google.com.br'; //Tela de login
}