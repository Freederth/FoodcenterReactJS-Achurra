import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	collection,
	query,
	where,
	getDocs,
	documentId
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import ItemDetail from "./ItemDetail";
import LoadingSpinner from "./LoadingSpinner";

const ItemDetailContainer = () => {
	const [comidaData, setComidaData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();

	// let comidaId = id.id;

	// console.log(comidaId);

	useEffect(() => {
		const getComidaData = async () => {
			const q = query(
				collection(db, "Productos"),
				where(documentId(), "==", id)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log(querySnapshot);
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setComidaData(docs);
		};
		getComidaData();
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	}, [id]);

	return (
		<div>
			{isLoading ? (
				<div className="Spinner">
					<LoadingSpinner />
				</div>
			) : (
				comidaData.map(comidaData => {
					return <ItemDetail item={comidaData} key={comidaData.id} />;
				})
			)}
		</div>
	);
};

export default ItemDetailContainer;
