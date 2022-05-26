import React from "react";
import { Button, Row, Col } from "react-bootstrap";

import { CartProvider } from "../context/CartContext";

const Cart = () => {
	return (
		<div>
			<br />
			<h1>CARRITO</h1>
			<CartProvider>
				<Row>
					<Col>
						<p>
							<b>Productos:</b>
						</p>
					</Col>
					<Col>
						<Button> Finalizar compra</Button>
					</Col>
				</Row>
			</CartProvider>
		</div>
	);
};

export default Cart;
