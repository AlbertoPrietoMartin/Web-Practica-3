//README

//para empezar he instalado el next para nuestro proyecto mediante un npx //npx create-next-app@latest WebPr3 
// añadiendo su version con trypescript y react para poder trabajar como en clase

//mediante este comando: npm install axios 
//descargaremos axios y sus librearias para poder usar el api dada

//he decidido reutilizar pequeñas partes del codigo de mi web de paises con la api de paises(adjunto repo): https://github.com/AlbertoPrietoMartin/Web-Practica-2

//debido a los similar que era la practica a la web que se nos mando imitar en clase de paises

//en la carpeta types he metido los objetos que serán los productos con su respectivo index.ts para exportarlos y usarlo en toda la app

//en api/products.ts y api.ts está todo lo relacionado con el acceso a la API de DummyJSON, con las funciones getAllProducts y getProductById para obtener todos los productos o uno específico según el id

//en index.css he reutilizado partes del CSS anterior de la otra app y añadido estilos propios para mantener una estética chill y agradable, con grid de tres productos por fila, tarjetas con sombras suaves, botones destacados

//en search.ts primero importo api y el tipo ProductT, luego defino getAllProducts que obtiene todos los productos y devuelve un array simplificado con los campos necesarios, y getProductById que recibe un id y devuelve el producto completo

//en components/ProductCard/index.tsx creo el componente ProductCard que recibe un producto y muestra su imagen, título, categoría, precio y un botón de “Ver detalles” que redirige a /product/id, con estilos chill y efecto hover para destacar el botón

//en components/ProductGrid/index.tsx creo ProductGrid que recibe un array de productos y los recorre con map mostrando cada ProductCard, de esta manera el grid mantiene filas de tres productos por fila

//en components/SearchBar/index.tsx creo SearchBar que recibe el setter de searchQuery y permite al usuario escribir texto, actualizar el estado del padre y filtrar dinámicamente los productos

//en page.tsx de la página principal creo estados para productos, productos filtrados, searchQuery y loading, uso useEffect para cargar los productos con getAllProducts al inicio, luego otro useEffect filtra los productos según el texto escrito, muestro un título, la SearchBar, un contador de resultados y el ProductGrid con los productos filtrados; los productos se muestran en tarjetas con imagen, título, categoría, precio y botón “Ver detalles”

//en product/[id]/page.tsx creo la página individual que recibe el id desde la URL, carga el producto con getProductById y guarda el estado, mientras carga muestro “Loading…”, luego muestro un botón de volver con la misma estética que el de “Ver detalles”, la imagen principal grande, galería de miniaturas, título, descripción, marca, rating, precio, stock y peso si está disponible

//para ejecutar el proyecto hay que entrar en la carpeta del proyecto y ejecutar npm run dev, haz cntr + click en la url local y se te abrira esta super pagina web

//el CSS mantiene la estética chill, con grid de tres productos por fila, tarjetas con sombras y bordes redondeados, botones destacados con hover, imagen principal grande en la ficha, galería de miniaturas...

//en cuanto a problemas, no es que haya tenido muchos debido a que la mayoria ha sido modificar el codigo de los paises de la practica anterior

//pero he tenido ciertos inconvenientes con la barra de busqueda al hacer que se actualice el grid en base a lo que busques, pero tras informarme un poco he podido hacerlo para que quede super chulo

//luego lo de las distintas fotos ha sido algo confuso pero tras organizarme he conseguido que salgan todas, saliendo una (la principal) en grande

//este seria mi readme hasta ahora :>