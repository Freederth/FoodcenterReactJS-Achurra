import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";

const ItemDetail = item => {
	const [Carro, setCarro] = useState(0);
	function carrito(productosCarro) {
		setCarro(productosCarro);
	}
	return (
		<div className="itemDetail">
			<div className="theItems">
				<Card bg="secondary" text="light" style={{ width: "18rem" }}>
					<Card.Text>
						<br />
						<span>{item.items.title}</span>
						<br />
						<span>
							<span>${item.items.price}</span>
						</span>
					</Card.Text>

					<Card.Img
						variant="top"
						src={item.items.pictureUrl}
						alt="foto de producto"
					/>

					<Card.Body>
						<span>{item.items.description}</span> <br /> <br />
						{/* aquí llamo el componente ItemCount */}
						{Carro ? (
							<button className="botonCarro">
								<Link to="/cart">
									Finalizar la compra de ({Carro} productos)
								</Link>
							</button>
						) : (
							<ItemCount
								stock={item.items.stock}
								initial={item.items.initial}
								onAdd={carrito}
							></ItemCount>
						)}
					</Card.Body>
				</Card>
			</div>
			<div className="detailText">
				<Container>
					<h3>Detalles del producto:</h3>
					<p> {item.items.details} </p>
					<h4>Ingredientes</h4>
					<p>{item.items.ingredients}</p>
				</Container>
			</div>
		</div>
	);
};

export default ItemDetail;
