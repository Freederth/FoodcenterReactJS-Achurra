import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// este navbar es un componente sacado de react-bootstrap
const NavBar = item => {
	return (
		<Navbar
			className="Navigation"
			collapseOnSelect
			sticky="top"
			expand="lg"
			bg="dark"
			variant="dark"
			defaultactivekey="/home"
		>
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img src={logo} alt="" height="20" /> Foodcenter Concepción
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Container>
							<Link to="/about">Nosotros</Link>
						</Container>

						<Container>
							<Link to="/contact">Contacto</Link>
						</Container>

						<NavDropdown title="Categorías" id="collasible-nav-dropdown">
							<NavDropdown.Item>
								<Link to="/category/arena">Arenas sanitarias</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/category/perro">Alimento para perros</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/category/gato">Alimento para gatos</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Container>
							<Link to="/cart">
								<CartWidget />
							</Link>
						</Container>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
