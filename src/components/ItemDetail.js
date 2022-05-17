import React from "react";
import { Card } from "react-bootstrap";

import ItemCount from "./ItemCount";

const ItemDetail = item => {
	console.log("trolo", item);
	return (
		<div className="itemDetail">
			<Card bg="secondary" text="light" style={{ width: "18rem" }}>
				<Card.Text>
					<br />
					<span>{item.title}</span>
					<br />
					<span>
						<span>${item.price}</span>
					</span>
				</Card.Text>

				<Card.Img variant="top" src={item.pictureUrl} alt="foto de producto" />

				<Card.Body>
					<span>{item.description}</span> <br /> <br />
					{/* aquí llamo el componente ItemCount */}
					<ItemCount stock={item.stock} initial={item.initial}></ItemCount>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ItemDetail;
