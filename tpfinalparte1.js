// Milagros Donnantuoni comision 2
// https://youtu.be/bBLJjGYArgM?feature=shared


// HUNTRIX – Aventura gráfica


let pantalla = 0;
let imagenes = [];
let sonidos = [];
let sonidoActivo = false;

function preload() {

  imagenes = [
    loadImage('data/portada.jpg'),
    loadImage('data/ensayo.jpg'),
    loadImage('data/ataque.jpg'),
    loadImage('data/backstage.jpg'),
    loadImage('data/batalla.jpg'),
    loadImage('data/revelacion.jpg'),
    loadImage('data/traicion.jpg'),
    loadImage('data/traicion.jpg'),
    loadImage('data/pasado_jinu.jpg'),
    loadImage('data/gwi_ma.jpg'),
    loadImage('data/canto_final.jpg'),
    loadImage('data/batalla.jpg'),
    loadImage('data/final1.jpg'),
    loadImage('data/final2.jpg'),
    loadImage('data/final3.jpg')
  ];

  sonidos = [
    loadSound('data/inicio.mp3'),              // 0 menú
    loadSound('data/ruidos_misteriosos.mp3'),  // 1
    loadSound('data/aventura.mp3'),            // 2
    loadSound('data/reencuentro.mp3'),         // 3
    loadSound('data/final1.mp3'),               // 4
    loadSound('data/final2.mp3'),               // 5
    loadSound('data/final3.mp3')                // 6
  ];
}
   function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("canvas-container");
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  background(0);
  mostrarPantalla(pantalla);
}

function mostrarPantalla(num) {

  // Fondo
  if (imagenes[num]) {
    image(imagenes[num], 0, 0, width, height);
  }

  fill(255);

  if (num === 0) {
    text("🎵 HUNTRIX: KPOP Demon Hunters", width/2, 120);
    mostrarBoton("Comenzar", width/2 - 80, 250);
    mostrarBoton("Créditos", width/2 - 80, 320);

    if (!sonidoActivo) {
      mostrarBoton("Activar sonido", width/2 - 80, 380);
    } else {
      text(" Sonido activado", width/2, 420);
    }
  }

  else if (num === 99) {
    text("CRÉDITOS", width/2, 60);
    text("Proyecto: Huntrix – Kpop Demon Hunters", width/2, 120);
    text("Creado por: Milagros Donnantuoni", width/2, 160);
    text("Profesor: Matías Jauregui Lorda", width/2, 200);
    text("Artista del fanart: Evelina0o", width/2, 240);
    mostrarBoton("Volver al inicio", width/2 - 80, 400);
  }

  else if (num === 1) { texto("Ensayo de Huntrix"); texto2("Se oyen ruidos misteriosos"); mostrarOpciones(["Ignorar ruidos", "Investigar ruido"]); }
  else if (num === 2) { texto("¡Ataque demoníaco!"); mostrarOpciones(["Usar canto protector", "Escapar al backstage"]); }
  else if (num === 3) { texto("Aparece Jinu"); mostrarOpciones(["Hablar con Jinu", "Atacarlo"]); }
  else if (num === 4) { texto("Batalla musical"); mostrarOpciones(["Cantar 'Golden'", "Cantar 'Takedown'"]); }
  else if (num === 5) { texto("Rumi descubre su herencia demoníaca"); mostrarOpciones(["Confesar la verdad", "Negarlo y huir"]); }
  else if (num === 6) { texto("Rumores y traición..."); mostrarOpciones(["Pedir perdón a Mira y Zoey", "Culpar a Jinu"]); }
  else if (num === 7) { texto("El grupo se rompe..."); mostrarOpciones(["Buscar ayuda en Jinu", "Luchar sola"]); }
  else if (num === 8) { texto("Jinu revela su pasado oscuro"); mostrarOpciones(["Aceptar su ayuda", "Rechazarlo"]); }
  else if (num === 9) { texto("¡Gwi-Ma despierta!"); mostrarOpciones(["Formar dúo con Jinu", "Intentar sellar sola"]); }
  else if (num === 10){ texto("Huntrix se reúne para el canto final"); mostrarOpciones(["Cantar 'What it sounds like'", "Usar alma de Jinu"]); }
  else if (num === 11){ texto("Rumi lucha sola contra Gwi-Ma"); mostrarBoton("Ir al Final 2", width/2 - 80, 350); }
  else if (num === 12) { texto("🌟 FINAL 1 – La Luz del Honmoon"); mostrarBoton("Volver al inicio", width/2 - 80, 350); }
  else if (num === 13) { texto("💀 FINAL 2 – Caída del Mundo"); mostrarBoton("Volver al inicio", width/2 - 80, 350); }
  else if (num === 14) { texto("💫 FINAL 3 – Redención de las Sombras"); mostrarBoton("Volver al inicio", width/2 - 80, 350); }

}

function texto(t) { text(t, width/2, 80); }
function texto2(t){ text(t, width/2, 120); }

function mostrarBoton(txt, x, y) {
  fill(200, 100, 255);
  rect(x, y, 160, 40, 10);
  fill(255);
  text(txt, x + 80, y + 20);
}

function mostrarOpciones(arr) {
  mostrarBoton(arr[0], width/2 - 80, 300);
  mostrarBoton(arr[1], width/2 - 80, 360);
}

function mousePressed() {

  // MENÚ
  if (pantalla === 0) {

  if (mouseY > 240 && mouseY < 290) {
    pantalla = 1;
  }
  else if (mouseY > 310 && mouseY < 360) {
    pantalla = 99;
  }
  else if (mouseY > 370 && mouseY < 420 && !sonidoActivo) {
    userStartAudio();     // obligatorio por el navegador
    sonidos[0].loop();    // música del menú
    sonidoActivo = true;
  }

  return;
  }

  if (pantalla === 99) { pantalla = 0; return; }

  if (pantalla === 1) pantalla = (mouseY < 330 ? 2 : 3);
  else if (pantalla === 2) pantalla = (mouseY < 330 ? 4 : 3);
  else if (pantalla === 3) pantalla = (mouseY < 330 ? 8 : 6);
  else if (pantalla === 4) pantalla = (mouseY < 330 ? 5 : 6);
  else if (pantalla === 5) pantalla = (mouseY < 330 ? 7 : 6);
  else if (pantalla === 6) pantalla = (mouseY < 330 ? 10 : 7);
  else if (pantalla === 7) pantalla = (mouseY < 330 ? 8 : 11);
  else if (pantalla === 8) pantalla = (mouseY < 330 ? 9 : 7);
  else if (pantalla === 9) pantalla = (mouseY < 330 ? 10 : 11);
  else if (pantalla === 10) pantalla = (mouseY < 330 ? 12 : 14);
  else if (pantalla === 11) pantalla = 13;

  else if ([12, 13, 14].includes(pantalla)) pantalla = 0;
}

  