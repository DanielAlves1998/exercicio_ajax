//aqui é o mesmo código que o de cima máo com o JQUERY
$(document).ready(function() {
    //aqui 
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        //essa const é para fazer funcionar o código para desaparecer o icone de carregamento
        const botao = $(this);
        //aqui é um fiden para procurar o elemento, e qundo clicar na lupa vai aparecer o icone de carregamneto
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

    //aqui vou começar a configurar com o FETCH API
        fetch(endpoint)
        .then(function(resposta) {
            return resposta.json()
        })

        .then(function(json) {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco)
        })
        .catch(function(erro) {
            alert("ocorreu um erro")
        })
        
        
        
        .finally(function() {
            setTimeout(function() {
                //aqui é para fazer a mesma coisa do que la em cima, só que ao contrário
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        })
    })
    $('#formulario-pedido').submit(function(evento) {
        evento.preventDefault();

        if ($('#nome').val().length ==0) {
            throw new error('digite um nome'); //o throw significa lançar
        }
    })
})