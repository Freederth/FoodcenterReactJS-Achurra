import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
	const { title, price, pictureUrl, id } = item;
	return (
		<div className="items">
			<Card bg="secondary" text="light" style={{ width: "18rem" }}>
				<Card.Text>
					<br />
					<span>{title}</span>
					<br />
					<span>
						<span>${price}</span>
					</span>
				</Card.Text>
				<Link to={`/detail/${id}`}>
					<Card.Img variant="top" src={pictureUrl} alt="foto de producto" />
				</Link>
				<Card.Body>
					<Button variant="dark">
						<Link className="letraLink" to={`/detail/${id}`}>
							¡Lo quiero!
						</Link>
					</Button>
				</Card.Body>
			</Card>

			<br />
		</div>
	);
};

export default Item;
