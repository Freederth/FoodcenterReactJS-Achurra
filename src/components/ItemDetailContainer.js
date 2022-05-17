import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "./ItemDetail";
import productServices from "../services/productServices";

import spinner from "../assets/spinning.gif";

const ItemDetailContainer = () => {
	let id = useParams();
	let userID = id.id;

	const [arrayItems2, setarrayItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		productServices(userID).then(res => {
			setarrayItems(res);
			setIsLoading(false);
		});
	}, [userID]);

	return (
		<div>
			{isLoading ? (
				<div>
					<img src={spinner} alt="carga" />
				</div>
			) : (
				<div className="detailContainer">
					<ItemDetail items={arrayItems2}></ItemDetail>
				</div>
			)}
		</div>
	);
};

export default ItemDetailContainer;
