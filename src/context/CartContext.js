import React, { createContext, useState } from "react";

export const CartContext = createContext();

const actualProducts = [];

export const CartProvider = ({ children }) => {
	const addItem = (
		id,
		item,
		pictureUrl,
		price,
		category,
		stock,
		initial,
		quantity,
		details,
		ingredients
	) => {
		const newProduct = {
			id: id,
			title: item,
			pictureUrl: pictureUrl,
			price: price,
			category: category,
			stock: stock,
			initial: initial,
			quantity: quantity,
			details: details,
			ingredients: ingredients
		};

		const found = items.find(item => item.id === id);

		if (!found) {
			actualProducts.push(newProduct);
			setItems(actualProducts);

			console.log(items);
		}
	};

	const removeItem = itemId => {
		let found = false;

		items.forEach((item, index, arr) => {
			if (item.id === itemId) {
				found = index;
			}
		});

		if (found) {
			const arrayNuevo = actualProducts.push.splice(found, 1);
			setItems(arrayNuevo);
		} else {
			console.log("Producto no encontrado");
		}
	};

	const clear = () => [setItems([])];

	const isInCart = id => {
		const found = items.find(item => item.id === id);

		if (found) {
			return true;
		} else {
			return false;
		}
	};

	const [items, setItems] = useState(actualProducts);

	return (
		<CartContext.Provider value={[addItem, removeItem, clear, isInCart]}>
			{children}
		</CartContext.Provider>
	);
};
