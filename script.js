// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript() {
  // Resolución del problema
  // Declarar constantes y variables
  const valorPasaje = 1700;
  let numPasajes, cupo;

  cupo = prompt("Ingrese el valor del cupo de su tarjeta");
  numPasajes = Number.parseInt(cupo / valorPasaje);

  let resultadoElement = document.getElementById("resultado");

  if (numPasajes <= 2) {
    setTimeout(() => {
      resultadoElement.textContent = `Usted solo tiene ${numPasajes} pasajes, como tiene dos o menos pasajes, por tanto debe recargar`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `La cantidad de pasajes que tiene es ${numPasajes}`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript2() {
  // Resolución del problema
  // Declarar constantes y variables
  let numero;

  numero = Number.parseInt(prompt("Ingrese un número positivo o negativo"));

  let resultadoElement = document.getElementById("resultado2");

  if (numero <= 0) {
    setTimeout(() => {
      resultadoElement.textContent = `El número ${numero} es menor que 0`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `El número ${numero} es mayor que 0`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript3() {
  // Resolución del problema
  // Declarar constantes y variables
  let numero, residuo;

  numero = Number.parseInt(
    prompt("Ingrese un número positivo o negativo diferente de 0")
  );
  residuo = numero % 2;

  let resultadoElement = document.getElementById("resultado3");

  if (numero == 0) {
    setTimeout(() => {
      resultadoElement.textContent = `Por favor ingrese un número diferente de cero`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    if (numero <= 0 && residuo == 0) {
      setTimeout(() => {
        resultadoElement.textContent = `El número ${numero} es menor que 0 y el número ${numero} es par`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
    } else if (numero <= 0 && residuo !== 0) {
      setTimeout(() => {
        resultadoElement.textContent = `El número ${numero} es menor que 0 y el número ${numero} es impar`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
    } else if (numero >= 0 && residuo == 0) {
      setTimeout(() => {
        resultadoElement.textContent = `El número ${numero} es mayor que 0 y el número ${numero} es par`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
    } else {
      setTimeout(() => {
        resultadoElement.textContent = `El número ${numero} es mayor que 0 y el número ${numero} es impar`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
    }
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript4() {
  // Resolución del problema
  // Declarar constantes y variables
  let puntos;

  puntos = Number.parseInt(
    prompt("Ingrese la cantidad de puntos que tienes como viajero frecuente: ")
  );

  let resultadoElement = document.getElementById("resultado4");

  if (puntos >= 2000) {
    setTimeout(() => {
      resultadoElement.textContent = `Felicitaciones, Su tiquete es de clase ejecutiva`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (puntos >= 1000 && puntos <= 1999) {
    setTimeout(() => {
      resultadoElement.textContent = `Esta bien, su tiquete es de clase normal`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `Lo sentimos, su tiquete es de clase económica`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript5() {
  // Resolución del problema
  // Declarar constantes y variables
  let A, B;

  A = Number.parseInt(prompt("Ingrese un valor numerico a la variable A: "));
  B = Number.parseInt(
    prompt("Ahora Ingrese un valor numerico a la variable B: ")
  );

  let resultadoElement = document.getElementById("resultado5");

  if (A > B) {
    setTimeout(() => {
      resultadoElement.textContent = `Ahora la variable B es igual a: ${A}, y la varible A es igual a: ${B}`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `La variable A sigue siendo ${A} y la variable B sigue siendo ${B}`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript6() {
  // Resolución del problema
  // Declarar constantes y variables
  const porcentaje1 = 0.3,
    porcentaje2 = 0.3,
    porcentajeFinal = 0.4,
    notaAprobatoria = 3.2;

  let nota1,
    nota2,
    notaFinal,
    acumuladoNota1,
    acumuladoNota2,
    acumuladoNotaFinal,
    notaTotal;

  nota1 = Number.parseInt(
    prompt("Ingrese la nota de su primer parcial, de uno a cinco ")
  );
  nota2 = Number.parseInt(
    prompt("Ingrese la nota de su segundo parcial, de uno a cinco ")
  );
  notaFinal = Number.parseInt(
    prompt("Ingrese la nota de su examen final, de uno a cinco ")
  );

  // calculos
  acumuladoNota1 = nota1 * porcentaje1;
  acumuladoNota2 = nota2 * porcentaje2;
  acumuladoNotaFinal = notaFinal * porcentajeFinal;
  notaTotal = acumuladoNota1 + acumuladoNota2 + acumuladoNotaFinal;

  let resultadoElement = document.getElementById("resultado6");

  if (notaTotal >= notaAprobatoria) {
    setTimeout(() => {
      resultadoElement.textContent = `Felicitaciones!, su nota final es: ${notaTotal}, y aprobaste el curso`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `Lo sentimos, su nota final es: ${notaTotal}, y no aprobaste el curso`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript7() {
  // Resolución del problema
  // Declarar constantes y variables
  const pagoBase = 350,
    comision = 15,
    porcentajeImpuesto = 0.25,
    bono = 40;
  let nombre, autosVendidos, sueldoBruto, impuestos, sueldoNeto;

  nombre = prompt("Ingrese su nombre y apellido: ");
  autosVendidos = Number.parseInt(
    prompt("Ingrese el numero de autos que vendiste:")
  );

  //calculos
  if (autosVendidos > 15) {
    sueldoBruto = pagoBase + comision * autosVendidos + bono;
    impuestos = sueldoBruto * porcentajeImpuesto;
    sueldoNeto = sueldoBruto - impuestos;
  } else {
    sueldoBruto = pagoBase + comision * autosVendidos;
    impuestos = sueldoBruto * porcentajeImpuesto;
    sueldoNeto = sueldoBruto - impuestos;
  }

  let resultadoElement = document.getElementById("resultado7");

  setTimeout(() => {
    resultadoElement.innerHTML = `Vendedor: ${nombre}
    <br>Sueldo Bruto: $${sueldoBruto} <br>Impuesto a pagar $${impuestos} <br>Sueldo Neto $${sueldoNeto}`;
    resultadoElement.style.opacity = "1";
    resultadoElement.style.color = "#4CAF50";
    resultadoElement.style.fontWeight = "bold";
  }, 300);
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript8() {
  // Resolución del problema
  // Declarar constantes y variables

  //calculos
  let opcion;
  opcion = prompt("Escoja la opción que desea, a, b, c, d, e");
  switch (opcion) {
    case "a":
      let numero1, numero2, numero3, maximo;
      numero1 = Number.parseInt(prompt("Ingrese el primer número"));
      numero2 = Number.parseInt(prompt("Ingrese el segundo número"));
      numero3 = Number.parseInt(prompt("Ingrese el tercer número"));
      if (numero1 > numero2 && numero1 > numero3) {
        maximo = numero1;
      } else if (numero2 > numero3) {
        maximo = numero2;
      } else {
        maximo = numero3;
      }

      setTimeout(() => {
        resultadoElement.innerHTML = `El número máximo de los tres es igual a: ${maximo}`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
      break;

    case "b":
      let numero4, numero5, numero6, minimo;
      numero4 = Number.parseInt(prompt("Ingrese el primer número"));
      numero5 = Number.parseInt(prompt("Ingrese el segundo número"));
      numero6 = Number.parseInt(prompt("Ingrese el tercer número"));
      if (numero4 < numero5 && numero4 < numero6) {
        minimo = numero4;
      } else if (numero5 < numero6) {
        minimo = numero5;
      } else {
        minimo = numero6;
      }

      setTimeout(() => {
        resultadoElement.innerHTML = `El número minimo de los tres es igual a: ${minimo}`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
      break;

    case "c":
      let numero7, numero8, numero9, promedio, suma;
      numero7 = Number.parseInt(prompt("Ingrese el primer número"));
      numero8 = Number.parseInt(prompt("Ingrese el segundo número"));
      numero9 = Number.parseInt(prompt("Ingrese el tercer número"));
      suma = numero7 + numero8 + numero9;
      promedio = suma / 3;

      setTimeout(() => {
        resultadoElement.innerHTML = `El promedio de los tres numeros es igual a: ${promedio.toFixed(
          2
        )}`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
      break;

    case "d":
      let letra = prompt("Ingrese una letra del alfabeto: ");
      if (letra === letra.toUpperCase()) {
        setTimeout(() => {
          resultadoElement.innerHTML = `La letra que ingresaste: ${letra}, es una mayúscula`;
          resultadoElement.style.opacity = "1";
          resultadoElement.style.color = "#4CAF50";
          resultadoElement.style.fontWeight = "bold";
        }, 300);
      } else {
        setTimeout(() => {
          resultadoElement.innerHTML = `La letra que ingresaste: ${letra}, es una minúscula`;
          resultadoElement.style.opacity = "1";
          resultadoElement.style.color = "#4CAF50";
          resultadoElement.style.fontWeight = "bold";
        }, 300);
      }

      break;

    case "e":
      let caracter = prompt("por favor escriba un caracter:");
      if (/\d/.test(caracter)) {
        setTimeout(() => {
          resultadoElement.innerHTML = `El caracter que ingresaste: ${caracter}, es un número`;
          resultadoElement.style.opacity = "1";
          resultadoElement.style.color = "#4CAF50";
          resultadoElement.style.fontWeight = "bold";
        }, 300);
      } else {
        setTimeout(() => {
          resultadoElement.innerHTML = `El caracter que ingresaste: ${caracter}, NO es un número`;
          resultadoElement.style.opacity = "1";
          resultadoElement.style.color = "#4CAF50";
          resultadoElement.style.fontWeight = "bold";
        }, 300);
      }
      break;

    default:
      setTimeout(() => {
        resultadoElement.innerHTML = `Por favor ingrese una opción valida`;
        resultadoElement.style.opacity = "1";
        resultadoElement.style.color = "#4CAF50";
        resultadoElement.style.fontWeight = "bold";
      }, 300);
  }
  let resultadoElement = document.getElementById("resultado8");
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript9() {
  // Resolución del problema
  // Declarar constantes y variables

  let nota;

  nota = Number.parseFloat(
    prompt("Ingrese la nota su nota de cero a cinco, incluye decimales")
  );

  // calculos
  let resultadoElement = document.getElementById("resultado9");

  if (nota == 5.0) {
    setTimeout(() => {
      resultadoElement.textContent = `Felicitaciones!, su nota es: ${nota}, y su estado de estudiante es EXCELENTE`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (nota >= 4.0 && nota <= 4.9) {
    setTimeout(() => {
      resultadoElement.textContent = `Su nota es ${nota} y su estado de estudiante es BUENO`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (nota >= 3.0 && nota <= 3.9) {
    setTimeout(() => {
      resultadoElement.textContent = `Su nota es ${nota} y su estado de estudiante es REGULAR`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (nota >= 0 && nota <= 2.9) {
    setTimeout(() => {
      resultadoElement.textContent = `Su nota es ${nota} y su estado de estudiante es DEFICIENTE`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `Por favor ingrese una nota que sea entre 0 y 5.0`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript10() {
  // Resolución del problema
  // Declarar constantes y variables
  const porcentaje1 = 0.3,
    porcentaje2 = 0.3,
    porcentajeFinal = 0.4;

  let nombreEst1,
    nombreEst2,
    nombreEst3,
    nota1est1,
    nota2est1,
    notaFinalEst1,
    nota1est2,
    nota2est2,
    notaFinalEst2,
    nota1est3,
    nota2est3,
    notaFinalEst3,
    notaDefinitivaEst1,
    notaDefinitivaEst2,
    notaDefinitivaEst3,
    mejorEstudiante,
    peorEstudiante,
    mejorNota,
    peorNota;

  //Algoritmo
  nombreEst1 = prompt("Estudiante 1: Por favor, ingrese su nombre");

  nota1est1 = Number.parseInt(
    prompt("Ingrese la nota de su primer parcial, de uno a cinco ")
  );
  nota2est1 = Number.parseInt(
    prompt("Ingrese la nota de su segundo parcial, de uno a cinco ")
  );
  notaFinalEst1 = Number.parseInt(
    prompt("Ingrese la nota de su examen final, de uno a cinco ")
  );

  nombreEst2 = prompt("Estudiante 2: Por favor, ingrese su nombre");

  nota1est2 = Number.parseInt(
    prompt("Ingrese la nota de su primer parcial, de uno a cinco ")
  );
  nota2est2 = Number.parseInt(
    prompt("Ingrese la nota de su segundo parcial, de uno a cinco ")
  );
  notaFinalEst2 = Number.parseInt(
    prompt("Ingrese la nota de su examen final, de uno a cinco ")
  );

  nombreEst3 = prompt("Estudiante 3: Por favor, ingrese su nombre");

  nota1est3 = Number.parseInt(
    prompt("Ingrese la nota de su primer parcial, de uno a cinco ")
  );
  nota2est3 = Number.parseInt(
    prompt("Ingrese la nota de su segundo parcial, de uno a cinco ")
  );
  notaFinalEst3 = Number.parseInt(
    prompt("Ingrese la nota de su examen final, de uno a cinco ")
  );

  // calculos
  notaDefinitivaEst1 =
    nota1est1 * porcentaje1 +
    nota2est1 * porcentaje2 +
    notaFinalEst1 * porcentajeFinal;

  notaDefinitivaEst2 =
    nota1est2 * porcentaje1 +
    nota2est2 * porcentaje2 +
    notaFinalEst2 * porcentajeFinal;

  notaDefinitivaEst3 =
    nota1est3 * porcentaje1 +
    nota2est3 * porcentaje2 +
    notaFinalEst3 * porcentajeFinal;

  let resultadoElement = document.getElementById("resultado10");
  //algortimo para detectar el mejor estudiante
  if (
    notaDefinitivaEst1 > notaDefinitivaEst2 &&
    notaDefinitivaEst1 > notaDefinitivaEst3
  ) {
    mejorEstudiante = nombreEst1;
    mejorNota = notaDefinitivaEst1;
  } else if (notaDefinitivaEst2 > notaDefinitivaEst3) {
    mejorEstudiante = nombreEst2;
    mejorNota = notaDefinitivaEst2;
  } else {
    mejorEstudiante = nombreEst3;
    mejorNota = notaDefinitivaEst3;
  }
  //algoritmo para detectar el peor estudiante
  if (
    notaDefinitivaEst1 < notaDefinitivaEst2 &&
    notaDefinitivaEst1 < notaDefinitivaEst3
  ) {
    peorEstudiante = nombreEst1;
    peorNota = notaDefinitivaEst1;
  } else if (notaDefinitivaEst2 < notaDefinitivaEst3) {
    peorEstudiante = nombreEst2;
    peorNota = notaDefinitivaEst2;
  } else {
    peorEstudiante = nombreEst3;
    peorNota = notaDefinitivaEst3;
  }
  setTimeout(() => {
    resultadoElement.innerHTML = `Felicitaciones ${mejorEstudiante}!, su nota definitiva es: ${mejorNota}, y obtuviste el mejor rendimiento academico. <br> Lo sentimos ${peorEstudiante}, su nota definitiva es ${peorNota}, y obtuviste el más bajo rendimiento academico.`;
    resultadoElement.style.opacity = "1";
    resultadoElement.style.color = "#4CAF50";
    resultadoElement.style.fontWeight = "bold";
  }, 300);
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript11() {
  // Resolución del problema
  // Declarar constantes y variables

  let nombre, cedula, edad;
  nombre = prompt("Ingrese su nombre");
  cedula = Number.parseInt(prompt("Ingrese su número de cédula"));
  edad = Number.parseInt(prompt("Ingrese su edad"));

  // calculos
  let resultadoElement = document.getElementById("resultado11");

  if (edad >= 25 && edad <= 40) {
    setTimeout(() => {
      resultadoElement.innerHTML = `Felicitaciones!, ${nombre} <br> Cédula: ${cedula} <br> Su equipo será: PROFESIONALES`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (edad >= 18 && edad <= 24) {
    setTimeout(() => {
      resultadoElement.innerHTML = `Felicitaciones!, ${nombre} <br> Cédula: ${cedula} <br> Su equipo será: AFICIONADOS`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (edad >= 12 && edad <= 17) {
    setTimeout(() => {
      resultadoElement.innerHTML = `Felicitaciones!, ${nombre} <br> Cédula: ${cedula} <br> Su equipo será: NOVATOS`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (edad <= 12 || edad >= 40) {
    setTimeout(() => {
      resultadoElement.innerHTML = `Lo lamentamos ${nombre} <br> Cédula ${cedula} <br> No puedes participar en ningún equipo`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `Por favor ingrese un dato de edad correcto`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript12() {
  // Resolución del problema
  // Declarar constantes y variables

  let numero1, numero2, numero3, nuevoNumero1, nuevoNumero2, nuevoNumero3;
  numero1 = Number.parseInt(prompt("Ingrese el primer número"));
  numero2 = Number.parseInt(prompt("Ingrese el segundo número"));
  numero3 = Number.parseInt(prompt("Ingrese el tercer número"));

  // calculos
  let resultadoElement = document.getElementById("resultado12");

  if (numero2 > numero1 && numero2 > numero3) {
    nuevoNumero1 = numero2;
    nuevoNumero2 = numero3;
    nuevoNumero3 = numero1;
    setTimeout(() => {
      resultadoElement.innerHTML = `El segundo número: ${numero2}, es el mayor de los tres, por eso los intercambiamos, ahora el primer numero es ${nuevoNumero1}, el segundo numero es ${nuevoNumero2} y el tercer numero es ${nuevoNumero3}. `;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `El segundo número: ${numero2}, NO es el mayor de los tres, por eso los numeros continuan IGUAL, el primer numero es ${numero1}, el segundo numero es ${numero2} y el tercer numero es ${numero3}. `;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript13() {
  // Resolución del problema
  // Declarar constantes y variables

  let nota1, nota2, nota3, suma, promedio, nombre, antecedentes;
  nombre = prompt("Ingrese su nombre:");
  nota1 = Number.parseInt(prompt("Ingrese la primera nota"));
  nota2 = Number.parseInt(prompt("Ingrese la segunda nota"));
  nota3 = Number.parseInt(prompt("Ingrese la tercera nota"));
  antecedentes = prompt(
    "¿Tiene antecedentes diciplinarios?. Responda si o no."
  );

  // calculos
  suma = nota1 + nota2 + nota3;
  promedio = suma / 3;

  let resultadoElement = document.getElementById("resultado13");

  if (promedio > 4 && antecedentes == "no") {
    setTimeout(() => {
      resultadoElement.innerHTML = `Felicidades ${nombre}, usted ahora es monitor de la universidad`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `Lo sentimos ${nombre}, usted no puede ser monitor de la universidad`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}

// Función que se ejecuta al hacer click en el enunciado
function ejecutarScript14() {
  // Resolución del problema
  // Declarar constantes y variables

  let nombre, sueldo, años;
  nombre = prompt("Ingrese su nombre:");
  sueldo = Number.parseInt(prompt("Ingrese su sueldo actual"));
  años = Number.parseInt(
    prompt("Ingrese el número de años que lleva en la empresa")
  );

  // calculos

  let resultadoElement = document.getElementById("resultado14");

  if (sueldo <= 500 && años <= 4) {
    setTimeout(() => {
      resultadoElement.innerHTML = `Señor ${nombre}, usted esta en nivel 1`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (sueldo >= 501 && sueldo <= 1000 && años <= 4) {
    setTimeout(() => {
      resultadoElement.textContent = `Señor ${nombre}, usted esta en nivel 2`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (años >= 10) {
    setTimeout(() => {
      resultadoElement.textContent = `Señor ${nombre}, usted esta en nivel 3`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else if (sueldo <= 2000 && años >= 5 && años <= 9) {
    setTimeout(() => {
      resultadoElement.textContent = `Señor ${nombre}, usted esta en nivel 4`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  } else {
    setTimeout(() => {
      resultadoElement.textContent = `Señor ${nombre}, usted esta en nivel 0`;
      resultadoElement.style.opacity = "1";
      resultadoElement.style.color = "#4CAF50";
      resultadoElement.style.fontWeight = "bold";
    }, 300);
  }
}
