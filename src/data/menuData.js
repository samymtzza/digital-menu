const menuData = [
  {
    id: "seccion1",
    name: "Bebidas",
    urlPath: "bebidas",
    subsections: [
      {
        name: " Aguas y Refrescos",
        dishes: [
          { name: "Agua mineralizada (355 ML)", price: "$50", description: "" },
          { name: "Agua embotellada", price: "$25", description: "" },
          { name: "Limonada", price: "$40", description: "" },
          { name: "Naranjada", price: "$40", description: "" },
          { name: "Coca-Cola Original", price: "$30", description: "" },
          { name: "Coca-Cola Light", price: "$30", description: "" },
          { name: " Fresca", price: "$30", description: "" },
          { name: "Sidral Mundet", price: "$30", description: "" },
        ],
      },
      {
        name: "Cocteles",
        dishes: [
          {
            name: "Mojito",
            price: "$120",
            description: "Rico coctel de menta y limón",
          },
          {
            name: "Carajillo",
            price: "$130",
            description:
              "Una carga de café de Malinalco y Licor del 43 shakeados",
          },
          {
            name: "Café irlandés",
            price: "$90",
            description: "Café expreso con whisky y crema batida",
          },
          {
            name: "Mezcal de jamaica",
            price: "$120",
            description: "Mezcal de la casa y concentrado de jamaica shakeados",
          },
          {
            name: "Gin de la casa",
            price: "$130",
            description: "Gin Larios con maracuyá.",
          },
        ],
      },
      {
        name: "Cervezas",
        dishes: [
          {
            name: "HEINEKEN® (355 ML)",
            price: "$60",
            description:
              "Es la marca líder por excelencia. Su composición premium es fermentada en el fondo de tanques horizontales, lo que la hace más clara, pura y durable.",
          },
          {
            name: "DOS EQUIS® ULTRA",
            price: "$60",
            description:
              "La primer ultra mexicana, color dorado. Ligera, refrescante con toque de lúpulo aromático.",
          },
          {
            name: "BOHEMIA® CLARA (355 ML)",
            price: "$55",
            description:
              "Desde 1905 Bohemia es la opción para combinar con una buena comida. Sabor fuerte y amargo.",
          },
          {
            name: "TECATE® (325 ML)",
            price: "$50",
            description:
              "Nacida para ser leyenda. La cerveza que sabe a lo que debe saber una cerveza. La original, la inimitable.",
          },
          {
            name: "AMSTEL ULTRA® (355 ML)",
            price: "$60",
            description:
              "Es la cerveza con alcohol más ligera de México. Elaborada por nuestros maestros cerveceros para complementar un estilo de vida activo, cuenta con un sabor fresco e inigualable gracias a su herencia europea.",
          },
          {
            name: "DOS EQUIS® AMBAR (325 ML)",
            price: "$55",
            description:
              "Lager Vienna. con espuma suave y un aroma dulce. un poco de caramelo y amargor que proviene de la mezcla de frutas y lúpulo.",
          },
          {
            name: "INDIO® (325 ML)",
            price: "$50",
            description:
              "Cerveza autenticamente mexicana. Estilo lager, de cuerpo y amargor medios. Sabor balanceado a malta de cebada y caramelo.",
          },
        ],
      },
      {
        name: "Vinos",
        vinosections: [
          {
            name: "Tinto",
            dishes: [
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
            ],
          },
          {
            name: "Rosado",
            dishes: [
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
            ],
          },
          {
            name: "Blanco",
            dishes: [
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
              { name: "", price: "$", description: "" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "seccion2",
    name: "Entradas",
    urlPath: "entradas",
    dishes: [
      {
        name: "Bruschetta",
        price: "$105",
        description:
          "Rebanadas de pan casero dorado, cubiertas de jitomates picados sazonados con aceite de oliva extra virgen, albahaca y ajo.",
      },
      {
        name: "Carpaccio",
        price: "$220",
        description:
          "Finas rebanadas de filete de res marinadas y acompañadas con arúgula y parmesano",
      },
      {
        name: "Arancini",
        price: "$190",
        description: "Croquetas de risotto con jamón serrano y queso.",
      },
      {
        name: "Melanzane Filanti",
        price: "$170",
        description:
          "Rodajas de berenjena capeadas, gratinadas con queso y servidas sobre salsa cremosa de pimiento asado.",
      },
    ],
  },
  {
    id: "seccion3",
    name: "Ensaladas",
    urlPath: "ensaladas",
    dishes: [
      {
        name: "Prosciutto",
        price: "$210",
        description:
          "Lechuga, espárragos, jamón serrano y parmesano con vinagreta de balsámico.",
      },
      {
        name: "Mista",
        price: "$160",
        description: "Lechugas, tomate y queso con vinagreta de la casa",
      },
      {
        name: "Cesare",
        price: "$160",
        description:
          "Lechuga orejona, crotones y parmesano con aderezo clásico.",
      },
      {
        name: "Caprese",
        price: "$200",
        description:
          "Rodajas de mozzarella fresco y tomate con aceite de oliva y albahaca.",
      },
    ],
  },
  {
    id: "seccion4",
    name: "Zuppe y Rissoto",
    urlPath: "zuppe",
    dishes: [
      {
        name: "Minestrone",
        price: "$155",
        description:
          "Sopa de verduras mixtas y alubias con un toque de salsa pomodoro.",
      },
      {
        name: "Crema di Portobello",
        price: "$160",
        description: "Crema de hongo portobello.",
      },
      {
        name: "Al Tartufo",
        price: "$240",
        description:
          "Arroz italiano a la parmesana y salsa tartufata. Terminado con laminas de trufa fresca.",
      },
      {
        name: "Allo Scoglio",
        price: "$245",
        description: "Arroz con mezcla de mariscos al vino blanco",
      },
    ],
  },
  {
    id: "seccion5",
    name: "Pizza y Pasta",
    urlPath: "pizza",
    dishes: [
      {
        name: "Margherita",
        price: "$180",
        description: "Salsa de tomate y mozzarella",
      },
      {
        name: "Parma",
        price: "$230",
        description: "Salsa de tomate, mozzarella y jamón serrano",
      },
      {
        name: "Toscana",
        price: "$200",
        description:
          "Salsa de tomate, mozzarella y salchicha italiana hecha en casa",
      },
      {
        name: "Pepperoni",
        price: "$220",
        description: "Salsa de tomate, mozzarella y pepperoni",
      },
      {
        name: "Capricciosa",
        price: "$260",
        description:
          "Salsa de tomate, mozzarella, jamón serrano, champiñones, aceitunas y alcachofas",
      },
      {
        name: "Quattro Formaggi",
        price: "$230",
        description: "Salsa de tomate y mezcla de cuatro quesos",
      },
      {
        name: "Penne all Arrabiata",
        price: "$170",
        description: "Con salsa de tomate, ajo y chile.",
      },
      {
        name: "Spaghetti alla Bolognese",
        price: "$200",
        description: "Con salsa a base de tomate y carne",
      },
      {
        name: "Fettuccine Alfredo",
        price: "$190",
        description: "Con salsa de crema, mantequilla y parmesano.",
      },
      {
        name: "Linguine al Pesto",
        price: "$220",
        description: "Con salsa de albahaca, ajo, piñón y parmesano.",
      },
      {
        name: "Ravioli di Gamberi",
        price: "$240",
        description: "Rellenos de camarón con salsa cremosa al chipotle.",
      },
      {
        name: "Lasagne al Forno",
        price: "$220",
        description: "Con salsa de tomate y carne, bechamel, y queso.",
      },
    ],
  },
  {
    id: "seccion6",
    name: "Platos Fuertes",
    urlPath: "fuertes",
    dishes: [
      {
        name: "Petto de Pollo Alfonso",
        price: "$240",
        description:
          "Pechuga de pollo (250 g) con champiñones, tocino y salsa a base de crema y parmesano",
      },
      {
        name: "Arrachera alla Griglia",
        price: "$360",
        description: "Arrachera (300 g) asada acompañada de papas al romero.",
      },
      {
        name: "Rib-Eye alla Griglia",
        price: "$490",
        description:
          "Rib-eye (450 g) asado, acompañado de papas cambray picosas y esparragos.",
      },
      {
        name: "Salmone alla Griglia",
        price: "$360",
        description:
          "Salmón (250 g) asado con toque de vino blanco y alcaparras, acompañado de verduras asadas.",
      },
      {
        name: "Fileto al Pepe Verde",
        price: "$390",
        description:
          "Filete de Res (250g) en salsa cremosa con pimienta verde, acompañado de spaghetti al pomodoro y verduras a la mantequilla.",
      },
    ],
  },
  {
    id: "seccion7",
    name: "Postres",
    urlPath: "postres",
    dishes: [
      {
        name: "Tirami-sù",
        price: "$140",
        description: "Capas de pan dulce con crema, café espresso y cocoa",
      },
      {
        name: "Torta Padana",
        price: "$140",
        description: "Pastel de elote acompañado de helado de cajeta",
      },
      {
        name: "Torta Caprese",
        price: "$150",
        description:
          "Pastel de chocolate y almendra acompañado de helado de vainilla",
      },
      {
        name: "Strudel di Mele",
        price: "$150",
        description:
          "Masa de hojaldre rellena de manzana acompañada de helado de vainilla",
      },
      {
        name: "Gelato",
        price: "$100",
        description: "Helado de vainilla, chocolate, fresa, cajeta 0 nutella",
      },
    ],
  },
];

export default menuData;
