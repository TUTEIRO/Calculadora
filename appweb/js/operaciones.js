/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcular(operacion) {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resul = eval(numero1 + operacion + numero2);
    document.getElementById("resultado").value = resul;
}
function potencia() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resul = 1;
    while (numero2 > 0) {
        resul = resul * numero1;
        numero2--;
    }
    document.getElementById("resultado").value = resul;
}

