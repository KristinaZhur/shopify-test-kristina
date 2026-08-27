const SHOPIFY_STORE = 'prueba-kristina-z';
const ACCESS_TOKEN = 'shpat_xxxxxxxxx'; // token de admin shopify

// una lista de productos
const productsToImport = [
  {
    product: {
      title: "LEGO City Project Alicia 2025 Parrilla de F1 - 60474",
      vendor: "LEGO",
      product_type: "Construcción",
      tags: ["LEGO", "F1", "Juguettos"],
      body_html: "<p>Lleva las emociones del circuito a los juegos de tu peque con el set LEGO City Parrilla de F1 con coches VCARB y Sauber (60474).</p>",
      images: [
        {
          src: "https://juguettos.com/3641928-thickbox_default/lego-city-project-alicia-2025-parrilla-de-f1-con-coches-de-carreras-vcarb-y-sauber-60474.jpg"
        }
      ],
      variants: [
        {
          price: "24.99",
          compare_at_price: "29.99",
          sku: "A0453903",
          inventory_quantity: 10,
          inventory_management: "shopify"
        }
      ]
    }
  },
  {
    product: {
      title: "VTech Baby Mi Scooter de Paseo 2 en 1 Roja",
      vendor: "Juguettos",
      product_type: "Moto",
      tags: ["Exclusivo", "Peluche"],
      body_html: "<p>Moto interactiva 2 en 1 para utilizar como andador y correpasillos-montador, ideal para niños en sus primeras etapas de aprendizaje.</p>",
      images: [
        {
          src: "https://juguettos.com/3653194-thickbox_default/vtech-baby-mi-scooter-de-paseo-2-en-1-roja.jpg"
        }
      ],
      variants: [
        {
          price: "59.99",
          sku: "A0453787", //articulo
          inventory_quantity: 15,
          inventory_management: "shopify"
        }
      ]
    }
  },
  {
    product: {
      title: "Funko Pop! Animation One Piece Figura de Vinilo Monkey D. Luffy Whole Cake",
      vendor: "Funko",
      product_type: "Figura",
      tags: ["Exclusivo", "Figura"],
      body_html: "<p>Figura de vinilo de Luffy Whole Cake, personaje de One Piece.</p>",
      images: [
        {
          src: "https://juguettos.com/3593199-large_default/funko-pop-animation-one-piece-figura-de-vinilo-monkey-d-luffy-whole-cake.jpg"
        }
      ],
      variants: [
        {
          price: "19.99",
          sku: "A0460466",
          inventory_quantity: 15,
          inventory_management: "shopify"
        }
      ]
    }
  }
];

async function importMultipleProducts() {
  const url = `https://prueba-kristina-z.myshopify.com/admin/api/2026-07/products.json`;

  for (const item of productsToImport) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'X-Shopify-Access-Token': ACCESS_TOKEN,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`Importado: "${result.product.title}" (ID: ${result.product.id})`);
      } else {
        console.error(`Error "${item.product.title}":`, result);
      }
    } catch (error) {
      console.error('Error de coneccion:', error);
    }
  }
}

importMultipleProducts();