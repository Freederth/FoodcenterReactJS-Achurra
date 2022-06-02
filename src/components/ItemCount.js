import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
	let [count, setCount] = useState(parseInt(initial));

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
			<Button
				variant="danger"
				onClick={() => (count > 0 ? restaProducto() : (count = 0))}
			>
				-
			</Button>
			<span> {count} </span>
			<Button
				variant="success"
				onClick={() => (count > 0 ? sumaProducto() : null)}
			>
				+
			</Button>
			<br />
			<br />
			<Link to={`/cart/`}>
				<Button
					variant="secondary"
					onClick={() => {
						onAdd(count);
						setCount(0);
					}}
				>
					Agregar al carrito
				</Button>
			</Link>
			<br />
			<br />
		</div>
	);
};

export default ItemCount;
