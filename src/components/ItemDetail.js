import React from "react";
import { Card, Container } from "react-bootstrap";

import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
	const { name, img, id, details, ingredients, amount, price, stock, weight } =
		item;

	console.log(item);

	return (
		<>
			<div className="itemDetails">
				<div className="theItems">
					<Card bg="secondary" text="light" style={{ width: "18rem" }}>
						<Card.Text>
							<br />
							<span>{name}</span>
							<br />
							<span>
								<span>${price}</span>
								<br />
								<span>{weight}</span>
							</span>
						</Card.Text>

						<Card.Img variant="top" src={img} alt="foto de producto" />

						<Card.Body>
							<span>¡Quedan: {stock} unidades!</span> <br /> <br />
							<ItemCount stock={stock} initial={amount} onAdd={0}></ItemCount>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div className="detailText">
				<Container>
					<h3>Detalles del producto:</h3>
					<p> {details} </p>
					<h4>Ingredientes</h4>
					<p>{ingredients}</p>
				</Container>
			</div>
		</>
	);
};

export default ItemDetail;
