import { Component } from "react";

// class Title extends Component {
// 	render() {
// 		return <p>TITLE</p>;
// 	}
// }

const Title = () => {
	return <p>NAME</p>;
};

// class Boton extends Component {
// 	render() {
// 		return <button>CLICK</button>;
// 	}
// }

const Boton = () => {
	return <button>CLICK</button>;
};
class List extends Component {
	render() {
		return (
			<table>
				<tr></tr>
				<td>
					<Title>JUAN</Title>
				</td>
				<td>
					<Boton></Boton>
				</td>
				<tr></tr>
				<td>
					<Title></Title>
				</td>
				<td>
					<Boton></Boton>
				</td>
				<tr></tr>
			</table>
		);
	}
}

export default List;
