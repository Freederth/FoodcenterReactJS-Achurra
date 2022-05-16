import React, { useState } from "react";

import ItemDetail from "./ItemDetail";

import productServices from "../services/productServices";

const ItemDetailContainer = () => {
	const [arrayItems2, setarrayItems] = useState([]);
	// no utilicé getItem porque ya tengo mi productService que se encarga de demorarse 2 segundos
	productServices().then(res => {
		setarrayItems(res);
	});

	return (
		<>
			<ItemDetail item={arrayItems2}></ItemDetail>
		</>
	);
};

export default ItemDetailContainer;
