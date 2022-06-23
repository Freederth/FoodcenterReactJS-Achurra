import React from "react";

const FooterPage = () => {
	return (
		<footer>
			<div className="font-small pt-4 mt-4">
				<div className="row g-0">
					<div className="col-md-6">
						<h5 className="title">Foodcenter Concepción</h5>
						<p>¡Lo mejor en alimentación para tu mascota!</p>
						<p>
							Galvarino 999, Concepción, Chile
							<br />
							<strong>Teléfono:</strong> +56 9 13245678
							<br />
							<strong>Email:</strong> foodcenterccp@gmail.com
						</p>
					</div>
					<div className="col-md-3">
						<h5 className="title">Sociales</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">Instagram</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Facebook</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h5 className="title">Otros</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">Link 1</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 2</a>
							</li>
						</ul>
					</div>

					<div className="footer-copyright text-center py-3">
						<div className="container-fluid">
							&copy; {new Date().getFullYear()} Copyright:{" "}
							<a
								href="https://github.com/Freederth"
								target="_blank"
								rel="noopener noreferrer"
							>
								I. Achurra
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterPage;
