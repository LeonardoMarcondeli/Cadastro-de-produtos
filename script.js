// Objeto para armazenar os produtos cadastrados
let produtosCadastrados = {};

document.getElementById("formularioDeCadastro").addEventListener("submit", function(event) {
  event.preventDefault(); // Impedir o comportamento padrão do formulário de recarregar a página

  // Capturar os dados do formulário
  const produto = {
    codigo: document.getElementById("codigoProduto").value,
    descricao: document.getElementById("descricaoProduto").value,
    unidade: document.getElementById("unidadeMedida").value,
    preco: document.getElementById("precoAquisicao").value,
    fabricante: document.getElementById("fabricante").value,
    departamento: document.getElementById("departamento").value,
    data: document.getElementById("dataCadastro").value
  };

  // Verificar duplicidade de código
  if (produto.codigo in produtosCadastrados) {
    alert("Código do produto já existe. Por favor, insira um código diferente.");
    return; // Interrompe a execução do restante do código se encontrar duplicidade
  }

  // Armazena o produto no objeto de produtos cadastrados
  produtosCadastrados[produto.codigo] = produto;

  // Criar uma nova linha na tabela
  const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();

  // Inserir os dados na nova linha da tabela
  Object.values(produto).forEach((valor, indice) => {
    let celula = novaLinha.insertCell(indice);
    celula.innerHTML = valor;
  });

  // Limpar os campos do formulário após a inserção
  document.getElementById("codigoProduto").value = "";
  document.getElementById("descricaoProduto").value = "";
  document.getElementById("unidadeMedida").value = "";
  document.getElementById("precoAquisicao").value = "";
  document.getElementById("fabricante").value = "";
  document.getElementById("departamento").value = "";
  document.getElementById("dataCadastro").value = "";
});
