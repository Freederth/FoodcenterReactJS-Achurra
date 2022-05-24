import React from "react";
import { Button, Row, Col } from "react-bootstrap";

function Cart() {
	return (
		<div>
			<br />
			<h1>CARRITO</h1>
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
		</div>
	);
}

export default Cart;
