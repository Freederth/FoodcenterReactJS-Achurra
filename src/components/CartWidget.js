import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import cart from "../assets/cart.svg";

import { CartContext } from "../context/CartContext";

const elCarro = <img src={cart} width="18px" alt="carro de compra" />;

const CartWidget = () => {
	const { carrito } = useContext(CartContext);

	return (
		<Button variant="outline-light">
			{elCarro} Carrito
			{carrito.length > 0 ? (
				<Badge bg="secondary">{carrito.reduce((a, b) => a + b.count, 0)}</Badge>
			) : null}
		</Button>
	);
};

export default CartWidget;
