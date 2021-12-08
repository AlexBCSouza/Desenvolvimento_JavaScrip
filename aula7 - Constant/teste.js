/*  Alex Batista Chaves Souza, tem 30 anos, peso 80 kg
tem 1.70 de altura e seu imc = 27.7
Alex Nasceu em 1991
*/ 

const nome = 'Alex';
const sobrenome = 'Batista Chaves Souza';
const idade = 30;
const peso = '79.6';
const altura = '1.70';
let imc; // (peso / altura * altura)
let anoDeNascimento;
imc = peso / (altura * altura)
anoDeNascimento = 2021 - idade

console.log(`${nome} ${sobrenome}, tem ${idade} anos, ${peso} kg.`);
console.log(`Tenho altura de ${altura} e meu imc é ${imc.toFixed(2)}.`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);



