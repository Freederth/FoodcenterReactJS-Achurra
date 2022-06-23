import React from "react";
import FooterPage from "../components/StaticComponents/FooterPage";

const About = () => {
	return (
		<div class="mainAcerca" id="acercaDe">
			<br />
			<h2>Acerca de nosotros</h2>
			<div class="article container" style={{ textAlign: "left" }}>
				<br />
				<p>
					Somos distribuidores oficiales de <strong>Vitalcan</strong> en Chile,
					trayendo los precios más económicos que podría obtener. Nuestro
					compromiso es traer alimentos de alta calidad al alcance de todo
					bolsillo, por eso es que traemos las diferentes gamas de precios que
					tiene para ofrecer la marca.
				</p>
				<p>
					Contamos con las gamas de <strong> Vitalcan</strong>:
					<strong> Nutrique</strong> (gama súper premium),
					<strong> Therapy</strong> (alimento medicado),
					<strong> Balanced</strong> (gama media),
					<strong> Premium</strong> (gama premium),
					<strong> Complete</strong> (gama media), <strong> Hop</strong> (gama
					media baja) y <strong> Belcan</strong> (gama baja).
				</p>
				<p>
					Por otra parte, traemos arenas sanitarias de la marca
					<strong> Canada Litter</strong>, de altísima calidad para regalonear a
					su minino como corresponde.
				</p>
			</div>

			<div class="container vitalinfo" style={{ textAlign: "left" }}>
				<p>
					Vitalcan nace en 2001, en Argentina impulsados por la pasión
					emprendedora y un objetivo claro: mejorar la vida de las mascotas a
					través del desarrollo, producción, comercialización y distribución de
					las mejores soluciones nutricionales integrales. Así, se convirtieron
					en la primera empresa latinoamericana en lograr un acuerdo de
					investigación con una universidad nacional, conformando su propio
					Centro de Investigación y Desarrollo en la Facultad de Ciencias
					Veterinarias de la Universidad Nacional del Centro (UNICEN), ubicada
					en Tandil. Son la única compañía que investiga y produce en la
					Argentina. Sus productos, respaldados por veterinarios especialistas
					en nutrición, se comercializan únicamente en veterinarias y pet shops.
				</p>
			</div>

			<div class="container misyvis" style={{ textAlign: "left" }}>
				<br />
				<div class="row">
					<div class="col-6" id="mis">
						<h5>MISIÓN</h5>
						<p>
							SER LÍDER EN VIII REGIÓN ENTRE LAS EMPRESAS DE DISTRIBUCIÓN, PARA
							LOS CANALES DE VENTA TRADICIONAL Y ESPECIALIZADO, REALIZANDO UN
							TRABAJO SEGURO, LIMPIO Y SUSTENTABLE.
						</p>
					</div>
					<div class="col-6" id="vis">
						<h5>VISIÓN</h5>
						<p>
							ACELERAR PARTICIPACION DE MERCADO Y CRECIMIENTO SOSTENIDO A TRAVES
							DEL LIDERAZGO Y CALIDAD DE NUESTRO PRODUCTOS.
						</p>
					</div>
				</div>
			</div>

			<div class="container perrofeliz col-lg-2">
				<br />
				<img
					src="https://firebasestorage.googleapis.com/v0/b/foodcenter-ccp.appspot.com/o/dogcat.png?alt=media&token=08b60623-c06d-4aff-b2c2-4293b86741b8"
					alt="dog and cat smile"
					width="300"
				/>
			</div>
			<FooterPage />
		</div>
	);
};

export default About;
