# Hotels-Almundo
Ejercicio Frontend Almundo  Listado de Hoteles con filtros dinamicos,  AngularJS 1.6 y Redux

agrego unos graficos para entender mejor el flujo de redux

![Screenshot](doc/diagram-redux.gif)
![Screenshot](doc/diagram-redux-MW.gif)


Se deployo la Apliacion en Amazon
http://ec2-13-58-208-162.us-east-2.compute.amazonaws.com/#!/hotels/madrid-1282466

# Backend : Api Restful Node
## Tecnologias Utilizadas
* Express
* Mongoose
* ES6
* Mocha
* Chai

## Para deployar
* ejecutar mongoimport --db hotels --collection hotels --file "/api/dump/allResult.js" --jsonArray
* Ir a "/api"
* npm install
* npm start
* levanta en http://localhost:8081/api/hotels

# Frontend : App AngularJS 1.6
## Tecnologias Utilizadas
* AngularJS
* Redux
* ES6
* Express
* Gulp
* Sass

## Para deployar
* npm install
* npm run serve
* levanta en http://localhost:8080/#!/hotels/madrid-1282466
