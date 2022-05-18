import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import ItemList from "./ItemList";
import productServices from "../services/productServices";
import LoadingSpinner from "./LoadingSpinner";

// grilla de productos, por el momento tengo 4 para este demo
const ItemListContainer = ({ saludo }) => {
	let id = useParams();
	let userCategory = id.category;

	// intenté con varios modos y sólo useState me permite guardar mis productos posterior al render
	const [arrayItems, setarrayItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		productServices(null, userCategory).then(res => {
			setarrayItems(res);
			setIsLoading(false);
		});
	}, [userCategory]);

	return (
		<div>
			<h3>{saludo}</h3>
			<br />
			{isLoading ? (
				<LoadingSpinner></LoadingSpinner>
			) : (
				<Container>
					<div className="itemContainer">
						<ItemList items={arrayItems}></ItemList>
					</div>
				</Container>
			)}
		</div>
	);
};

export default ItemListContainer;
