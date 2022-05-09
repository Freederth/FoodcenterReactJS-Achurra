import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";
import ItemCount from "./ItemCount";
import axios from "axios";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

let listaProductos = [];

function Producto(nombre, precio, stock, cantidad, categoria, id, img, title) {
	this.nombre = nombre;
	this.precio = precio;
	this.stock = stock;
	this.cantidad = cantidad;
	this.categoria = categoria;
	this.id = id;
	this.img = img;
	this.title = title;

	this.venta = function (cantidadComprada) {
		this.stock -= cantidadComprada;
	};
}

// estoy usando cards de react-bootstrap para los estilos, además, estoy llamando ItemCount como parte de su cuerpo
// teniendo como parte del mismo div los botones de subida y bajada.
const CardItem = ({ name, texto, img, stock, initial }) => {
	return (
		<Card bg="secondary" text="light" style={{ width: "18rem" }}>
			<Card.Img variant="top" src={img} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{texto}</Card.Text>
			</Card.Body>
			<ItemCount stock={stock} initial={initial}></ItemCount>
		</Card>
	);
};

// pienso después llamar mis productos desde el json que tengo armado acá abajo
const ItemCaller = async () => {
	const response = await axios("data.json");

	const data = response.data;
	data.forEach(producto =>
		listaProductos.push(
			new Producto(
				producto.nombre,
				producto.precio,
				producto.stock,
				producto.cantidad,
				producto.categoria,
				producto.id,
				producto.img,
				producto.title
			)
		)
	);
	return listaProductos;
};
ItemCaller();

const ItemListContainer = ({ saludo }) => {
	return (
		<Container>
			<h3>{saludo}</h3>
			<br />
			<br />
			<Row>
				<Col>
					<CardItem
						name="Perro adulto"
						texto="Vitalcan Complete perro adulto razas medianas y grandes"
						img={img1}
						stock="4"
						initial="1"
					></CardItem>
				</Col>
				<br />
				<Col>
					<CardItem
						name="Perro cachorro"
						texto="	Vitalcan Complete perro junior razas medianas y grandes"
						img={img4}
						stock="10"
						initial="1"
					></CardItem>
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<CardItem
						name="Gato adulto"
						texto="Vitalcan Complete gato adulto control peso"
						img={img3}
						stock="0"
						initial="0"
					></CardItem>
				</Col>
				<Col>
					<CardItem
						name="Gato cachorro"
						texto="Vitalcan Complete gatos cachorros para toda raza"
						img={img2}
						stock="8"
						initial="1"
					></CardItem>
				</Col>
			</Row>
		</Container>
	);
};

export default ItemListContainer;
