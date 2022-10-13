// Semana 1 - 1.1
// const nome;
// const sexo;
// let idade;
// let estaCastrado;
// let anosNaOng;

// Parte 1.2


const nome1 = "Juliette";
const sexo1 = "Fêmea";
let idade1 = 3;
let estaCastrado1 = false;
let anosNaOng1 = [2021, 2022];
let caracteristicas1 = ["educada", "carinhosa", "dócil"];


const nome2 = "Shay";
const sexo2 = "Fêmea";
let idade2 = 9;
let estaCastrado2 = true;
let anosNaOng2 = [2018, 2019, 2020, 2021, 2022];
let caracteristicas2 = ["mansa", "tranquila", "gosta de outros cachorros"];


const nome3 = "Antonio";
const sexo3 = "Macho";
let idade3 = 1;
let estaCastrado3 = true;
let anosNaOng3 = [2022];
let caracteristicas3 = ["brincalhão", "carinhoso", "late muito"];

const nome4 = "Cacau";
const sexo4 = "Fêmea";
let idade4 = 5;
let estaCastrado4 = true;
let anosNaOng4 = [2021, 2022];
let caracteristicas4 = ["brincalhona", "carinhosa", "adora brinquedo"];


// Parte 1.3
const mediaIdadeAnimais = Number(idade1 + idade2 + idade3 + idade4) / 4
console.log("A média da idade dos cachorros é:", mediaIdadeAnimais, "anos")
console.log("------------------------------------------");

//Parte 1.4
const verificaCastracao = ((estaCastrado1 && estaCastrado2 && estaCastrado3 && estaCastrado4) === true)
console.log("Todos os cachorros estão castrados?", verificaCastracao)

console.log("------------------------------------------");

//----------------------------------------------------------------------
//Semana 2 ok, coloquei acima e abaixo para aparecer usando o to upper case

console.log(`Nome: ${nome1.toUpperCase()}`);
console.log(`Sexo: ${sexo1}`);
console.log(`Idade: ${idade1}`);
console.log(`Está castrado? ${estaCastrado1}`);
console.log(`Anos na ONG: ${anosNaOng1}`);
let caracteristicasMaiusculo1 = "";
for (let i = 0; i < caracteristicas1.length; i++) {
    caracteristicasMaiusculo1 += `${caracteristicas1[i].toUpperCase()} `;
}
console.log(`Características: ${caracteristicasMaiusculo1}`);
console.log("------------------------------------------");

console.log(`Nome: ${nome2.toUpperCase()}`);
console.log(`Sexo: ${sexo2}`);
console.log(`Idade: ${idade2}`);
console.log(`Está castrado? ${estaCastrado2}`);
console.log(`Anos na ONG: ${anosNaOng2}`);
let caracteristicasMaiusculo2 = "";
for (let i = 0; i < caracteristicas2.length; i++) {
    caracteristicasMaiusculo2 += `${caracteristicas2[i].toUpperCase()} `;
}
console.log(`Características: ${caracteristicasMaiusculo2}`);

console.log("------------------------------------------");

console.log(`Nome: ${nome3.toUpperCase()}`);
console.log(`Sexo: ${sexo3}`);
console.log(`Idade: ${idade3}`);
console.log(`Está castrado? ${estaCastrado3}`);
console.log(`Anos na ONG: ${anosNaOng3}`);
let caracteristicasMaiusculo3 = "";
for (let i = 0; i < caracteristicas3.length; i++) {
    caracteristicasMaiusculo3 += `${caracteristicas3[i].toUpperCase()} `;
}
console.log(`Características: ${caracteristicasMaiusculo3}`);

console.log("------------------------------------------");
console.log(`Nome: ${nome4.toUpperCase()}`);
console.log(`Sexo: ${sexo4}`);
console.log(`Idade: ${idade4}`);
console.log(`Está castrado? ${estaCastrado4}`);
console.log(`Anos na ONG: ${anosNaOng4}`);
let caracteristicasMaiusculo4 = "";
for (let i = 0; i < caracteristicas4.length; i++) {
    caracteristicasMaiusculo4 += `${caracteristicas4[i].toUpperCase()} `;
}
console.log(`Características: ${caracteristicasMaiusculo4}`);

