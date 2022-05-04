import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import { Component } from "react";

class Boton extends Component {
	render() {
		return <Button variant="primary">{this.props.name}</Button>;
	}
}

class Greetings extends Component {
	render() {
		return <span>{this.props.name}</span>;
	}
}

class Title extends Component {
	render() {
		return <p>{this.props.name}</p>;
	}
}

const ItemListContainer = () => {
	return (
		<Container>
			<h3>
				Buenas tardes, <Greetings name="cliente"></Greetings>. ¿Qué producto
				desea hoy?
			</h3>
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
