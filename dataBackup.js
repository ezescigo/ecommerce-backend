import bcrypt from 'bcryptjs';

export default {
  users: [
    {
      name: "Ezequiel",
      email: "admin@example.com",
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  sections: [
    {
      title: "Wines",
      imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
      id: 1,
      linkUrl: "shop/wines",
      categories: [
        {
          title: "Red",
          id: 11,
          linkUrl: "shop/wines/red"
        },
        {
          title: "White",
          id: 12,
          linkUrl: "shop/wines/white"
        },
        {
          title: "Sparkles",
          id: 13,
          linkUrl: "shop/wines/sparkles"
        }
      ],
    },
    {
      title: "Spirits",
      imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
      id: 2,
      linkUrl: "shop/spirits",
      categories: [
        {
          title: "Whisky",
          id: 21,
          linkUrl: "shop/spirits/whisky"
        },
        {
          title: "Aperitives",
          id: 22,
          linkUrl: "shop/spirits/aperitives"
        },
        {
          title: "Spirits",
          id: 23,
          linkUrl: "shop/spirits/spirits"
        }
      ],
    },
    {
      title: "beers",
      imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
      id: 3,
      linkUrl: "shop/beers",
      categories: [{ title: "beers", id: 31, linkUrl: "beers" }]
    },
    {
      title: "gourmet",
      imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
      id: 4,
      linkUrl: "shop/gourmet",
      categories: [
        { title: "Gourmet", id: 41, linkUrl: "gourmet" },
      ]
    },
    {
      title: "accesories",
      imageUrl: "https://drive.google.com/uc?export=view&id=1lkYxMITYjMAOOlw9iBL1M9h7J7zT9i6S",
      id: 5,
      linkUrl: "shop/accesories",
      categories: [
        { title: "Accesories", id: 51, linkUrl: "accesories" }
      ]
    }
  ],

  products: [
    {
      id: 1,
      title: 'Wines',
      routeName: 'wines',
      categories: [
        {
          id: 1,
          title: 'Red',
          routeSubName: 'red',
          items: [
            {
              id: 111,
              name: 'San Telmo Malbec',
              imageUrl: '/images/san-telmo-malbec.png',
              price: 165
            },
            {
              id: 112,
              name: 'Chacabuco Malbec',
              imageUrl: '/images/chacabuco-malbec.png',
              price: 200
            },
            {
              id: 113,
              name: 'Dada Art',
              imageUrl: '/images/dada-art.jpg',
              price: 210
            },
            {
              id: 114,
              name: 'Portillo Malbec',
              imageUrl: '/images/portillo-malbec.jpg',
              price: 220
            },
            {
              id: 115,
              name: 'Benjamín Nieto Malbec',
              imageUrl: '/images/benjamin-nieto-malbec.jpg',
              price: 230
            },
            {
              id: 116,
              name: 'Alma Mora Malbec',
              imageUrl: '/images/alma-mora-malbec.jpg',
              price: 230
            },
            {
              id: 117,
              name: 'Cordero con Piel de Lobo Malbec',
              imageUrl: '/images/cordero-malbec.jfif',
              price: 260
            },
            {
              id: 118,
              name: 'Fond de Cave Malbec',
              imageUrl: '/images/fond-de-cave-malbec.png',
              price: 230
            },
            {
              id: 119,
              name: 'Circus Malbec',
              imageUrl: '/images/circus-malbec.jpg',
              price: 195
            },
            {
              id: 1110,
              name: 'Elementos Cabernet Sauvignon',
              imageUrl: '/images/elementos-cabernet-sauvignon.jpg',
              price: 450
            },
            {
              id: 1111,
              name: 'Elementos Malbec',
              imageUrl: '/images/elementos-malbec.jpg',
              price: 470
            },
            {
              id: 1112,
              name: 'La Poderosa Malbec',
              imageUrl: '/images/la-poderosa-malbec.jpg',
              price: 400
            },
            {
              id: 1113,
              name: 'Lola Montes Malbec',
              imageUrl: '/images/lola-montes-malbec.jpg',
              price: 400
            },
            {
              id: 1114,
              name: 'Norton Cosecha Tardia',
              imageUrl: '/images/lola-montes-malbec.jpg',
              price: 520
            },
            {
              id: 1115,
              name: 'Portillo Malbec',
              imageUrl: '/images/portillo-malbec.jpg',
              price: 450
            },
          ],
        },
        {
          id: 2,
          title: 'White',
          routeSubName: 'white',
          items: [
            {
              id: 1216,
              name: 'Cordero con Piel de Lobo',
              imageUrl: '/images/cordero-cabernet-rose.jpg',
              price: 230
            },
            {
              id: 1217,
              name: 'Colome Torrontes',
              imageUrl: '/images/colome-torrontes.jpg',
              price: 320
            },
          ],
        },
        {
          id: 3,
          title: 'Sparkles',
          routeSubName: 'sparkles',
          items: [],
        }
      ],
    },
    {
      id: 2,
      title: 'Spirits',
      routeName: 'spirits',
      categories: [
        {
          id: 1,
          title: 'Whisky',
          routeSubName: 'whisky',
          items: [
            {
              id: 211,
              name: "Gordon's",
              imageUrl: '/images/gordons.webp',
              price: 530,
              size: '750mL'
            },
            {
              id: 212,
              name: "Chivas Regal 12",
              imageUrl: '/images/chivas-regal-12.jpeg',
              price: 2350,
              size: '750mL'
            },
            {
              id: 213,
              name: "Jim Bean Honey",
              imageUrl: '/images/jim-beam-honey.jpeg',
              price: 2000,
              size: '750mL'
            },
            {
              id: 214,
              name: "Johnnie Walker White GOT",
              imageUrl: '/images/jw-white.jpg',
              price: 2300,
              size: '750mL'
            },
            {
              id: 215,
              name: "Johnnie Walker Black Label",
              imageUrl: '/images/jw-black-label.jpeg',
              price: 2950,
              size: '1000mL'
            },
            {
              id: 216,
              name: "Johnnie Walker Red Label",
              imageUrl: '/images/jw-red-label.jpeg',
              price: 1750,
              size: '750mL'
            },
            {
              id: 217,
              name: "Jameson Reg.",
              imageUrl: '/images/jameson.jpeg',
              price: 1450,
              size: '750mL'
            },
            {
              id: 218,
              name: "Jameson Caskmate IPA",
              imageUrl: '/images/jameson-caskmate.jpeg',
              price: 1650,
              size: '750mL'
            },
            {
              id: 219,
              name: "Ballantine's Reg.",
              imageUrl: '/images/ballantines.jpeg',
              price: 1200,
              size: '750mL'
            },
            {
              id: 2110,
              name: "J&B",
              imageUrl: '/images/jyb.jpeg',
              price: 1250,
              size: '750mL'
            },
            {
              id: 2111,
              name: "Jack Daniel's Reg.",
              imageUrl: '/images/jack-daniels.jpeg',
              price: 4000,
              size: '750mL'
            },
            {
              id: 2112,
              name: "Jack Daniel's Honey",
              imageUrl: '/images/jack-daniels-honey.png',
              price: 4350,
              size: '750mL'
            },
            {
              id: 2113,
              name: "Wild Turkey Honey",
              imageUrl: '/images/wild-turkey-honey.jpeg',
              price: 2200,
              size: '750mL'
            }
          ]
        },
        {
          id: 2,
          title: 'Spirits',
          routeSubName: 'spirits',
          items: [{
            id: 221,
            name: "Heraclito London Dry",
            imageUrl: '/images/heraclito-gin.jpg',
            price: 1000,
            size: '750mL'
          },
          {
            id: 222,
            name: "Heraclito & Macedonio",
            imageUrl: '/images/heraclito-macedonio.jpg',
            price: 1100,
            size: '750mL'
          },
          {
            id: 223,
            name: "Gin MG",
            imageUrl: '/images/gin-mg.png',
            price: 1300,
            size: '750mL'
          },
          {
            id: 224,
            name: "Principe de los Apostoles",
            imageUrl: '/images/principe-apostoles.jfif',
            price: 1200,
            size: '700mL'
          },
          {
            id: 225,
            name: "Beefeater",
            imageUrl: '/images/beefeater.jpeg',
            price: 1650,
            size: '1L'
          },
          {
            id: 226,
            name: "Beefeater Pink",
            imageUrl: '/images/beefeater-pink.png',
            price: 1600,
            size: '750mL'
          },
          {
            id: 227,
            name: "Bombay",
            imageUrl: '/images/bombay.webp',
            price: 2100,
            size: '750mL'
          },
          {
            id: 228,
            name: "Gin Terrier Wild",
            imageUrl: '/images/bombay.webp',
            price: 1150,
            size: '750mL'
          },
          {
            id: 229,
            name: "Absolut",
            imageUrl: '/images/absolut.png',
            price: 1200,
            size: '750mL'
          },
          {
            id: 2210,
            name: "Absolut Citron",
            imageUrl: '/images/absolut-citron.jpeg',
            price: 1350,
            size: '750mL'
          },
          {
            id: 2211,
            name: "Absolut Lime",
            imageUrl: '/images/absolut-lime.jpg',
            price: 1350,
            size: '750mL'
          },
          {
            id: 2212,
            name: "Absolut Pear",
            imageUrl: '/images/absolut-pear.jpg',
            price: 1350,
            size: '750mL'
          },
          {
            id: 2213,
            name: "Absolut Raspberry",
            imageUrl: '/images/absolut-raspberry.jpg',
            price: 1350,
            size: '750mL'
          },
          {
            id: 2214,
            name: "Smirnoff",
            imageUrl: '/images/smirnoff.jpg',
            price: 420,
            size: '750mL'
          },
          {
            id: 2215,
            name: "Smirnoff flavours",
            imageUrl: '/images/smirnoff-flavours.png',
            price: 440,
            size: '750mL'
          }]
        },
        {
          id: 3,
          title: 'Aperitives',
          routeSubName: 'aperitives',
          items: [
            {
              id: 231,
              name: "Aperol",
              imageUrl: '/images/aperol.jpg',
              price: 380,
              size: '750mL'
            },
            {
              id: 232,
              name: "Fernet Branca",
              imageUrl: '/images/ferne.jpg',
              price: 495,
              size: '750mL'
            },
            {
              id: 233,
              name: "Cinzano Rosso",
              imageUrl: '/images/cinzano-rosso.jpg',
              price: 250,
              size: '950mL'
            },
            {
              id: 234,
              name: "Campari",
              imageUrl: '/images/campari.jpg',
              price: 350,
              size: '750mL'
            },
            {
              id: 235,
              name: "Cynar",
              imageUrl: '/images/cynar.jpg',
              price: 275,
              size: '750mL'
            },
            {
              id: 236,
              name: "Ron Havana Club Dorado",
              imageUrl: '/images/havana-dorado.jpg',
              price: 800,
              size: '750mL'
            },
            {
              id: 237,
              name: "Ron Havana Club Blanco",
              imageUrl: '/images/havana-blanco.jpg',
              price: 750,
              size: '750mL'
            },
            {
              id: 238,
              name: "Tequila Jose Cuervo Oro",
              imageUrl: '/images/jose-cuervo-oro.jpeg',
              price: 1250,
              size: '750mL'
            },
            {
              id: 239,
              name: "Jägermeister",
              imageUrl: '/images/jagerm.jpg',
              price: 1850,
              size: '700mL'
            }
          ]
        },
      ],
    },
    {
      id: 3,
      title: 'Beers',
      routeName: 'beers',
      categories: [
        {
          id: 1,
          title: 'Beers',
          routeSubName: 'beers',
          items: [
            {
              id: 311,
              name: "Imperial IPA",
              brand: "Imperial",
              imageUrl: '/images/imperial-ipa.jpg',
              priceSixPack: 630,
              priceCase: 2300,
              size: '473mL'
            },
            {
              id: 312,
              name: "Imperial Red",
              brand: "Imperial",
              imageUrl: '/images/imperial-red-sixpack.png',
              priceSixPack: 630,
              priceCase: 2300,
              size: '473mL'
            },
            {
              id: 313,
              name: "Imperial Lager",
              brand: "Imperial",
              imageUrl: '/images/imperial-lager-sixpack.jpg',
              priceSixPack: 630,
              priceCase: 2300,
              size: '473mL'
            },
            {
              id: 314,
              name: "Patagonia Bohemian",
              brand: "Patagonia",
              imageUrl: '/images/patagonia-bohemian.jpg',
              priceSixPack: 700,
              priceCase: 2700,
              size: '473mL'
            },
            {
              id: 315,
              name: "Patagonia Bohemian",
              brand: "Patagonia",
              imageUrl: '/images/patagonia-amber-can.jpg',
              price: 250,
              size: '710mL'
            },
            {
              id: 316,
              name: "Patagonia Amber Lager",
              brand: "Patagonia",
              imageUrl: '/images/patagonia-amber-sixpack.jpg',
              priceSixPack: 700,
              priceCase: 2700,
              size: '473mL'
            },
            {
              id: 317,
              name: "Corona Pack x6",
              brand: "Corona",
              imageUrl: '/images/corona-sixpack.jpg',
              price: 690,
              size: '335mL'
            },
            {
              id: 318,
              name: "Corona Case x24",
              brand: "Corona",
              imageUrl: '/images/corona-case.jpg',
              price: 2520,
              size: '335mL'
            },
            {
              id: 319,
              name: "Heineken Pack x6",
              brand: "Corona",
              imageUrl: '/images/heineken-sixpack.jpg',
              price: 680,
              size: '473mL'
            },
            {
              id: 3110,
              name: "Heineken Case x24",
              brand: "Corona",
              imageUrl: '/images/heineken-case.jpg',
              price: 2650,
              size: '473mL'
            },
          ]
        },
      ]
    },
    {
      id: 4,
      title: 'Gourmet',
      routeName: 'gourmet',
      categories: [
        {
          id: 1,
          title: 'Gourmet',
          routeSubName: 'gourmet',
          items: [
            {
              id: 411,
              name: "Olive Oil Zuelo",
              brand: "Zuelo",
              imageUrl: '/images/olive-oil-zuelo.jpg',
              price: 720,
              size: '1Kg'
            },
            {
              id: 412,
              name: "Olive Oil Laur",
              brand: "Laur",
              imageUrl: '/images/olive-oil-laur.jpg',
              price: 480,
              size: '500mL'
            },
            {
              id: 413,
              name: "Green Olives Paste",
              brand: "Laur",
              imageUrl: '/images/green-olives-paste-laur.jpg',
              price: 290,
              size: '180g'
            },
            {
              id: 414,
              name: "Dried Tomatoes Paste",
              brand: "Laur",
              imageUrl: '/images/dried-tomatoes-paste.jpg',
              price: 290,
              size: '180g'
            },
            {
              id: 415,
              name: "Green Olives",
              brand: "Laur",
              imageUrl: '/images/green-olives-laur.jpg',
              price: 220,
              size: '220g'
            },
            {
              id: 416,
              name: "Garlic & Herbs Paste",
              brand: "Gusto Cuyo",
              imageUrl: '/images/garlic-paste-gusto-cuyo.jpg',
              price: 150,
              size: '180g'
            },
            {
              id: 417,
              name: "Red Beans Paste",
              brand: "Laur",
              imageUrl: '/images/red-beans-paste-laur.jpg',
              price: 290,
              size: '180g'
            },
            {
              id: 418,
              name: "Aceto Balsamico",
              brand: "Contra Viento",
              imageUrl: '/images/aceto-contra-viento.png',
              price: 300,
              size: '500mL'
            },
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Accesories',
      routeSubName: 'accesories',
      categories: [
        {
          id: 1,
          name: "Corona Cooler",
          brand: "Corona",
          imageUrl: '/images/corona-cooler.jpg',
          price: 2600,
          size: '15L'
        },
        {
          id: 2,
          name: "Patagonia Tekku Glass",
          brand: "Patagonia",
          imageUrl: '/images/patagonia-tekku-cup.jpg',
          price: 450,
          size: '400mL'
        },
        {
          id: 3,
          name: "Vaso Only Cup",
          brand: "Only Cup",
          imageUrl: '/images/only-cup-red.webp',
          price: 300,
          size: '710mL'
        }
      ]
    }
  ],
};