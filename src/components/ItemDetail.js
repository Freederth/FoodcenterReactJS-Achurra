import React from "react";
import { Container } from "react-bootstrap";

const ItemDetail = ({ item }) => {
	return (
		<div className="item-container">
			<Container>
				<span>${item.price}</span>
				<img src={item.pictureUrl} alt="fotito" />
				<span>{item.title}</span>
				<span>{item.description}</span>
			</Container>
		</div>
	);
};

export default ItemDetail;
