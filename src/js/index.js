//funciona perfecto segun video

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";
import { SecondsCounter } from "./component/SecondsCounter.js";

let posicion6 = 0;
let posicion5 = 0;
let posicion4 = 0;
let posicion3 = 0;
let posicion2 = 0;
let posicion1 = 0;
let contador = 0;
setInterval(function() {
	posicion6 = Math.floor((contador / 100000) % 10);
	posicion5 = Math.floor((contador / 10000) % 10);
	posicion4 = Math.floor((contador / 1000) % 10);
	posicion3 = Math.floor((contador / 100) % 10);
	posicion2 = Math.floor(contador / 10) % 10;
	posicion1 = Math.floor(contador / 1) % 10;
	contador++;
	//console.log(posicion4, contador);
	ReactDOM.render(
		<SecondsCounter
			digitouno={posicion1}
			digitodos={posicion2}
			digitotres={posicion3}
			digitocuatro={posicion4}
			digitocinco={posicion5}
			digitoseis={posicion6}
		/>,
		document.querySelector("#app")
	);
}, 100);

/* //prueba con home no funciona preguntar porque?
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import { Home } from "./component/home.js";
ReactDOM.render(<Home />, document.querySelector("#app"));
 */
