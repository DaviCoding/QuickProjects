const resultado = document.getElementById("resultado");
const buttons = document.querySelectorAll("button");
var calculo = "";

function verificar(valor) {
  this.valor = valor;
  switch (valor) {
    case "=":
      calculo != "" ? (calculo = eval(calculo)) : (calculo = "");
      break;
    case "c":
      calculo = "";
      break;
    default:
      calculo += valor;
  }
}

buttons.forEach((button) => {
  return button.addEventListener("click", (event) => {
    const valor = event.target.value;
    new verificar(valor);
    resultado.value = calculo;
  });
});
