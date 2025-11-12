let contador1 = 0;
let contador2 = 0;
let contador3 = 0;


function alerta1(){
  alert("Gracias por votar a Diseño Web")
}

function alerta2(){
  alert("Gracias por votar a JavaScript")
}

function alerta3(){
  alert("Gracias por votar a Bases de Datos")
}
let cont1 = document.getElementById("votos1");
  document.getElementById("boton1").addEventListener("click", function(){
  contador1++;
  document.getElementById("votos1").textContent=contador1
   alerta1()
  
});

let cont2 = document.getElementById("votos2");

  document.getElementById("boton2").addEventListener("click", function(){
  contador2++;
  document.getElementById("votos2").textContent=contador2
  alerta2()
});

let cont3 = document.getElementById("votos3");

  document.getElementById("boton3").addEventListener("click", function(){
  contador3++;
  document.getElementById("votos3").textContent=contador3
   alerta3()
});


