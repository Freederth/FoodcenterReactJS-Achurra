import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd, producto }) => {
	let [count, setCount] = useState(parseInt(initial));

	return (
		<div className="itemcount-container">
			<Button
				variant="danger"
				onClick={() => (count > 0 ? setCount(count - 1) : (count = 0))}
			>
				-
			</Button>
			<span> {count} </span>
			<Button
				variant="success"
				onClick={() => (count < stock ? setCount(count + 1) : null)}
			>
				+
			</Button>
			<br />
			<br />
			<Link to={`/cart/`}>
				<Button
					variant="secondary"
					onClick={() => {
						onAdd(count, producto);
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
