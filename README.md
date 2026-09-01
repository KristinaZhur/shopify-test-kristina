# Prueba técnica — Tienda Shopify (tema Horizon)

Réplica y mejora de Home, Colección (PLP), Producto (PDP) y Cart Drawer de https://juguettos.com, desarrollada sobre el tema Horizon en la tienda demo `prueba-kristina-z`.

# Resumen

He hecho la pagina HOME, la pagina de productos, la pagina con detalle del producto, carrito. Durante el trabajo he creado secciones nuevas. Por ejemplo la seccion de 3 banners sin texto se puede reutilizar para poder cambiar el texto, btn, img. 

## Páginas entregadas

### Home
- Slideshow / hero principal con imagen y btn
- Secciones con marcas,bloques de informacion, seccion de banners
- Footer con menús de navegación (Atención al cliente, Quiénes somos, Promociones, icons) 

### Colección (PLP)
- Un único template reutilizado para todas las colecciones, tal y como se solicitaba
- Tarjeta de producto con imagen, título y precio, disponibilidad
- Filtrado y ordenación mediante el bloque nativo de Horizon

### Producto (PDP)
- Título, precio y selector de cantidad
- Botón "Agregar al carrito" y botón de compra ahora
- Descripción del producto

### Cart Drawer
- Carrito (popup), nombre, precio y cantidad editable
- Campo de código de descuento
- Botón de pago 

## Productos

Se han creado productos mediante dos métodos:
- He creado 3 productos a mano y 3 con token de shopify. He creado el fichero import_product para y con metodo POST y enlace de productos y la descripcion.
- Con node scripts/import_product he importado los productos.
- En gitignore he indicado este fichero para no subirlo a github con token.

## Metodología de trabajo

- He trabajado con github, haciendo commits paso a paso y  (`theme pull`  / `theme push`)
- Los cambios visuales se han hecho principalmente desde el Theme Editor y sincronizado al repositorio mediante `theme pull` tras cada sesión de edición
- Para necesidades no cubiertas por las secciones estándar, he creado secciones nuevas para realizar mi estilo.

## Decisiones y aprendizajes

- He priorizado el uso de la arquitectura nativa de Horizon (secciones, bloques, esquemas de color) sobre desarrollo, para mantener la tienda  fácilmente editable desde el admin, pero a veces he anadido colores
- He investigado el funcionamiento de la Admin API para automatizar la carga de productos, luego tenia error porque en la zona de admin en Shopify habia que marcar exactamente el campo Products con write/read.
- En imagenes habia btn COMPRAR, pero dentro de la imagen, he quitado en un editor esa palabra para crear BTN COMPRAR de verdad. Creo que es mas correcto.
- Me costaba cambiar $ a euros en admin Shopify y cambiar detalles de slide como puntitos, flechas y otros colores

## Próximos pasos y que puedo mejorar

- Ampliar la galería de imágenes por producto
- Mejorar animation con hover para footer/menu

  ## Como preferiría realizar todo despues de terminar la prueda:
  -  Crear el fichero con variables de colores, typografia, tamanos, para botones
  -  Definir la estructura del diseno, navigacion, estilo de la pagina
  
