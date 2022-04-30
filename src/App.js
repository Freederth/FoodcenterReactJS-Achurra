import "./App.css";
// import Function from "./components/Function";
import Class from "./components/Class";
// import List from "./components/List";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<header className="App-header"></header>
			{/* <Function></Function> */}
			<Class name="TEST"></Class>

			{/* <List></List> */}
		</div>
	);
}

export default App;
