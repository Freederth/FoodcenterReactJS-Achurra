import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import FooterPage from "./components/FooterPage";

function App() {
	return (
		<div className="App">
			<header>
				{/* hola soy el navbar */}
				<NavBar></NavBar>
			</header>
			<main className="listaProductos">
				{/* le entrego un texto por prop a ItemListContainer */}
				<ItemListContainer saludo="Bienvenidos a mi tienda de mascotas"></ItemListContainer>
			</main>
			<footer>
				<FooterPage></FooterPage>
			</footer>
		</div>
	);
}

export default App;
