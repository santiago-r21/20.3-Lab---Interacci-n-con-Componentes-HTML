let contador1 = 0;

let cont1 = document.getElementById("contador1");

document.getElementById("boton1").addEventListener("click", function(){
  contador1++;
  cont1.textContent = contador1;
});
