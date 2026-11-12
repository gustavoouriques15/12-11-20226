// const é para declarar uma variavel constante., ou seja, seus valores não seram trocados
// queryselector busca um elemento usando um selector CSS, no caso o id do formulario
const formulario = document.querySelector("#formulario");
function lerFormulario(evento) {
    return {
        codinome: formulario.querySelector("#codinome").value,
        nome: formulario.querySelector("#nome").value,
        sobrenome: formulario.querySelector("#sobrenome").value,
        idade: formulario.querySelector("#idade").value,  
        poder: formulario.querySelector("#poder").value,
        ingresso: formulario.querySelector("#ingresso").value,
        email: formulario.querySelector("#email").value
    }
}
// addEventListener é um método que adiciona um ouvinte de evento a um elemento, no caso o evento submit do formulario
formulario.addEventListener("submit", function(evento) {
    // preventDefault é um método que previne o comportamento padrão do evento, no caso o envio do formulario
    evento.preventDefault();
    const dados = lerFormulario(evento);
    console.log(dados);
    const dadosTratados = tratar(dados);
    console.log("Dados tratados:", dadosTratados);
});
// Imprime os dados do formulário no console do navegador

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    // split é um método que divide uma string em um array de substrings, no caso, divide a string em palavras
    // se o meu texto for "garota esquilo", o resultado vai ser um array com duas posições: ["garota", "esquilo"]
        const palavras = texto.trim().toLowerCase().split(" ");
        const resltado = [];
        // o for ...of é um laço de repetição que percorre cada elemento de um array, no caso, cada palavra do array palavras
        //ou seja, para cada palavra do array palavras, ele vai executar o bloco de código dentro do for
        for (const palavra of palavras) {
            resltado.push(capitalizar(palavra));
        }
        return resltado.join(" ");
}


 
function tratar(dados) {
    return {
        codinome: dados.codinome.toUpperCase(),
        nome: dados.nome.toUpperCase(),
        sobrenome: dados.sobrenome.toUpperCase(),
        idade: parseInt(dados.idade, 10),
        poder: dados.poder.toUpperCase(),
        ingresso: new Date(dados.ingresso),
        email: dados.email.toLowerCase()
        // trim remove espços em branco no inicio e no final. Por exemplo "  exemplo  " vira "exemplo"
    };
}

try {
    // primeiro, vamos tentar executar o código dentro do bloco try
    // se houver algum erro, ele vai pular para o bloco catch
    const dados = lerFormulario();
    const dadosTratados = tratar(dados);
    console.log("Dados tratados:", dadosTratados);  
} catch (erro) {
    console.error("Erro ao tratar dados:", erro);   
}

function validar(recruta) { 
    // conferimos cada regra de prenchimento do formulario, se alguma regra não for atendida, retornamos false
    if (!recruta.codinome || !recruta.nome || !recruta.sobrenome || !recruta.idade || !recruta.poder || !recruta.ingresso || !recruta.email) {
        throw new Error("Todos os campos devem ser preenchidos.");
    }   
    if (recruta.idade < 18) {
        throw new Error("O recruta deve ter pelo menos 18 anos.");
    }
    if (!recruta.email.includes("@")) {
        throw new Error("O email deve conter um '@'.");
    }       
    if (!recruta.codinome.includes(".")) {
        throw new Error("O codinome deve conter um ponto ('.').");
    }
    if (recruta.ingresso > new Date()) {
        throw new Error("A data de ingresso não pode ser no futuro.");
    }   
    if (recruta.poder.length < 10) {
        throw new Error("O poder deve ter pelo menos 10 caracteres.");
    }   
    if (recruta.nome.length < 3 || recruta.sobrenome.length < 3) {      
        throw new Error("O nome e sobrenome devem ter pelo menos 3 caracteres.");
    }   
}    