console.log("------------------------------------------");

//----------------------------------------------------------------------
//Semana 3: Transformar os itens em objetos - Ok

let cachorro1 = {
    nome: "Juliette",
    sexo: "Fêmea",
    idade: 3,
    estaCastrado: false,
    anosNaOng: [2021, 2022],
    caracteristicas: ["Educada", "carinhosa", "dócil"],
    imagem: "./ONG - alianca com a vida/Juliette1.jpg",
    link:"https://repositorio.ucs.br/xmlui/handle/11338/4970"
}

let cachorro2 = {
    nome: "Shay",
    sexo: "Fêmea",
    idade: 9,
    estaCastrado: true,
    anosNaOng: [2018, 2019, 2020, 2021, 2022],
    caracteristicas: ["Mansa", "tranquila", "gosta de outros cachorros"],
    imagem: "./ONG - alianca com a vida/Shay1.jpg",
    link:"https://web.archive.org/web/20210711120758id_/http://www.pubvet.com.br/uploads/4cdf2aa245f029acdd9b7a582737ae1f.pdf"
}

let cachorro3 = {
    nome: "Antonio",
    sexo: "Macho",
    idade: 1,
    estaCastrado: true,
    anosNaOng: [2022],
    caracteristicas: ["Brincalhão", "carinhoso", "late muito"],
    imagem:"./ONG - alianca com a vida/Antonio1.jpg",
    link:"https://www.researchgate.net/profile/Rafael-Duarte-Oliveira-Venancio/publication/316790067_Nao_abandone_adote_em_defesa_da_adocao_responsavel/links/5911d7beaca27200fe3b5eca/Nao-abandone-adote-em-defesa-da-adocao-responsavel.pdf"
}
let cachorro4 = {
    nome: "Cacau",
    sexo: "Fêmea",
    idade: 5,
    estaCastrado: true,
    anosNaOng: [2021, 2022],
    caracteristicas: ["Brincalhona", "carinhosa", "adora brinquedo"],
    imagem: "./ONG - alianca com a vida/Cacau1.jpg",
    link:"https://rsdjournal.org/index.php/rsd/article/view/14885"
}

console.log("Parte 3.2 - array vazio")
let cachorros = []
// cachorros.push(cachorro1,cachorro2,cachorro3)
console.log(cachorros)
console.log("------------------------------------------");

console.log("Parte 3.3 - array após o push")
//----------------------------------------------------------------------
//Semana4: Transformar os itens em objetos - Ok
if (cachorro1.estaCastrado === true) {
    cachorros.push(cachorro1)
} else {
    alert(`ALERTA!! Cachorro(a) ${cachorro1.nome} não foi adicionado(a) ao array pois não está castrado(a)`)

}

if (cachorro2.estaCastrado === true) {
    cachorros.push(cachorro2)

} else {
    alert(`ALERTA!! Cachorro(a) ${cachorro2.nome} não foi adicionado(a) ao array pois não está castrado(a)`)

}

if (cachorro3.estaCastrado === true) {
    cachorros.push(cachorro3)
} else {
    alert(`ALERTA!! Cachorro(a) ${cachorro3.nome} não foi adicionado(a) ao array pois não está castrado(a)`)
}

if (cachorro4.estaCastrado === true) {
    cachorros.push(cachorro4)
} else {
    alert(`ALERTA!! Cachorro(a) ${cachorro4.nome} não foi adicionado(a) ao array pois não está castrado(a)`)
}


//parte opcional. Posso comentar depois
console.log("Apenas os cachorros castrados:",cachorros)
console.log("------------------------------------------");
console.log("---PARTE 5.1 - REFATORANDO----");
//----------------------------------------------------------------------

