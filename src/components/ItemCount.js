import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = props => {
	const [count, setCount] = useState(parseInt(props.initial));

	const onAdd = () => {
		// condicional para evitar estar por encima del máximo (stock disponible)
		if (count < props.stock) {
			setCount(count + 1);
		}
	};

	const onSubtraction = () => {
		// condicional para evitar estar por debajo del valor inicial otorgado
		if (count > props.initial) {
			setCount(count - 1);
		}
	};

	return (
		<div className="itemcount-container">
			<Button variant="danger" onClick={onSubtraction}>
				-
			</Button>
			<span> {count} </span>
			<Button variant="success" onClick={onAdd}>
				+
			</Button>
			<br />
			<br />
			<Button variant="outline-light">Agregar al carrito</Button>
			<br />
			<br />
		</div>
	);
};

export default ItemCount;
