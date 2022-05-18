import Item from "./Item";
import React from "react";

const ItemList = ({ items }) => {
	console.log(items);
	return items.map(item => (
		<Item
			key={item.id}
			id={item.id}
			title={item.title}
			description={item.description}
			pictureUrl={item.pictureUrl}
			price={item.price}
			category={item.category}
			stock={item.stock}
			initial={item.initial}
		></Item>
	));
};

export default ItemList;
