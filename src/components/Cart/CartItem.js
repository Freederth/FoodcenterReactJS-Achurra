import React, { useContext } from "react";
import { Button } from "react-bootstrap";

// IMPORTS DE PROYECTO
import { CartContext } from "../../context/CartContext";

let total = 0;

const CartItem = ({ name, img, id, count }) => {
	const carrito = useContext(CartContext);

	total = carrito.carrito.reduce(
		(acc, el) => acc + el.item.price * el.count,
		0
	);

	return (
		<div className="cont">
			<div className="row g-0">
				<div className="col-md-4 cartCositas">
					<img src={img} className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">
							<small className="text-muted"></small>
						</p>
						<h3>{count + " unidades"} </h3>
						<h6>{"TOTAL: $" + total}</h6>
					</div>
					<Button
						type="button"
						className="btn-close"
						variant="danger"
						aria-label="Close"
						onClick={() => carrito.removeItem(id)}
					></Button>
				</div>
			</div>
		</div>
	);
};

export { total };

export default CartItem;
