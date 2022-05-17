import React from "react";
import { Card } from "react-bootstrap";

import ItemCount from "./ItemCount";

const ItemDetail = item => {
	return (
		<div className="itemDetail">
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
					<ItemCount
						stock={item.items.stock}
						initial={item.items.initial}
					></ItemCount>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ItemDetail;
