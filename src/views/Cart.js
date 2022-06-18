import React, { useContext, useState, useEffect } from "react";

// imports de componentes
import { CartContext } from "../context/CartContext";
import FooterPage from "../components/StaticComponents/FooterPage";
import CartItem from "../components/Cart/CartItem";
import LoadingSpinner from "../components/StaticComponents/LoadingSpinner";
import Shopper from "../components/Cart/Shopper";

const stylings = {
	height: "80vh"
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
		<div className="">
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<br />
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
					{carrito.length > 0 && <Shopper />}
					<FooterPage />
				</>
			)}
		</div>
	);
};
export default Cart;
