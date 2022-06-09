import React, { useState } from "react";

import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";

import MessageSuccess from "./MessageSuccess";

const styles = {
	containerShop: {
		textAlign: "center",
		paddingTop: 20
	},
	estiloBoton: {
		backgroundColor: "green",
		background:
			"radial-gradient(circle,rgba(108, 14, 14, 1) 77%,rgba(172, 34, 34, 1) 100%)",
		color: "white",
		height: "54px",
		width: "400px",
		borderRadius: "82px",
		fontSize: "18px",
		transition: "background, color 0.5s",
		outline: "#ff0000",
		border: "none",
		margin: "10px"
	}
};

const initialState = {
	name: "",
	mail: "",
	phone: ""
};

const Shopper = () => {
	const [user, setUser] = useState(initialState);
	//Este estado est´pa destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState("");

	const handleOnChange = e => {
		const { value, name } = e.target;
		setUser({ ...user, [name]: value });
		// console.log(values);
	};

	const onSubmit = async e => {
		e.preventDefault();
		// console.log(values);
		const docRef = await addDoc(collection(db, "Orders"), {
			user
		});

		console.log("Document written with ID: ", docRef.id);
		setPurchaseID(docRef.id);
		setUser(initialState);
	};

	return (
		<div style={styles.containerShop}>
			<h2>Comprador</h2>
			<form>
				<TextField
					placeholder="Nombre y apellido"
					style={{ margin: 10, width: 400 }}
					name="name"
					value={user.name}
					onChange={handleOnChange}
				/>
				<br />
				<TextField
					placeholder="Correo electrónico"
					style={{ margin: 10, width: 400 }}
					name="mail"
					value={user.mail}
					onChange={handleOnChange}
				/>
				<br />
				<TextField
					placeholder="Teléfono"
					style={{ margin: 10, width: 400 }}
					name="phone"
					value={user.phone}
					onChange={handleOnChange}
				/>
				<br />
				<Button variant="success" onClick={onSubmit}>
					Confirmar compra
				</Button>
			</form>
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>
	);
};

export default Shopper;
