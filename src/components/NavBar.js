import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget";
import React from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavBar = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			defaultActiveKey="/home"
		>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="" height="20" /> Foodcenter Concepción
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#">Nosotros</Nav.Link>
						<NavDropdown title="Productos" id="collasible-nav-dropdown">
							<NavDropdown.Item defaultActiveKey="#">
								Arenas sanitarias
							</NavDropdown.Item>
							<NavDropdown.Item href="#">Alimento para perros</NavDropdown.Item>
							<NavDropdown.Item href="#">Alimento para gatos</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link eventKey={2} href="#Carro">
							<CartWidget></CartWidget>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
