import React from "react";
import { Card } from "react-bootstrap";

import ItemCount from "./ItemCount";

const Item = item => {
	return (
		<div className="itemContainer">
			{/* estoy usando cards de react-bootstrap para los estilos, además, estoy
			llamando ItemCount como parte de su cuerpo, teniendo como parte del
			mismo div los botones de subida y bajada. */}
			<Card bg="secondary" text="light" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={item.pictureUrl} alt="foto de producto" />
				<Card.Body>
					<span>{item.title}</span>
					<span>{item.description}</span>
					<span>${item.price}</span>
				</Card.Body>
				{/* aquí llamo el componente ItemCount */}
				<ItemCount stock={item.stock} initial={item.initial}></ItemCount>
			</Card>
			<br />
		</div>
	);
};

export default Item;
