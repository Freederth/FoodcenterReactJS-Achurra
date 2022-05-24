import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));

	const sumaProducto = () => {
		// comprobación de stock
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const restaProducto = () => {
		// comprobación para que el inicial no sea menor a 1
		if (count > initial) {
			setCount(count - 1);
		}
	};

	return (
		<div className="itemcount-container">
			<Button variant="danger" onClick={() => restaProducto()}>
				-
			</Button>
			<span> {count} </span>
			<Button variant="success" onClick={() => sumaProducto()}>
				+
			</Button>
			<br />
			<br />
			<Link to={`/cart/`}>
				<Button variant="secondary" onClick={() => onAdd(count)}>
					Agregar al carrito
				</Button>
			</Link>
			<br />
			<br />
		</div>
	);
};

export default ItemCount;
