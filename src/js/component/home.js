/* import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import { SecondsCounter } from "./SecondsCounter.js";

export function Home() {
	// console.log(posicion4, contador);
	let posicion4 = 0; // Math.floor(contador / 10000);
	let posicion3 = 0; // Math.floor(contador / 1000);
	let posicion2 = 0; /// Math.floor(contador / 100);
	let posicion1 = 0;
	let contador = 0;
	return (
		<div className="text-center  text-white home">
			<SecondsCounter
				digitouno={posicion1}
				digitodos={posicion2}
				digitotres={posicion3}
				digitocuatro={posicion4}
			/>
		</div>
	);
} */

import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import { SecondsCounter } from "./SecondsCounter.js";

export function Home() {
	return (
		<div className="text-center  text-white home">
			<SecondsCounter />
		</div>
	);
}
