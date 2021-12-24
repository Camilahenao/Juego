# Reto Sofka
Inicialmente es necesario clonar repositorio https://github.com/Camilahenao/Reto para poder ejecutarlo, adicional es necesario tener instalado:
* Spring boot 2.6.2
* Java 8
* SQLite 3.25.2
* Angular CLI 13.0.1

No requiere instalaciones adicionales ni configuración de bases de datos ya que la persistencia se maneja mediante un archivo de base de datos SQLite que se genera automáticamente la primera vez que se compila el proyecto.

En este proyecto vamos a modelar un concurso de preguntas y respuestas, la intención es diseñar
una solución que permita tener un banco de preguntas con diferentes opciones para una
única respuesta, además cada pregunta debe estar en una categoría o un grupos de
preguntas similares del mismo nivel, por cada ronda se deberá asignar un premio a conseguir,
las rondas del juego son nivel que van aumentando en la medida que el jugador gana premios. 
- Doumento enviado por sofka univerisy

Se identifica lo siguientes:
* Problema planteado
* Entidades
* Funcionalidades

Tecnologías utilizadas para el desarrollon del proyecto
* IDE Java (Eclipse, Netbeans, Intellij)
* node js 
* Angular. Para confirarlo: --> npm install --> ng serve --> ejecutar el API y clonarlo 
* Se configura el localhost4200
* Visual studio code (editor de código)
* DB Browser for SQLite
* Spring boot 2.6.2
* POO

Configuración del juego:
Aplicación web que permite al usuario jugar al clásico preguntas y respuestas, en este caso se tienen preguntas con 4 opciones de respuesta, pero solo una es la correcta.

Se compone por:
5 categorías: Muy fácil, fácil, medio, difícil y muy difícil
25 preguntas iniciales (5 por categoría) y cada una con sus 4 opciones de respuesta

Se crea una rama adicional ya que se tuvo un inconveniente con git al subirla

Página inicial:
-> Jugador inicia en la pantalla principal donde tiene opciones para:

- Configurar juego: Esta opción permite al usuario crear una pregunta.

- Lista de preguntas: Accediendo a esta opción podrá visualizar todas las preguntas existentes y se visualiza la categoría a la que pertenece

- Iniciar juego: Se ingresa a esta opción para comenzar el juego, se ingresa el nombre del jugador si es primer vez o se selecciona de la lista un jugador ya existente para continuar con la partida.
- Histórico: Se almacena la información de los jugadores, teniendo como campos: Nombre, ronda y puntaje

Botones:
Guardar: Almacena la información
Regresa: Vuelve a la página anterior.

Maria Camila Henao M.
