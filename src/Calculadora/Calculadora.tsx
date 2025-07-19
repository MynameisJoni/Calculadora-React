import styles from "./Calculadora.module.css";
import { Fragment, useState } from "react";

const Calculadora = () => {
	var [numero, setNumero] = useState("");
	var [numero1, setNumero1] = useState("");
	var [operacion, setOperacion] = useState("");

	return (
		<>
			<table className={styles.tabla}>
				<thead>
					<tr>
						<th colSpan={4} className={styles.resultado}>
							{numero}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td
							className={styles.celda}
							onClick={() => {
								setNumero((numero += "7"));
							}}
						>
							7
						</td>
						<td
							className={styles.celda}
							onClick={() => {
								setNumero((numero += "8"));
							}}
						>
							8
						</td>
						<td
							className={styles.celda}
							onClick={() => {
								setNumero((numero += "9"));
							}}
						>
							9
						</td>
						<td
							className={styles.signo}
							onClick={() => {
								setNumero1(numero);
								setNumero("");
								setOperacion("/");
							}}
						>
							/
						</td>
					</tr>
					<tr>
						<td
							className={styles.celda}
							onClick={() => setNumero((numero += "4"))}
						>
							4
						</td>
						<td
							className={styles.celda}
							onClick={() => setNumero((numero += "5"))}
						>
							5
						</td>
						<td
							className={styles.celda}
							onClick={() => setNumero((numero += "6"))}
						>
							6
						</td>
						<td
							className={styles.signo}
							onClick={() => {
								setNumero1(numero);
								setNumero("");
								setOperacion("*");
							}}
						>
							*
						</td>
					</tr>
					<tr>
						<td
							className={styles.celda}
							onClick={() => setNumero((numero += "1"))}
						>
							1
						</td>
						<td
							className={styles.celda}
							onClick={() => setNumero((numero += "2"))}
						>
							2
						</td>
						<td
							className={styles.celda}
							onClick={() => setNumero((numero += "3"))}
						>
							3
						</td>
						<td
							className={styles.signo}
							onClick={() => {
								setNumero1(numero);
								setNumero("");
								setOperacion("-");
							}}
						>
							-
						</td>
					</tr>
					<tr>
						<td
							className={styles.celda}
							onClick={() => setNumero((numero += "0"))}
						>
							0
						</td>
						<td
							className={styles.signo}
							onClick={() => {
								setNumero("");
								setNumero1("");
								setOperacion("");
							}}
						>
							C
						</td>
						<td
							className={styles.signo}
							onClick={() => {
								switch (operacion) {
									case "+":
										setNumero(
											(parseFloat(numero1) + parseFloat(numero)).toString()
										);
										break;
									case "-":
										setNumero(
											(parseFloat(numero1) - parseFloat(numero)).toString()
										);
										break;
									case "*":
										setNumero(
											(parseFloat(numero1) * parseFloat(numero)).toString()
										);
										break;
									case "/":
										setNumero(
											(parseFloat(numero1) / parseFloat(numero)).toString()
										);
										break;
								}
								//console.log(numero);
							}}
						>
							=
						</td>
						<td
							className={styles.signo}
							onClick={() => {
								setNumero1(numero);
								setOperacion("+");
								setNumero("");
							}}
						>
							+
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Calculadora;
