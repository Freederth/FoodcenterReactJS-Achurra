import Item from "./Item";
import React from "react";

const ItemList = ({ items }) => {
	return (
		<div>
			{items.map(iteracion => {
				return (
					<div className="col-md-4" key={iteracion.id}>
						<Item item={iteracion} />
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
