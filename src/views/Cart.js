import React, { useContext, useState, useEffect } from "react";

import { CartContext } from "../context/CartContext";
import FooterPage from "../components/FooterPage";
import CartItem from "../components/CartItem";
import LoadingSpinner from "../components/LoadingSpinner";

const Cart = () => {
	const { carrito } = useContext(CartContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	});

	//console.log(carrito);

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					{carrito.length > 0 ? (
						carrito.map(carr => {
							return (
								<CartItem
									key={carr.item.id}
									img={carr.item.img}
									tipo={carr.item.tipo}
									producto={carr.item.name}
									count={carr.count}
									id={carr.item.id}
								/>
							);
						})
					) : (
						<>
							<br />
							<h3>No hay productos en el carrito</h3>
							<br />
						</>
					)}
					<FooterPage />
				</>
			)}
		</>
	);
};
export default Cart;
