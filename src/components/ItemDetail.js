import React, { useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";

import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = item => {
	const [Carro, setCarro] = useState(0);
	const [addItem] = useContext(CartContext);
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
							<button className="botonCarro"></button>
						) : (
							<ItemCount
								stock={item.items.stock}
								initial={item.items.initial}
								onAdd={carrito}
								onClick={() => {
									addItem(
										item.items.id,
										item.items.title,
										item.items.description,
										item.items.pictureUrl,
										item.items.price,
										item.items.category,
										item.items.quantity,
										item.items.stock,
										item.items.initial,
										item.items.details,
										item.items.ingredients,
										Carro
									);
								}}
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
