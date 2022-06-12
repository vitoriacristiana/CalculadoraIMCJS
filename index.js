function calcular() {
    event.preventDefault();

    if (document.getElementById("peso").value <= 0 || document.getElementById("altura") <= 0) {
        return;
    }

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let diagnostico = "";

    let imc = peso / ((altura / 100) * (altura / 100));

    if (imc < 17) {
        diagnostico = "Muito abaixo do peso";
    }
    else if (imc < 18.49) {
        diagnostico = "Abaixo do peso";
    }
    else if (imc < 24.99) {
        diagnostico = "Peso normal";
    }
    else if (imc < 29.99) {
        diagnostico = "Acima do peso";
    }
    else if (imc < 34.99) {
        diagnostico = "Obesidade I";
    }
    else if (imc < 39.99) {
        diagnostico = "Obesidade II (severa)";
    }
    else {
        diagnostico = "Obesidade III (mórbida)";
    }

    document.getElementById("imc").innerText = "Seu IMC é " + imc.toFixed(3) + " kg/m².";
    document.getElementById("diagnostico").innerText = "Diagnóstico: " + diagnostico + ".";

    let resultados = document.getElementById("resultados");

    if (resultados.classList.contains("esconde")) {
        resultados.classList.remove("esconde");
    }
}