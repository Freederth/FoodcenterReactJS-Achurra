import cart from "../assets/cart.svg";
import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const CartWidget = () => {
	const { Carrito } = useContext(CartContext);
	const elIcono = <img src={cart} alt="" height="20" />;

	console.log(Carrito);
	return (
		<>
			<button type="button" class="btn btn-dark">
				<div className="iconito"> {elIcono}</div>
				{Carrito.length > 0 ? (
					<span>{Carrito.reduce((a, b) => a + b.count, 0)}</span>
				) : null}
			</button>
		</>
	);
};

export default CartWidget;
