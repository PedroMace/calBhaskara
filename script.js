	function cal() {

  var a = document.forms["form"]["a"].value;

  var b = document.forms["form"]["b"].value;

  var c = document.forms["form"]["c"].value;

  var textThing = document.querySelector(".result");
  textThing.innerHTML = "";

  if (a == "") {
      alert("Todos os valores precisam ser preenchidos.");
      return false;
  } else if (b == "") {
      alert("Todos os valores precisam ser preenchidos.");
      return false;
  } else if (c == "") {
      alert("Todos os valores precisam ser preenchidos.");
      return false;
  }
  if (a == 0) {
      alert("O termo A não pode valer 0 para ser uma equação de segundo grau.");
      return false;
  }

var d = (b * b);

var d2 = (4 * a * c);

var d3 = d - d2
var d3Fixed = d3.toFixed(3);

var de = Math.sqrt(d3);

var sp = (0 - b + de);

var sp2 = 2 * a;

var sp3 = sp / sp2;
var sp3Fixed = sp3.toFixed(3);

var sp4 = (0 - b - de);

var sp5 = sp4 / sp2;
var sp5Fixed = sp5.toFixed(3);

  if (d3 < 0) {
    textThing.appendChild(document.createTextNode("Δ = " + d3Fixed + " logo sua equação não há conjunto solução Real."));
}
  else if (d3 == 0) {
    textThing.appendChild(document.createTextNode(`x', x" = ` + sp5Fixed + ` , Δ = 0`));
}
  else if (d3 > 0) {
    textThing.appendChild(document.createTextNode(`x' = ` + sp5Fixed + ` , x" ` + sp3Fixed + ` , Δ =  ` + d3Fixed + ``));
}
  return forms['form'];
}
function how() {
        alert("Apenas utilizando HTML e JavaScript, a calculadora analisa os termos e utiliza linha por linha para um cálculo perfeito e preciso. Criado por Pedro Mace.");
    }
