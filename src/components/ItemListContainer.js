import { Container } from "react-bootstrap";
import React, { useState } from "react";
import ItemList from "./ItemList";

import productServices from "../services/productServices";

// grilla de productos, por el momento tengo 4 para este demo
const ItemListContainer = ({ saludo }) => {
	// intenté con varios modos y sólo useState me permite guardar mis productos posterior al render
	const [arrayItems, setarrayItems] = useState([]);
	productServices().then(res => {
		setarrayItems(res);
		console.log(res);
	});

	return (
		<Container>
			<h3>{saludo}</h3>
			<br />
			<div className="itemContainer">
				<ItemList items={arrayItems}></ItemList>
			</div>
		</Container>
	);
};

export default ItemListContainer;
