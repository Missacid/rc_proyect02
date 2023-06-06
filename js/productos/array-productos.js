const products = [
  {
    titulo: "Zelda Breath of The Wild",
    categoria: "Aventura",
    descripcion: "La aventura de Zelda Breath of The Wild",
    requisitos: "XD",
    id: 1,
    precio: 2500,
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    banner: "https://i.blogs.es/15da49/zelda00/1366_2000.jpg",
    video: "https://www.youtube.com/embed/ofH5ptn5w-A",
  },
  {
    titulo: "Fortnite",
    categoria: "Battle Royale",
    descripcion:
      "Fortnite es un juego de acción y supervivencia en línea desarrollado por Epic Games. Ambientado en un colorido mundo abierto, el juego combina elementos de construcción, exploración, disparos y batallas en un emocionante escenario de estilo de dibujos animados.",
    requisitos:
      "Los requisitos mínimos para jugar Fortnite en PC son los siguientes:    Sistema operativo: Windows 7/8/10 de 64 bits o macOS Sierra (10.12.6) o posterior.   Procesador: Intel Core i3-3225 de 3.3 GHz o equivalente.   Memoria RAM: 4 GB.   Tarjeta gráfica: Intel HD 4000 en PC o Intel Iris Pro 5200 en Mac, o una tarjeta gráfica equivalente de AMD.   Espacio en disco duro: Al menos 20 GB de espacio libre.   Conexión a Internet: Se requiere una conexión a Internet de banda ancha.  Es importante tener en cuenta que estos son los requisitos mínimos y el juego puede funcionar con estas especificaciones, pero es posible que no se obtenga un rendimiento óptimo. Para una experiencia de juego más fluida y de mayor calidad gráfica, se recomienda cumplir con los requisitos recomendados o superiores.   Los requisitos mínimos pueden variar según las actualizaciones del juego, por lo que es aconsejable verificar los requisitos más actualizados en el sitio oficial de Fortnite o en la plataforma donde se planea jugar.",
    id: 2,
    precio: 0,
    cover:
      "https://pcgamercdmx.mx/wp-content/uploads/2023/05/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    banner:
      "https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-19b42864f188.jpg",
    video: "https://www.youtube.com/embed/uyvtE0SU8Gw",
  },
  {
    titulo: "FIFA 23",
    categoria: "Deportes",
    descripcion:
      "FIFA es una aclamada serie de videojuegos de simulación de fútbol desarrollada por EA Sports. Cada entrega de FIFA busca recrear la emoción y la experiencia del fútbol profesional, ofreciendo a los jugadores la oportunidad de controlar a sus equipos y jugadores favoritos en un entorno virtual.",
    requisitos: "",
    id: 3,
    precio: 89000,
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/GU1vXFJpbzGYNV6UN3U0Cnnb.png",
    banner:
      "https://assets.xboxservices.com/assets/11/21/11214bbe-412c-45b0-b0fb-1d93bd38ec42.jpg?n=FIFA-23_Gallery-0_1350x759_04.jpg",
    video: "https://www.youtube.com/embed/0tIW1X2dv0c",
  },
  {
    titulo: "Red Dead Redemption 2",
    categoria: "Aventura",
    descripcion: "Lorem",
    requisitos: "LoremRequisitos",
    id: 4,
    precio: 7000,
    cover:
      "https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg",
    banner: "https://gepig.com/game_cover_460w/3905.jpg",
    video: "https://www.youtube.com/embed/MyaYlbizpvs",
  },
];

localStorage.setItem("products", JSON.stringify(products));
