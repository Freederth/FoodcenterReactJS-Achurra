import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import imgSand from "../assets/imgSand.png";

const arrayItems = [
	{
		id: 1,
		title: "Perro cachorro",
		description: "	Vitalcan Complete perro junior razas medianas y grandes",
		pictureUrl: img4,
		price: 12000,
		category: "perro",
		stock: 10,
		initial: 1,
		details:
			"VitalCan® Complete Perro Cachorro Razas medianas y grandes es ideal para perros junior de razas medianas y grandes hasta los 18 meses, tiene todo lo que necesitan!. Este alimento les proporciona mayor vitalidad por sus proteínas de excelente calidad, un pelo más brillante por el contenido de omega 6, vitamina A, Biotina, ácido pantoténico y zinc y a su vez, unas heces más firmes por los prebióticos, zeolita y yucca adicionada.",
		ingredients:
			"Maíz, harina de carne, harina de pollo, arroz, harina de soja micronizada, aceite de pollo, grasa bovina, aceite vegetal, harina de germen de maíz, gluten de maíz, pulpa de remolacha, trigo, germen de trigo, sal, levadura de cerveza, zeolita, saborizantes naturales (hidrolizado de vísceras de pollo), antioxidantes (extracto de romero, TBHQ, BHT, BHA), fructooligosacáridos (FOS), manano oligosacáridos (MOS), nucleótidos, albúmina de huevo, colina, metionina, lisina, extracto de Yucca schidigera, sorbato de potasio, cloruro de potasio y núcleo vitamínico – mineral: vitaminas: A, D3, E, K3, B1, B2, B6, B12, biotina, ácido fólico, ácido nicotínico, ácido pantoténico, vitamina C. Minerales: yodo, hierro, manganeso. Cobre, selenio y zinc como minerales quelados."
	},
	{
		id: 2,
		title: "Perro adulto",
		description: "Vitalcan Complete perro adulto razas medianas y grandes",
		pictureUrl: img1,
		price: 18000,
		category: "perro",
		stock: 4,
		initial: 1,
		details:
			"VitalCan® Complete Perro adulto Raza Mediana y Grande es ideal para perros adultos de razas medianas de 12 meses a 7 años y grandes de 18 meses a 7 años, tiene todo lo que necesitan!. Este alimento les proporciona mayor vitalidad por sus proteínas de excelente calidad, un pelo más brillante por el contenido de omega 6, vitamina A, Biotina, ácido pantoténico y zinc y a su vez, unas heces más firmes por los prebióticos, zeolita y yucca adicionada.",
		ingredients:
			"Maíz, harina de carne, harina de pollo, harina de soja micronizada, aceite de pollo, grasa bovina, aceite vegetal, harina de germen de maíz, arroz, gluten de maíz, pulpa de remolacha, trigo, germen de trigo, sal,levadura de cerveza, zeolita, saborizantes naturales (hidrolizado de vísceras de pollo), antioxidantes (extracto de romero, TBHQ, BHT, BHA), fructooligosacáridos (FOS), manano oligosacáridos (MOS), colina, metionina, lisina, extracto de Yucca schidigera, sorbato de potasio, cloruro de potasio y núcleo vitamínico – mineral: vitaminas: A, D3, E, K3, B1, B2, B6, B12, biotina, ácido fólico, ácido nicotínico, ácido pantoténico, vitamina C. Minerales: yodo, hierro, manganeso. Cobre, selenio y zinc como minerales quelados."
	},
	{
		id: 3,
		title: "Gato adulto",
		description: "Vitalcan Complete gato adulto control peso",
		pictureUrl: img3,
		price: 17000,
		category: "gato",
		stock: 0,
		initial: 0,
		details:
			"VitalCan® Complete Gatos Adultos Adulto Control de Peso es ideal para gatos adultos con tendencia al sobrepeso. Este alimento ayudará paulatinamente a mantener una silueta ideal, un pelo brillante y heces más firmes.",
		ingredients:
			"Arroz, harina de pollo, harina de carne, maíz, gluten de maíz, harina de soja micronizada, harina de germen de maíz, aceite de pollo, aceite vegetal, grasa bovina, pulpa de remolacha, aceite de pescado, levadura de cerveza, trigo, harina de trigo, germen de trigo, manano oligosacáridos (MOS), fructooligosacáridos (FOS), saborizantes naturales (hidrolizado de vísceras de pollo), sal, metionina, lisina, antioxidantes (extracto de romero, TBHQ,BHT, BHA), taurina, sorbato de potasio, extracto de Yucca schidigera, colina, zeolita, cloruro de potasio, L-carnitina y núcleo vitamínico – mineral: vitaminas: A, D3, E, K3, B1, B2, B6, B12, biotina, ácido fólico, ácido nicotínico, ácido pantoténico, vitamina C. Minerales: yodo, hierro, manganeso. Cobre, selenio y zinc como minerales quelados."
	},
	{
		id: 4,
		title: "Gato cachorro",
		description: "Vitalcan Complete gatos cachorros para toda raza",
		pictureUrl: img2,
		price: 20000,
		category: "gato",
		stock: 8,
		initial: 1,
		details:
			"VitalCan® Complete Kitten es ideal para gatos cachorros hasta los 12 meses, tiene todo lo que necesitan!. Este alimento tiene un sabor irresistible, contribuye a una inmunidad potenciada y a un óptimo crecimiento.",
		ingredients:
			"Arroz, harina de pollo, harina de carne, maíz, gluten de maíz, harina de soja micronizada,harina de germen de maíz, aceite de pollo, aceite vegetal, grasa bovina, pulpa de remolacha, aceite de pescado, levadura de cerveza, trigo, harina de trigo, germen de trigo, manano oligosacáridos (MOS), fructooligosacáridos (FOS), saborizantes naturales (hidrolizado de vísceras de pollo), sal, metionina, lisina, antioxidantes (extracto de romero, TBHQ, BHT, BHA), taurina, sorbato de potasio, extracto de Yucca schidigera, colina, zeolita, cloruro de potasio, nucleótidos, albúmina de huevo y núcleo vitamínico – mineral: vitaminas: A, D3, E, K3, B1, B2, B6, B12, biotina, ácido fólico, ácido nicotínico, ácido pantoténico, vitamina C. Minerales: yodo, hierro, manganeso. Cobre, selenio y zinc como minerales quelados."
	},
	{
		id: 5,
		title: "Arena sanitaria",
		description:
			"Canada Litter Arena sanitaria para gatos, con olor a talco para bebés.",
		pictureUrl: imgSand,
		price: 15000,
		category: "arena",
		stock: 20,
		initial: 1,
		details:
			"osee una capacidad de absorción del 350% (3,5 veces su peso). Las cualidades excepcionales de esta arena son atribuidas a su alta capacidad de aglomeración y sus propiedades de absorción, con resultados que se observan inmediatamente con la formación de grumos del producto cuando se moja, haciendo fácil el retiro de las deposiciones. Posee un perfume a base de aceites esenciales de polvo para bebés, el cual, no es agresivo para el gato y fue diseñado para eliminar y controlar los olores en la bandeja. La bentonita es una arcilla mineral con las características de expansión y absorción. ",
		ingredients: "Hecha de bentonita de sodio y producida en Canadá."
	}
];
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const productServices = async (id = null, category) => {
	await delay(2000);
	if (!!id) {
		return arrayItems.find(item => item.id === id) || {};
	}
	if (!!category) {
		return arrayItems.filter(item => item.category === category) || [];
	}
	return arrayItems;
};

export default productServices;
