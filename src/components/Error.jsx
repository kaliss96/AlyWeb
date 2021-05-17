import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
	h1: {
		fontSize: "7.5em",
		margin: "15px 0px",
		fontWeight: "bold",
		color:"blue"
	},
	h2: {
		fontWeight: "bold",
		color:"blue"
	},
	pems : {color:"blue"},
});
const Error = () => {
	return (
		<div className="col-md-6 align-self-center">
			<h1 className={css(styles.h1)}>404</h1>
			<h2 className={css(styles.h2)}>Not found.</h2>
			<p className={css(styles.pems)}>
				El enlace no existe.
			</p>
		</div>
	);
};

export default Error;