//Semana 5.1: Refatorar: reescrever um código já escrito. Altere a forma que a característica de array dos itens seja escrita como um laço que 
//guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
//criar um laço que leia o array que está dentro do objeto
for (let i = 0; i < cachorros.length; i++) {
    const nomesCachorro = cachorros[i].nome.toString();
    console.log(`Nome: ${nomesCachorro}`);
    const sexoCachorro = cachorros[i].sexo.toString();
    console.log(`Sexo: ${sexoCachorro}`);
    const idadeCachorro = cachorros[i].idade;
    console.log(`Idade: ${idadeCachorro}`);
    const castradoCachorro = cachorros[i].estaCastrado;
    console.log(`Está Castrado(a)? ${castradoCachorro}`);
    const anosCachorro = cachorros[i].anosNaOng;
    console.log(`Anos na ONG: ${anosCachorro}`)
    const caracteristicasCachorro = cachorros[i].caracteristicas.toString();
    console.log(`Características: ${caracteristicasCachorro}\n\n`)
 
}

//SEMANA 5.2
console.log("-----------------------ITEM 5.2-----------------------")
for (let cachorroForOf of cachorros){
    console.log(cachorroForOf);
    }

    console.log("-----------------------ITEM 6-----------------------")
//Semana 6.1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
function cachorroFuncao(objeto) {
    console.log(`Nome: ${objeto.nome.toUpperCase()}\n Sexo: ${objeto.sexo}\n Idade: ${objeto.idade}\n Está castrado(a)? ${objeto.estaCastrado}\n Anos na ONG: ${objeto.anosNaOng}\n Características: ${objeto.caracteristicas}\n`);
}

for (let i=0; i<cachorros.length; i++){
cachorroFuncao(cachorros[i]);
}

//6.2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
//filter retorna um array com um tamanho igual ou menor, normalmente sem alterações no corpo. Filter altera o array
//o nome objeto abaixo não tem nenhuma ligação com o objeto da função acima, eles não conversam entre si. Filter retorna um booleano, se devolver true o elemente é adicionado ao arraynb 
function buscarCachorros (array, nome){
const cachorrosBuscar = array.filter((objeto)=> objeto.nome.toUpperCase() === nome.toUpperCase());
if(cachorrosBuscar.length>=1){
return cachorrosBuscar; 
} else {
    alert("ALERTA!! NENHUM CACHORRO ENCONTRADO COM ESSE NOME.");
}
}
console.log(buscarCachorros(cachorros, prompt("Digite o nome do cachorro que você quer buscar:")))

//Parte 11 e 12

//funcao do botão
function pesquisarCachorros(){
    const input= document.getElementById("search")
    console.log(input.value)
    const pesquisar= filtroCachorro(input)
    console.log(`${pesquisar}`? pesquisar: alert("Nome do cachorro não foi encontrado. Tente novamente."))
criarCachorros(pesquisar)
}

function filtroCachorro (input){
    const pesquisar= cachorros.filter((item)=>{return item.nome.toUpperCase()=== input.value.toUpperCase()})
    console.log(`${pesquisar}`? pesquisar: alert("Nome do cachorro não foi encontrado. Tente novamente."))
    if(pesquisar.length>=1){
return pesquisar
} else {
return cachorros

}
}

function criarCachorros (array){
const cachorroParagrafo= document.getElementById("lista-de-cachorros")
cachorroParagrafo.innerHTML=""

for(i=0; i<array.length; i++){
        cachorroParagrafo.innerHTML += `<section>
        <ul>  <div class="imagem" id="imagem-cachorro"> 
<img src= '${array[i].imagem}' alt="Foto cachorro" id="imagem1"></div>
      
    <div class="lista"><li><strong>Nome:</strong> <a href="${array[i].link}" target="_blank"> ${array[i].nome}</a></li>
      <li><strong>Sexo:</strong> ${array[i].sexo}</li>
      <li><strong>Idade:</strong> ${array[i].idade} ano(s)</li>
      <li><strong>Está castrado(a):</strong> ${array[i].estaCastrado}</li>
      <li><strong>Anos na ONG:</strong> ${array[i].anosNaOng}</li>
      <li><strong>Características: </strong> ${array[i].caracteristicas}</li>
      </div>
      </ul>
      </section> `
    }

}
criarCachorros(cachorros)

