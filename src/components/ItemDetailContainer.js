import React, { useState } from "react";

import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

import productServices from "../services/productServices";

const ItemDetailContainer = () => {
	let id = useParams();
	let userID = id.id;

	const [arrayItems2, setarrayItems] = useState([]);
	productServices(userID).then(res => {
		setarrayItems(res);
		console.log(res);
		console.log(userID);
	});

	return (
		<div className="detailContainer">
			<ItemDetail item={arrayItems2}></ItemDetail>
		</div>
	);
};

export default ItemDetailContainer;
