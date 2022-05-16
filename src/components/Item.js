import React from "react";
import { Card } from "react-bootstrap";

import ItemCount from "./ItemCount";

const Item = item => {
	return (
		<div className="items">
			{/* estoy usando cards de react-bootstrap para los estilos, además, estoy
			llamando ItemCount como parte de su cuerpo, teniendo como parte del
			mismo div los botones de subida y bajada. */}
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
					<span>{item.description}</span> <br />
				</Card.Body>
				{/* aquí llamo el componente ItemCount */}
				<ItemCount stock={item.stock} initial={item.initial}></ItemCount>
			</Card>
			<br />
		</div>
	);
};

export default Item;
