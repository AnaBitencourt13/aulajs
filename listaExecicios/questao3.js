/*Desenvolva uma aplicação em JavaScript para ler um salário e atualizá-lo de acordo
com a tabela abaixo.
Faixa salárial Aumento
até 1.045,00 30%
1.045,01 a 1.500,00 25%
1.500,01 a 2.600,00 20%
2.600,01 a 3.550,00 15%
Acima de 3.550,00 10%
*/

const TRINTA = 30;
const VALOR1 =  1045; 
const VINTE_CINCO = 25;
const VALOR2 = 1500;
const VINTE = 20;
const VALOR3 = 2600;
const QUINZE = 15;
const VALOR4 = 3550;
const DEZ = 10;
const VALOR5 = 3551;

let salario = 3551; 

let porcentagemTrinta = (salario/TRINTA)*100;
let porcentagemVinteCinco = (salario/VINTE_CINCO)*100;
let porcentagemVinte = (salario/VINTE)*100;
let porcentagemQuinze = (salario/QUINZE)*100;
let porcentagemDez = (salario/DEZ)*100;

if (salario <= VALOR1){
  console.log("Seu aumento é " + (salario + porcentagemTrinta))
} else if (salario <= VALOR2){
  console.log("Seu aumento é " + (salario + porcentagemVinteCinto))
} else if (salario <= VALOR3){
  console.log("Seu aumento é " + (salario + porcentagemVinte))
} else if (salario <= VALOR4){
  console.log("Seu aumento é " + (salario + porcentagemQuinza))
} else if (salario >= VALOR5) {
  console.log("Seu aumento é " + (salario + porcentagemDez))
}