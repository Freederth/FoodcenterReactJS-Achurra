import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import FooterPage from "../components/FooterPage";

function Home() {
	return (
		<div>
			<main className="listaProductos">
				{/* le entrego un texto por prop a ItemListContainer */}
				<ItemListContainer saludo="Bienvenidos a mi tienda de alimentos"></ItemListContainer>
				<ItemDetailContainer></ItemDetailContainer>
			</main>
			<footer>
				<FooterPage></FooterPage>
			</footer>
		</div>
	);
}

export default Home;
