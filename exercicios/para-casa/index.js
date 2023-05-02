let nota1 = parseFloat(prompt("Qual a primeira nota?"));
let nota2 = parseFloat(prompt("Qual a segunda nota?"));

let notaFinal = (nota1 + nota2) / 2;

if (notaFinal >= 7) {
  alert("Nota " + notaFinal + ". Aluno aprovado :D");
} else if (notaFinal >= 5) {
  alert("Nota " + notaFinal + ". Aluno em recuperação :)");
} else {
  alert("Nota " + notaFinal + ". Aluno reprovado :(");
}
