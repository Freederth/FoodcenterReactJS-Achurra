import Item from "./Item";
import React from "react";

const ItemList = ({ items }) => {
	return (
		<>
			{items.map(itera => {
				return (
					<div className="col-md-4" key={itera.id}>
						<Item item={itera} />
					</div>
				);
			})}
		</>
	);
};

export default ItemList;
