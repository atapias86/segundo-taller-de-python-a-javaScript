function num(numero) {
    document.querySelector("#form_01").reset();
    var resultado = document.querySelector("#text_resultado_ejer01");
    if (numero < 0) {
        resultado.value = "El numero " + numero + " es negativo y menor que 100";
    } else if (numero >= 0 && numero < 100) {
        resultado.value = "El numero " + numero + " es positivo y menor que 100";
    } else if (numero == 100) {
        resultado.value = "El numero " + numero + " es positivo y igual que 100";
    } else {
        resultado.value = "El numero " + numero + " es positivo y mayor que 100";
    }
}
function mayor(numero1, numero2, numero3) {
    document.querySelector("#form_02").reset();
    var resultado = document.querySelector("#text_resultado_ejer02");
    let menor, mayor;
    menor = Math.min(numero1, numero2, numero3);
    mayor = Math.max(numero1, numero2, numero3);
    resultado.value = "El numero mayor es: " + mayor + "\nEl numero menor es: " + menor;
}
function numeros(numero1, numero2, numero3) {
    document.querySelector("#form_03").reset();
    var resultado = document.querySelector("#text_resultado_ejer03");
    let menor, mayor;
    menor = Math.min(numero1, numero2, numero3);
    mayor = Math.max(numero1, numero2, numero3);
    resultado.value = "El numero mayor es: " + mayor + "\nEl numero menor es: " + menor;
    if (numero1 == numero2 && numero1 == numero3) {
        resultado.value = "Los tres numeros son iguales"
    }
}
function Triangulo(altura, base) {
    document.querySelector("#form_04_1").reset();
    var resultado = document.querySelector("#text_resultado_ejer04_1");
    opera = (base * altura) / 2;
    resultado.value = "El area del triangulo es: " + opera;
}
function Circulo(radio) {
    document.querySelector("#form_04_2").reset();
    var resultado = document.querySelector("#text_resultado_ejer04_2");
    let pi = 3.14;
    let operation = pi * (radio * radio);
    resultado.value = "El area del circulo es: " + operation;
}
function lados(lado1, lado2) {
    document.querySelector("#form_05").reset();
    var resultado = document.querySelector("#text_resultado_ejer05");
    if (lado1 < 0 || lado2 < 0) {
        resultado.value = "ERROR.." + "\nUno de los lados es negativo"
    } else {
        let area = (lado1 * lado2);
        resultado.value = "EL área del triangulo es: " + area;
    }
}
function alerta(temp, pres) {
    document.querySelector("#form_06").reset();
    var resultado = document.querySelector("#text_resultado_ejer06");
    if (temp >= 100 || pres >= 200) {
        resultado.value = "⚠ Alarma ⚠"
    } else {
        resultado.value = "Normal";
    }
}
function fatura_07(presio) {
    document.querySelector("#form_07").reset();
    var resultado = document.querySelector("#text_resultado_ejer07");
    console.log(presio);
    if (presio > 130000) {
        let desc = (presio * 15) / 100;
        let total = (presio - desc);
        resultado.value = "SubTotal.... " + presio
            + "\nDescuento... " + desc
            + "\nTotal... " + total;
    } else {
        resultado.value = "SubTotal.... " + presio
            + "\nDescuento... " + "0"
            + "\nTotal....... " + presio;
    }
}
function sueldo(selec_opc, nombre, horas) {
    document.querySelector("#form_08").reset();
    var resultado = document.querySelector("#text_resultado_ejer08");
    if (selec_opc == "Empleado de planta") {
        let operaction = (horas * 20000);
        resultado.value = "El sueldo del empleado " + nombre + " es de " + operaction;
    } else if (selec_opc == "Empleado administrativo") {
        let operaction = (horas * 10000);
        resultado.value = "El sueldo del empleado " + nombre + " es de " + operaction;
    }
}
function parametro_num(parametro) {
    document.querySelector("#form_09").reset();
    favDialog.showModal();
    favDialog.dataset.ciclo = parametro;
}
function fatura(prodct_01, prodct_02, prodct_03, prodct_04, prodct_05) {
    document.querySelector("#form_10").reset();
    var resultado = document.querySelector("#text_resultado_ejer10");
    let subtotal = (prodct_01 + prodct_02 + prodct_03 + prodct_04 + prodct_05);
    let iva = (subtotal * 19) / 100;
    let total = (subtotal + iva);

    resultado.value = "SubTotal.... " + subtotal
        + "\nIva (19%)... " + iva
        + "\nTotal....... " + total;
}
function resta(num1, num2) {
    document.querySelector("#form_12").reset();
    var resultado = document.querySelector("#text_resultado_ejer12");
    if (num1 > num2) {
        let resul = num1 - num2;
        resultado.value = "El valor de la resta es: " + resul;
    } else {
        resultado.value = "ERROR.....la operación no es posible realizarla";
    }
}
function tienda(selec_opc, pre_hela, cant) {

    document.querySelector("#form_13").reset();
    var resultado = document.querySelector("#text_resultado_ejer13");
    if (selec_opc == "Tipo A") {
        let subt = (pre_hela * cant);
        let des = (subt * 10) / 100;
        let total = (subt - des);
        resultado.value = "Subtotal.......... " + pre_hela
            + "\nCantida........... " + cant
            + "\nDescuento (10%)... " + des
            + "\nTotal............. " + total;
    } else if (selec_opc == "Tipo B") {
        let subt = (pre_hela * cant);
        let des = (subt * 15) / 100;
        let total = (subt - des);
        resultado.value = "Subtotal.......... " + pre_hela
            + "\nCantida........... " + cant
            + "\nDescuento (15%)... " + des
            + "\nTotal............. " + total;
    } else if (selec_opc == "Tipo C") {
        let subt = (pre_hela * cant);
        let des = (subt * 20) / 100;
        let total = (subt - des);
        resultado.value = "Subtotal.......... " + pre_hela
            + "\nCantida........... " + cant
            + "\nDescuento (20%)... " + des
            + "\nTotal............. " + total;
    } else if (selec_opc == "Sin membresía") {
        let subt = (pre_hela * cant);
        let des = 0;
        let total = (subt - des);
        resultado.value = "Subtotal.......... " + pre_hela
            + "\nCantida........... " + cant
            + "\nDescuento (0%).... " + des
            + "\nTotal............. " + total;
    }
}
addEventListener("DOMContentLoaded", (e) => {
    const favDialog = document.getElementById('favDialog');
    const favDialog_ejer11 = document.getElementById('favDialog_ejer11');
    let determinar = document.querySelector("#form_01");
    let calcular = document.querySelector("#form_02");
    let calcular_ejer3 = document.querySelector("#form_03");
    let opc_from1 = document.querySelector("#form_04_1");
    let opc_from2 = document.querySelector("#form_04_2");
    let calcular_ejer5 = document.querySelector("#form_05");
    let calcular_ejer6 = document.querySelector("#form_06");
    let calcular_ejer7 = document.querySelector("#form_07");
    let calcular_ejer8 = document.querySelector("#form_08");
    let calcular_ejer9 = document.querySelector("#form_09");
    let calcular_ejer10 = document.querySelector("#form_10");
    let calcular_ejer11 = document.querySelector("#btn_incio_ejer11");
    let calcular_ejer12 = document.querySelector("#form_12");
    let calcular_ejer13 = document.querySelector("#form_13");
    let formdialogo_ejer_9 = document.querySelector("#dialog");
    let formdialogo_ejer_11 = document.querySelector("#dialogo");
    let sum_par = 0;
    let sum_impar = 1;
    let count = 1;

    formdialogo_ejer_9.addEventListener("submit", (e) => {
        e.preventDefault();
        var resultado = document.querySelector("#text_resultado_ejer09");
        let num = Number(favDialog.dataset.ciclo);
        let data = Object.fromEntries(new FormData(e.target));
        let num1 = Number(data.num_ejer9);
        console.log(data);
        if (num1 % 2 != 0) {
            sum_impar *= num1;
        } else {
            sum_par += num1
        }
        num--;
        if (num) {
            formdialogo_ejer_9.reset();
            favDialog.dataset.ciclo = num;
            favDialog.close();
            setTimeout(() => {
                favDialog.showModal();
            }, 500);

        } else {
            formdialogo_ejer_9.reset();
            favDialog.close();
            if (sum_impar != 1) {
                resultado.value = "La suma de los numeros pares es: " + sum_par
                    + "\nLa suma de los numeros impares es: " + sum_impar
            } else {
                resultado.value = "La suma de los numeros pares es: " + sum_par
                    + "\nLa suma de los numeros impares es: 0"
            }
            sum_par = 0;
            sum_impar = 1;
        }
    });
    calcular_ejer11.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable").innerHTML= "";
        favDialog_ejer11.showModal();
    });
    formdialogo_ejer_11.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_11.dataset.notas);
        let plantilla = `
            <tr>
                <td>${count}</td>
                <td>${data.nom_estu}</td>
                <td>${data.ape_estu}</td>
                <td>${data.edad_estu}</td>
                <td>${data.calif_estu}</td>
            </tr>`;
        document.querySelector("#dataTable").insertAdjacentHTML("beforeend", plantilla);
        if (num > count) {
            formdialogo_ejer_11.reset();
            count++;
        } else {
            favDialog_ejer11.close();
            formdialogo_ejer_11.reset();
            count = 1;
        }
    });
    determinar.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = document.querySelector("#num_01").value;
        num(numero);
    });
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero1 = document.querySelector("#numero1").value;
        let numero2 = document.querySelector("#numero2").value;
        let numero3 = document.querySelector("#numero3").value;
        mayor(numero1, numero2, numero3);
    });
    calcular_ejer3.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero1 = document.querySelector("#numero_1").value;
        let numero2 = document.querySelector("#numero_2").value;
        let numero3 = document.querySelector("#numero_3").value;
        numeros(numero1, numero2, numero3);
    });
    opc_from1.addEventListener("submit", (e) => {
        e.preventDefault();
        let altura = document.querySelector("#altura").value;
        let base = document.querySelector("#base").value;
        Triangulo(altura, base);
    });
    opc_from2.addEventListener("submit", (f) => {
        f.preventDefault();
        let radio = document.querySelector("#radio").value;
        Circulo(radio);
    });
    calcular_ejer5.addEventListener("submit", (e) => {
        e.preventDefault();
        let lado1 = document.querySelector("#lado_1").value;
        let lado2 = document.querySelector("#lado_2").value;
        lados(lado1, lado2);
    });
    calcular_ejer6.addEventListener("submit", (e) => {
        e.preventDefault();
        let temp = document.querySelector("#temp").value;
        let pres = document.querySelector("#pres").value;
        alerta(temp, pres);
    });
    calcular_ejer7.addEventListener("submit", (e) => {
        e.preventDefault();
        let presio = document.querySelector("#total").value;
        fatura_07(presio);
    });
    calcular_ejer8.addEventListener("submit", (e) => {
        e.preventDefault();
        let selec_opc = document.querySelector("#select_ejer08").value;
        let nombre = document.querySelector("#nom_emp").value;
        let horas = parseInt(document.querySelector("#horas_trab").value);
        sueldo(selec_opc, nombre, horas);
    });
    calcular_ejer9.addEventListener("submit", (e) => {
        e.preventDefault();
        let parametro = parseInt(document.querySelector("#parametro").value);
        parametro_num(parametro);
    });
    calcular_ejer10.addEventListener("submit", (e) => {
        e.preventDefault();
        let prodct_01 = parseInt(document.querySelector("#prodct_01").value);
        let prodct_02 = parseInt(document.querySelector("#prodct_02").value);
        let prodct_03 = parseInt(document.querySelector("#prodct_03").value);
        let prodct_04 = parseInt(document.querySelector("#prodct_04").value);
        let prodct_05 = parseInt(document.querySelector("#prodct_05").value);
        fatura(prodct_01, prodct_02, prodct_03, prodct_04, prodct_05);
    });
    calcular_ejer12.addEventListener("submit", (e) => {
        e.preventDefault();
        let num1 = parseInt(document.querySelector("#primer_num").value);
        let num2 = parseInt(document.querySelector("#segundo_num").value);
        resta(num1, num2);
    });
    calcular_ejer13.addEventListener("submit", (e) => {
        e.preventDefault();
        let selec_opc = document.querySelector("#select_tipo").value;
        let pre_hela = document.querySelector("#precio_helado").value;
        let cant = document.querySelector("#cant_helado").value;
        tienda(selec_opc, pre_hela, cant);
    })
});