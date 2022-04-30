// import { Component } from "react";
import logo from "../logo.svg";

import { Nav } from "react-bootstrap";

const NavBar = () => {
	return (
		<Nav variant="pills" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href="/home">
					<img src={logo} alt="" height="20" /> Foodcenter Concepción
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/nosotros" eventKey="/Nosotros">
					Nosotros
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" eventKey="/Arenas">
					Arenas sanitarias
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" eventKey="/Alimentos">
					Alimentos para perros
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" eventKey="/Alimentos">
					Alimentos para gatos
				</Nav.Link>
			</Nav.Item>
			{/* <Nav.Item>
				<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>
			</Nav.Item> */}
		</Nav>
	);
};

export default NavBar;
