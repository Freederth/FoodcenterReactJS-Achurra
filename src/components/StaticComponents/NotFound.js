import React from "react";
import { Link } from "react-router-dom";

import cueva from "../../assets/cave.png";

const NotFound = () => {
	return (
		<div>
			<br />
			<h2>ERROR 404: Acá sólo vienen moscas</h2>
			<br />
			<img src={cueva} alt="siga buscando" />
			<br /> <br />
			<Link style={{ textDecoration: "none" }} to={`/`}>
				<strong>¿Y si vamos al inicio?</strong>
			</Link>
		</div>
	);
};

export default NotFound;
