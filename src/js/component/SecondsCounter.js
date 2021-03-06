//funciona bien
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	return (
		<div className="text-center  text-white home">
			<div className="counter">
				<div className="reloj">
					<FontAwesomeIcon icon={faClock} />
				</div>
				<div className="digitoseis">{props.digitoseis}</div>
				<div className="digitocinco">{props.digitocinco}</div>
				<div className="digitocuatro">{props.digitocuatro}</div>
				<div className="digitotres">{props.digitotres}</div>
				<div className="digitodos">{props.digitodos}</div>
				<div className="digitouno">{props.digitouno}</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitouno: PropTypes.number,
	digitodos: PropTypes.number,
	digitotres: PropTypes.number,
	digitocuatro: PropTypes.number,
	digitocinco: PropTypes.number,
	digitoseis: PropTypes.number
};

// No funciona preguntar pq???
/* import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	let posicion4 = 0; // Math.floor(contador / 10000);
	let posicion3 = 0; // Math.floor(contador / 1000);
	let posicion2 = 0; /// Math.floor(contador / 100);
	let posicion1 = 9;
	let contador = 0;

	setInterval(function() {
		posicion4 = Math.floor((contador / 1000) % 10);
		posicion3 = Math.floor((contador / 100) % 10);
		posicion2 = Math.floor(contador / 10) % 10;
		posicion1 = Math.floor(contador / 1) % 10;
		contador++;
		console.log(posicion4, contador);
		return (
			<div className="text-center  text-white home">
				<div className="counter">
					<div className="reloj">
						<FontAwesomeIcon icon={faClock} />
					</div>
					<div className="digitocuatro">{posicion4}</div>
					<div className="digitotres">{posicion3}</div>
					<div className="digitodos">{posicion2}</div>
					<div className="digitouno">{posicion1}</div>
				</div>
			</div>
		);
	}, 1000);

	//console.log(posicion4, contador);
}

SecondsCounter.propTypes = {
	digitouno: PropTypes.number,
	digitodos: PropTypes.number,
	digitotres: PropTypes.number,
	digitocuatro: PropTypes.number
}; */
