// Mensaje inicial que nos da la bienvenida... y de paso lanza una amenaza sutil
const mensaje = "Bienvenido, TeamLeader... \n Iniciando sistemas...\n Oh, se ha detectado un intruso!";

// Función para escribir texto tipo máquina, con salto de línea incluido
function escribir(texto, callback) {
  const output = document.getElementById("output");
  output.innerHTML = "";
  let i = 0;
  const intervalo = setInterval(() => {
    output.innerHTML += texto[i] === "\n" ? "<br>" : texto[i];
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo);
      if (callback) callback();
    }
  }, 50);
}

// Escribe el mensaje y luego muestra los botones
escribir(mensaje, () => {
  const botones = document.querySelectorAll(".boton");
  botones.forEach(boton => {
    boton.style.display = "inline-block";
  });
});

// Estado global, porque las decisiones también dejan cicatrices
let estado = { ruta: null };

// Maneja la elección de ruta y muestra el paso a seguir
function elegirRuta(ruta) {
  const output = document.getElementById("output");
  estado.ruta = ruta;
  document.querySelectorAll(".boton").forEach(boton => boton.style.display = "none");
  escribir(`Ruta seleccionada: ${ruta}...`, () => {
    output.innerHTML += `<strong>${ruta}</strong><br><br>`;
    escribir("Procesando decisión...", () => {
      setTimeout(() => {
        escribir("Accediendo a la siguiente fase...", nivel2);
      }, 1000);
    });
  });
}

// Crea y muestra los botones del segundo nivel
function mostrarBotones(opciones) {
  const contenedor = document.getElementById("botones-nivel2");
  contenedor.innerHTML = "";
  opciones.forEach(({ texto, accion }) => {
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.className = "boton";
    boton.onclick = accion;
    contenedor.appendChild(boton);
  });
}

// Segundo nivel: respuestas según la ruta elegida (spoiler: todo va mal)
function nivel2() {
  if (estado.ruta === 'Núcleo lógico') {
    escribir("Bienvenido, TeamLeader.\nTus coders quieren ponerte a prueba...", () => {
      mostrarBotones([
        { texto: "Aceptar el reto", accion: () => window.location.href = "./nivel3/index.html" },
        { texto: "Rechazar la lógica", accion: () => escribir("Has rechazado la lógica. Reiniciando...") }
      ]);
    });
  } else if (estado.ruta === 'Entorno simulado') {
    escribir("Estás dentro de una simulación.\nNada de esto es real... ¿o sí?", () => {
      mostrarBotones([
        { texto: "Despertar", accion: () => escribir("Despertando del sistema... Fin del camino simulado.") },
        { texto: "Quedarse dormido", accion: () => escribir("Has decidido quedarte... para siempre.") }
      ]);
    });
  } else if (estado.ruta === 'Trampa') {
    escribir("Has activado una trampa.\nCRUDY se ha cerrado contigo adentro...", () => {
      mostrarBotones([
        { texto: "Pedir ayuda", accion: () => escribir("No hay nadie que pueda ayudarte...") },
        { texto: "Resignarse", accion: () => escribir("Te has rendido. Fin del juego.") }
      ]);
    });
  } else {
    escribir("Error crítico.\nRuta desconocida.");
  }
}
