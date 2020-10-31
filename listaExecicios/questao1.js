const MEDIA = 70;
const AULAS = 80;
const LIMITE_FALTAS = 25;

let nome = "Rodrigues";
console.log(nome);
let nota1 = 90;
let nota2 = 10;
let nota3 = 10;

let faltaAluno = 5;

let somaNotaAluno = nota1 + nota2 + nota3;
console.log(somaNotaAluno);

let mediaAluno = somaNotaAluno /3;
let mediaAlunoFormat = mediaAluno.toFixed();
console.log(mediaAluno.toFixed());

let porcentagemFalta = (faltaAluno/LIMITE_FALTAS)*100
console.log(porcentagemFalta);

if (mediaAlunoFormat >= MEDIA && porcentagemFalta < LIMITE_FALTAS){
  console.log( "O Aluno " + nome + ", está aprovado");
} else if ( mediaAlunoFormat >= MEDIA && porcentagemFalta > LIMITE_FALTAS){
  console.log("O Aluno " + nome + ", está reprovado por Falta");
} else {
  console.log("O Aluno " + nome + ", está reprovado por média")
}