import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";

const Boton = ({ name }) => {
	return <Button variant="primary">{name}</Button>;
};

const Title = ({ name }) => {
	return <p>{name}</p>;
};

const ItemListContainer = ({ saludo }) => {
	return (
		<Container>
			<h3>{saludo}</h3>
			<br />
			<br />
			<Row>
				<Col>
					<Title name="Producto 1"></Title>
				</Col>
				<Col>
					<Boton name="Compra"></Boton>
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<Title name="Producto 2"></Title>
				</Col>
				<Col>
					<Boton name="Compra"></Boton>
				</Col>
			</Row>
			<br />
		</Container>
	);
};

export default ItemListContainer;
