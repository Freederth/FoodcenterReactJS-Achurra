import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar></NavBar>
			</header>
			<main className="listaProductos">
				<ItemListContainer saludo="Bienvenidos a mi tienda de mascotas"></ItemListContainer>
			</main>
		</div>
	);
}

export default App;
