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
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/about">Nosotros</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/contact">Contacto</Link>
						</Nav.Link>
						<NavDropdown title="Productos" id="collasible-nav-dropdown">
							<NavDropdown.Item>
								<Link className="Link" to="#">
									Arenas sanitarias
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link className="Link" to="#">
									Alimento para perros
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link className="Link" to="#">
									Alimento para gatos
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link eventKey={2}>
							<Link className="Link" to="#">
								<CartWidget></CartWidget>
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
