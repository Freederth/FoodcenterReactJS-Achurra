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
			<main class="listaProductos">
				<ItemListContainer></ItemListContainer>
			</main>
		</div>
	);
}

export default App;
