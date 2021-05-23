
function pesquisar() {
    let cep = document.getElementById('cep').value;

    if (cep.length==8) {
        alert("Pesquisa efetuada com sucesso!");
    } else {
        alert("Erro ao carregar");
    }
}