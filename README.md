# CRUDY
Trabajo de I.A. hecho por células.

# 🎮 Nivel 1 - Introducción al Sistema

El jugador entra a una interfaz tipo consola en la que se le da la bienvenida y se simula una alerta por "intrusión".

Luego de esto, debe elegir entre tres rutas:
- Núcleo lógico
- Entorno simulado
- Trampa

La decisión tomada definirá el camino a seguir en el siguiente nivel.

# 🎮 Nivel 2 - Simulación Reactiva

Dependiendo de la ruta elegida en el nivel anterior, el sistema muestra una simulación diferente:

- Si eliges "Núcleo lógico", puedes avanzar al siguiente reto.
- Si eliges "Entorno simulado", se te presentan decisiones existenciales.
- Si eliges "Trampa", el sistema falla y quedas atrapado.

Este nivel es una reacción directa a la elección anterior.

![Image](https://github.com/user-attachments/assets/8901bbc1-f372-4445-8bce-01ffe2d3ae34)

**Hecho por: Mateo Algarin Rendon**


# 🎮 Documentacion del nivel 3

## 👓Inicio o primera vista:
- Al pasar al `Nivel 3` habra una ventana con cuatro colores diferentes `(Rojo, Amarrillo, Verde, Azul)`. En esta ventana hay un boton para iniciar la secuencia.

![Image](https://github.com/user-attachments/assets/8ebfbf8c-87f7-442e-8a50-9716aada0cef)


## 🧾 Descripcion de lo que hace la secuencia:
- Al hacer `click` en iniciar secuencia se inicia una simulacion donde se escogen aleatoriamente estos cuatro colores. Se resalta con un pequeño zoom y
una pequeña sombra de color blanca.

![Image](https://github.com/user-attachments/assets/a16396ff-061a-4ffd-a24f-dcdda65b1a99)


- El jugador debe memorizar esta secuencia para luego replicarla, si lo hace bien le saldra un mensaje (¡Correcto! Has superado el desafío). De lo contrario si el 
jugador no lo hace correctamente le saldra un mensaje (¡Error! Secuencia incorrecta. Intenta de nuevo).

![Image](https://github.com/user-attachments/assets/efa108cd-d59e-4630-90cc-b7630f71fff2)

![Image](https://github.com/user-attachments/assets/00c46c76-c9f2-4b02-83ef-94825e3ed701)

***🕹️En este `"Nivel 3"` solo tienes que resolver la secuencia aleatoria que te muestra el juego y pasarias al siguente nivel***

**Hecho por: Yeferson Alejandro Garcia Marin**

# Nivel 4 - Lógica Fractal

En este nivel, el jugador se enfrenta a un acertijo lógico sencillo, presentado con una estética tipo consola futurista.

La instrucción es algo como:  
**"Si A entonces B. Si B entonces C. ¿Cuál es la salida correcta?"**

Se le presentan cuatro botones con opciones: A, B, C y D. El jugador debe elegir cuál es la conclusión lógica más coherente. La opción correcta es "C", siguiendo la cadena de implicaciones.

## 🧠 ¿Qué se hace?

- El jugador analiza la lógica propuesta.
- Tiene que elegir una opción haciendo clic en uno de los botones.
- Si elige la opción correcta (C), se muestra un mensaje positivo y se redirige automáticamente al nivel 5.
- Si falla, tiene una segunda oportunidad.
- Si vuelve a fallar, el sistema le muestra un mensaje de fallo total y reinicia el nivel automáticamente.

## 🔁 Intentos

- Se permiten **2 intentos en total**.
- En el primer error, se muestra una advertencia para intentarlo de nuevo.
- En el segundo error, el juego reinicia el nivel.

## 🧪 Cómo funciona internamente

El sistema usa JavaScript para:
- Detectar el clic en cualquiera de los botones.
- Verificar si la opción elegida es correcta.
- Controlar el número de intentos con una variable (`attempts`).
- Mostrar retroalimentación en pantalla (`#feedback`).
- Redirigir al nivel 5 si se acierta, o reiniciar si se fallan ambos intentos.

Este nivel pone a prueba la atención del jugador y su capacidad para entender secuencias lógicas básicas, con una interfaz visualmente coherente con el estilo *Matrix* que CRUDY ha manejado desde el inicio.

![Image](https://github.com/user-attachments/assets/ce098f0c-a856-45fc-b015-541bd95d5d24)

**Hecho por: Juan David Barrera**

# 🧠 CRUDY - Nivel 5: Dominio del Código

¡Llegaste al final del sistema! Este nivel pone a prueba tu conocimiento en JavaScript con un mini quiz técnico. Si aciertas todas las preguntas, serás reconocido como el verdadero **Team Leader** que conquistó a CRUDY.

---

## 🎯 ¿Qué debes hacer?

- Responder 3 preguntas de selección múltiple.
- Hacer clic en el botón "Verificar respuestas".
- Ver tu resultado al instante.

---

## 📋 Contenido del quiz

1. **¿Cuál estructura se usa para múltiples condiciones fijas?**  
   → switch

2. **¿Cuál palabra clave evita que una variable cambie su valor?**  
   → const

3. **¿Qué método de arreglos recorre sin usar un bucle tradicional?**  
   → forEach

---

## 🧪 Funcionamiento interno

- Las respuestas correctas están en un objeto JavaScript.
- El sistema compara lo que seleccionaste con esas respuestas.
- Si aciertas todas, se muestra un mensaje de victoria y reconocimiento.
- Si fallas, obtienes tu puntuación y puedes volver a intentarlo sin penalización.

---

## 🧾 Resultado final

- ✅ **3/3 respuestas correctas:**  
  🎉 ¡Victoria total!  
  💚 Mensaje de celebración y agradecimiento al Team Leader.

- ⚠️ **Menos de 3:**  
  El sistema te da retroalimentación con tu puntuación.

---

## 💻 Tecnologías utilizadas

- HTML: estructura del formulario y botones
- CSS: estilo *cyber* (oscuro, moderno, legible)
- JavaScript: revisión de respuestas, puntuación y mensajes

---

## 🧠 ¿Por qué este nivel?

Este es el cierre del viaje. No hay trampas ni loops infinitos: solo tú, tu conocimiento, y un sistema esperando ser vencido con lógica y dedicación.

---

### 👑 ¡Buena suerte, Team Leader!

**Hecho por: Jeronimo Gutierrez Arias**
