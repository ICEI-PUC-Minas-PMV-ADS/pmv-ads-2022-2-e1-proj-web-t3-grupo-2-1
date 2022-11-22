//Função de pesquisa do CEP
$("#cep").blur(function () {
  var cep = this.value;

  if (cep.length != 8) {
      return false;
  }

  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  $.getJSON(url, function (dadosRetorno) {
      try {
          $("#m-endereco").val(dadosRetorno.logradouro);
          $("#m-bairro").val(dadosRetorno.bairro);
          $("#m-cidade").val(dadosRetorno.localidade);
          $("#m-estado").val(dadosRetorno.uf);
      } catch (ex) { }
  });
});
//Fim da função de pesquisa do CEP

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const semail = document.querySelector('#m-email')
const stelefone = document.querySelector('#m-telefone')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    semail.value = itens[index].email
    stelefone.value = itens[index].telefone
    id = index
    
  } else {
    sNome.value = ''
    semail.value = ''
    stelefone.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.email}</td>
    <td>${item.telefone}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || semail.value == '' || stelefone.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].email = semail.value
    itens[id].telefone = stelefone.value
  } else {
    itens.push({'nome': sNome.value, 'email': semail.value, 'telefone': stelefone.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
