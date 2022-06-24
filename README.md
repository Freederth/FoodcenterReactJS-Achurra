# FoodcenterCPP React JS

## Instalación

1. Debes clonar el proyecto.

2. En la ubicación de la carpeta raíz, ejecutas el command:

   ```
   npm install
   ```

Para instalar todas las dependencias del proyecto.

3. Una vez instaladas las dependencias, debes correr

   ```
   npm start
   ```

   Y ya estarás corriendo este proyecto de marketplace para alimentos de perros, gatos y arenas sanitarias.

## Dependencias:

- Utilizo React Router Dom para la navegación.
- Firebase maneja mis datos desde su base de datos.
- Bootstrap-react porque me gusta mucho el estilo de bootstrap y me evito meter tanta mano a los CSS.
- Alert de Material UI para entregar la notificación de que la compra se realizó.

## Seguimiento de avances:

### Desafío entregable 1

- Agregué la app de react como se pedía

### Desafío entregable 2

- Metí el navbar como componente.
- Cambié el nombre de la pestaña.
- Metí favicon y logo al NavBar.

### Desafío entregable 3

- Creé el componente CartWidget.js con su ícono y lo ubiqué en el navbar.
- Creé el componente ItemListContainer.js con un greeting y que muestre el mensaje dentro de un contenedor.

### Desafío entregable 4

- Creé el componente ItemCount para aumentar y bajar cantidades pedidas.
- Agregué un data.json que usaré en el futuro en mi proyecto con los productos, estoy llamándolos con axios.
- Desde ItemListContainer llamo cada producto, los valores del stock y el initial se los doy por prop, tal como pedía el desafío.
- Le puse un poco de estilo a mis productos, utilizando Cards de bootstrap para react.

### Desafío entregable 5

- Creé el componente Item.js
- Creé el componente ItemList.js que agrupa los items usando map.
- Implementé un async promise que hace que los items se rendericen a los 2 segundos de espera, es llamado desde productServices.
- Mis productos se muestran 2 segundos después de que se muestre el título y el header.
- Agregué un footer, ya que se veía pelada la página.

### Desafío entregable 6

- Creé componente ItemDetail e ItemDetailContainer.
- Al apretar cada producto se va a /detail/:{id}, carga y muesta una card, además de un detalle en texto.
- Ahora también el Home carga.

### Preentrega 1

- Las categorías se llaman a través de un filter.
- Arreglé el /detail/:{id}, que antes lo forzaba.

### Desafío entregable 7

- Cambié el estilo de Items.
- ItemDetails ahora recibe el ItemCount y al agregar al carro, te lleva a /cart.

### Desafío entregable 8

- Creé el CartContext y le puse las funciones que se le pedía.

### Desafío entregable 9

- Trabajé los contextos para que se mostraran los productos que se compran.

### Desafío entregable 10

- Firebase conectada a la app, que lo llama directamente a la "db" sin usar archivos locales.

### Desafío entregable 11

- Firebase recibe el usuario con sus datos + la orden realizada.

### Proyecto Final

- Ordené los componentes en carpetas para que tenga mayor orden y menos flujo de trabajo.

## Demovideo:

https://user-images.githubusercontent.com/10873846/175725209-28a8b8a0-41bc-4388-90eb-0e8b8ec87f86.mp4


#### Autor

Isabel Achurra - 2022 - Curso ReactJS de CoderHouse.
