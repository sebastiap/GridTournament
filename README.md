# Practica con Sitio de Pruebas - Grid Tournament 🧩
El objetivo de este sitio es servir como practica y repaso de CSS, creando distintas estructuras con CSS grid y FlexBox, aprendiendo las ventajas y diferencias de cada uno.
Este sitio adaptara pequeños juegos diseñados por mi mismo. 

Sitio online en Github Pages :
No disponible aun.

## Explicacion de los Juegos
### Torneo
Adaptacion de un juego realizado previamente en Vue con Bootstrap. Esta version en react contara con una mejor visualizacion.

### Tarot
Tirada basica de 3 cartas.

### Card Generator
Generador de Cartas con datos Basicos.

## Conceptos Generales
* Buenas Practicas en Estructura de directorios
* Uso de IA - Tabnine

## Conceptos React
### Conceptos Teoricos
* Routes (v6)

## CSS
* Css Grid Layout
* Flexbox Layout


## Pendientes
- [x] Css Grid Layout
- [x] FlexBox Layout(interno) - Opcion Menu
- [X] FlexBox Layout(interno)
- [X] Canvas


## Juegos
- [X]  Torneo
- [X]  Tarot
- [X]  Creador de Cartas


## Opcionales
- [ ] Storage en una BD
- [ ]  Storage en JSON
- [ ] Backend en Node/Python



## Problemas Resueltos - General 🐛🦗🐞


## Problemas Resueltos - Github Pages 🐛

### Ejecutar pagina en Github Pages 🦋
Seguir las instrucciones de https://github.com/gitname/react-gh-pages
Ejecutar el siguiente comando para deployar:
~~~
npm run deploy
~~~

### TypeError: MiniCssExtractPlugin is not a constructor 🦋
Originalmente mi repositorio remoto se llamaba github, tuve que agregar una referencia con el nombre origin
~~~
npm i -D --save-exact mini-css-extract-plugin@2.4.5
~~~

### Failed to get remote.origin.url 🦋
Originalmente mi repositorio remoto se llamaba github, tuve que agregar una referencia con el nombre origin
~~~
git remote add origin https://github.com/sebastiap/spika-games.git
~~~

### Imagenes no encontradas 🐜
La solucion mas facil y creo que mas conveniente a la larga , es hacer referencia a la ubicacion de las imagenes en github. Para un server diferente debere apuntar con
una variable PATH.

### Server Local falla luego de configurar GHPAGES 🐜
Por lo visto, algo empezo a fallar localmente, luego de fixear algunos errores menores, me doy cuenta que no es que no anda, si no que tarda unos segundos en renderizar el CSS.
No se si hay solucion para esto o es un bug, pero dado que es solo local y para este proyecto no es un error importante.
