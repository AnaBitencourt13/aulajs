/*Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor da compra for menor que R$ 50,00; caso contrário, o lucro será de 30%. Desenvolva uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda
para o produto.*/
 
const LUCRO1 = 45;
const LUCRO2 = 30;
const VALOR_MINIMO = 50;

let valorCompra = 75;

let porcentagemLucro1 = (valorCompra/LUCRO1)*100
let porcentagemLucro2 = (valorCompra/LUCRO2)*100


let venda1 = (valorCompra + porcentagemLucro1);
let venda2 = (valorCompra + porcentagemLucro2);

if (valorCompra < VALOR_MINIMO){
  console.log("Valor da venda foi com lucro de 45%, R$ " + venda1 + " reais!")
} else if (valorCompra > VALOR_MINIMO) {
  console.log("Valor da venda foi com lucro de 30%, R$" + venda2 + " reais!")
}

/*let porcentagemLucro1 = (valorVenda/LUCRO1)*100

let porcentagemLucro2 = (valorVenda/LUCRO2)*100


if( valorVenda >= VALOR_COMPRA){
  console.log("Seu lucro foi de 45% " + porcentagemLucro1)
} else if (valorVenda < VALOR_COMPRA) { 
  console.log("Seu lucro foi de 30% " + porcentagemLucro2)
} else {
  console.log("Seu lucro foi de 30% " + porcentagemLucro2)
}
*/
