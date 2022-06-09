import React, { useContext, useState, useEffect } from "react";

import { CartContext } from "../context/CartContext";
import FooterPage from "../components/FooterPage";
import CartItem from "../components/CartItem";
import LoadingSpinner from "../components/LoadingSpinner";
import Shopper from "../components/Shopper";

const stylings = {
	height: "100vh"
};

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
					<div className="mainShop" style={stylings}>
						{carrito.length > 0 ? (
							carrito.map(carr => {
								return (
									<div className="shopito" key={Math.random()}>
										<CartItem
											key={carr.item.id}
											img={carr.item.img}
											producto={carr.item.name}
											count={carr.count}
											id={carr.item.id}
										/>
										<br />
										<Shopper />
									</div>
								);
							})
						) : (
							<>
								<br />
								<h3>No hay productos en el carrito :'(</h3>
								<br />
							</>
						)}
					</div>
					<FooterPage />
				</>
			)}
		</>
	);
};
export default Cart;
