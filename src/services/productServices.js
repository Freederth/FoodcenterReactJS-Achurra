import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const arrayItems = [
	{
		title: "Perro cachorro",
		description: "	Vitalcan Complete perro junior razas medianas y grandes",
		pictureUrl: img4,
		price: 12000,
		stock: "10",
		initial: "1"
	},
	{
		title: "Perro adulto",
		description: "Vitalcan Complete perro adulto razas medianas y grandes",
		pictureUrl: img1,
		price: 18000,
		stock: "4",
		initial: "1"
	},
	{
		title: "Gato adulto",
		description: "Vitalcan Complete gato adulto control peso",
		pictureUrl: img3,
		price: 17000,
		stock: "0",
		initial: "0"
	},
	{
		title: "Gato cachorro",
		description: "Vitalcan Complete gatos cachorros para toda raza",
		pictureUrl: img2,
		price: 20000,
		stock: "8",
		initial: "1"
	}
];
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const productServices = async () => {
	await delay(2000);
	return arrayItems;
};

export default productServices;
