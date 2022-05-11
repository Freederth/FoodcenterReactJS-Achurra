import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
	return (
		<MDBFooter color="blue" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="6">
						<h5 className="title">Foodcenter Concepción</h5>
						<p>¡Lo mejor en alimentación para tu mascota!</p>
						<p>
							Galvarino 999, Concepción, Chile
							<br />
							<strong>Teléfono:</strong> +56 9 13245678
							<br />
							<strong>Email:</strong> foodcenterccp@gmail.com
						</p>
					</MDBCol>
					<MDBCol md="3">
						<h5 className="title">Sociales</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">Instagram</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Facebook</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="3">
						<h5 className="title">Otros</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">Link 1</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 2</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="https://github.com/Freederth"> I. Achurra </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default FooterPage;
