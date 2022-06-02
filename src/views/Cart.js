import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";
import FooterPage from "./FooterPage";
import CartItem from "./CartItem";

const Cart = () => {
	const { carrito } = useContext(CartContext);

	console.log(carrito);

	return (
		<>
			<div>
				{carrito.length > 0 ? (
					carrito.map(carr => {
						return (
							<CartItem
								key={carr.id}
								productoCarrito={carr.carrito}
								pictureUrl={carr.item.pictureUrl}
								description={carr.item.description}
								title={carr.item.title}
								count={carr.count}
								id={carr.item.id}
							/>
						);
					})
				) : (
					<h3>No hay productos en el carrito</h3>
				)}
			</div>
			<FooterPage />
		</>
	);
};
export default Cart;
