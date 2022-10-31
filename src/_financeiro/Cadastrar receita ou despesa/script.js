//Criação da classe despesas
class Financeiro {

    constructor() { //Método construtor
        this.receita = []; //Criação do ARRAY de armazenamento
        this.despesa = [];
    }

    salvar() {
        var receita = this.lerDados();
        var despesa = this.lerDados();
        
        if (document.getElementById("tipo").value == "Receita") {
            this.adicionarReceita(receita);
            console.log(receita);
            

        } else if (document.getElementById("tipo").value == "Despesa") {
            this.adicionarDespesa(despesa);
            console.log(despesa);
            
        } 
    }

    adicionarReceita(receita) {
        this.receita.push(receita);
    }

    adicionarDespesa(despesa) {
        this.despesa.push(despesa);
    }

    //Método que irá ler os dados digitados
    lerDados() {
         //Variavel objeto para receber os parametros  
         var receita = {};
         var despesa = {};  
        if (document.getElementById("tipo").value == "Receita") {
                    
            receita.tipo = document.getElementById("tipo").value;
            receita.data = document.getElementById("dpgto").value;
            receita.valor = document.getElementById("valor").value;
            receita.formaPagamento = document.getElementById("fpgto").value;

            return receita;

        } else if (document.getElementById("tipo").value == "Despesa") {    
                   
            despesa.tipo = document.getElementById("tipo").value;
            despesa.data = document.getElementById("dpgto").value;
            despesa.valor = document.getElementById("valor").value;
            despesa.formaPagamento = document.getElementById("fpgto").value;

            return despesa;
        }
    }

}

var financeiro = new Financeiro();

