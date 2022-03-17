
var mouseKeyboard = document.getElementsByClassName("mK");
var color = document.getElementById("color");
var slider = document.getElementById("slider");


var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  };
  //console.log(teclas);
  
  document.addEventListener("keyup", dibujarTeclado);
  var canvas = document.getElementById("areaDibujo");
  var papel = canvas.getContext("2d");
  var x = 150;
  var y = 75;

 
  
console.log(canvas)
  
  
  dibujarLinea(color.value, x, y, x + 1, y + 1, papel);
  
  function dibujarTeclado(evento) {
    
    var colorcito = color.value;
    var movimiento = 10;
    switch (evento.keyCode) {
      case teclas.UP:
        console.log("arriba");
        dibujarLinea(colorcito, parseInt(x), y, x, y - movimiento, papel);
        y = y - movimiento;
        break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        console.log("abajo");
        break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        console.log("izquierda");
        break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        console.log("derecha");
        break;
      default:
        console.log("usa las teclas de las flechas");
        break;
    }
  }
  
  function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = slider.value;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
  }

  function resizeCanvasToDisplaySize(canvas) {
    // look up the size the canvas is being displayed
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
 
    // If it's resolution does not match change it
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }
 
    return false;
 }
 console.log(canvas.width)