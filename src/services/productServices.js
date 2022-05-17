import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const arrayItems = [
	{
		id: 1,
		title: "Perro cachorro",
		description: "	Vitalcan Complete perro junior razas medianas y grandes",
		pictureUrl: img4,
		price: 12000,
		categoría: "perro",
		stock: 10,
		initial: 1
	},
	{
		id: 2,
		title: "Perro adulto",
		description: "Vitalcan Complete perro adulto razas medianas y grandes",
		pictureUrl: img1,
		price: 18000,
		categoría: "perro",
		stock: 4,
		initial: 1
	},
	{
		id: 3,
		title: "Gato adulto",
		description: "Vitalcan Complete gato adulto control peso",
		pictureUrl: img3,
		price: 17000,
		categoría: "gato",
		stock: 0,
		initial: 0
	},
	{
		id: 4,
		title: "Gato cachorro",
		description: "Vitalcan Complete gatos cachorros para toda raza",
		pictureUrl: img2,
		price: 20000,
		categoría: "gato",
		stock: 8,
		initial: 1
	}
];
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const productServices = async id => {
	await delay(2000);
	if (!!id) {
		const item = arrayItems[id - 1];
		return item;
	}
	return arrayItems;
};

export default productServices;
