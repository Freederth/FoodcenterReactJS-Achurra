import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
	const [carrito, setCarrito] = useState(defaultValue);

	const getFromCart = id => {
		return carrito.find(obj => obj.id === id);
	};

	const isInCart = id => {
		return id === undefined ? undefined : getFromCart !== undefined;
	};

	// const addExistingItem = (obj) => {
	// let newcarrito = carrito;
	// let existingItem = newcarrito.find(el => el.item.id === item.id);
	// existingItem.quant += count;
	// newcarrito[newcarrito.findIndex(el => el.item.id === item.id)] =
	// 	existingItem;
	// setCarrito(newcarrito);
	// };

	const addItem = obj => {
		// isInCart(item.id)
		// 	? addExistingItem(item, count)
		// 	: setCarrito([...carrito, { item: item, count: count }]);
		if (isInCart(obj && obj.id)) {
			console.log("No se puede agregar, ya está");
			return;
		}
		setCarrito([...carrito, obj]);
	};

	const removeItem = item => {
		setCarrito(carrito.filter(el => el.item.id !== item));
	};

	const clear = () => {
		setCarrito([]);
	};

	return (
		<CartContext.Provider value={[addItem, removeItem, clear, isInCart]}>
			{children}
		</CartContext.Provider>
	);
};
