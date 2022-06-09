import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// este navbar es un componente sacado de react-bootstrap
const NavBar = () => {
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
				<Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/about">Nosotros</Link>
						</Nav.Link>

						<Nav.Link>
							<Link to="/contact">Contacto</Link>
						</Nav.Link>

						<NavDropdown title="Categorías">
							<NavDropdown.Item key="arena">
								<Link to="/category/arena">Arenas sanitarias</Link>
							</NavDropdown.Item>
							<NavDropdown.Item key="comidaPerro">
								<Link to="/category/perro">Alimento para perros</Link>
							</NavDropdown.Item>
							<NavDropdown.Item key="comidaGato">
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
