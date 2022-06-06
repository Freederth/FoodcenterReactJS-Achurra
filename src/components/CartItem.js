import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";

const CartItem = ({ name, description, img, id, count }) => {
	const carrito = useContext(CartContext);

	return (
		<div className="cont">
			<div className="row g-0">
				<div className="col-md-4 cartCositas">
					<img src={img} className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{description}</p>
						<p className="card-text">
							<small className="text-muted"></small>
						</p>
						<h3>{count + " unidades"} </h3>
						<h6>
							{"TOTAL: $" +
								carrito.carrito.reduce(
									(acc, el) => acc + el.item.price * el.count,
									0
								)}
							;
						</h6>
					</div>
					<button
						type="button"
						className="btn-close"
						aria-label="Close"
						onClick={() => carrito.removeItem(id)}
					></button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
