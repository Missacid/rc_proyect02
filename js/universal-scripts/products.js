let products = JSON.parse(localStorage.getItem("products")) || [];
let productosLocalStorage = localStorage.setItem(
  "products",
  JSON.stringify(products)
);
function añadirProductos() {
  products.push(
    {
      nombre: "Assassin's Creed Valhalla",
      categoria: "Acción",
      descripcion:
        "Assassin's Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassin's Creed Odyssey.",
      link_de_video: "https://www.youtube.com/embed/1Z7mIKGzowQ",
      requisitos:
        "Los requisitos mínimos incluyen un sistema operativo Windows XP/Vista/7, un procesador de 1.7 GHz, al menos 512 MB de memoria RAM, una tarjeta gráfica compatible con DirectX 8.1 (como la serie NVIDIA GeForce 2 MX o ATI Radeon 8500), y al menos 4.6 GB de espacio libre en el disco duro.  Por otro lado, los requisitos recomendados para una experiencia de juego más fluida incluyen un sistema operativo Windows XP/Vista/7, un procesador de 3 GHz o superior, al menos 1 GB de memoria RAM, una tarjeta gráfica compatible con DirectX 9 (como la serie NVIDIA GeForce 7600 GT o ATI Radeon X1600), y al menos 4.6 GB de espacio libre en el disco duro.A",
      precio: "1000",
      banner:
        "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1d4SxvHLDjroqkzZqX2H1Z/8c205dcf769104b75057edd6960fdf5e/STD_HomepageSlider_1920x1080.jpg",
      portada:
        "https://m.media-amazon.com/images/I/61FZ00HJ-1L._AC_UF894,1000_QL80_.jpg",
      codigo: 0,
    },
    {
      nombre: "Battlefield 2042",
      categoria: "FPS",
      descripcion:
        "Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por EA Digital Illusion CE, Criterion Games, Ripple Effect y distribuido por Electronic Arts.",
      link_de_video: "https://www.youtube.com/embed/ASzOzrB-a9E",
      requisitos:
        "Para disfrutar de la experiencia de juego en Battlefield 2042 en PC, se requieren los siguientes requisitos:  Los requisitos mínimos incluyen un sistema operativo Windows 10 de 64 bits, un procesador Intel Core i5 6600K o AMD FX-8350, al menos 8 GB de memoria RAM, una tarjeta gráfica NVIDIA GeForce GTX 1050 Ti o AMD Radeon RX 560, y al menos 50 GB de espacio libre en el disco duro.  Por otro lado, los requisitos recomendados para una experiencia de juego óptima incluyen un sistema operativo Windows 10 de 64 bits, un procesador Intel Core i7 4790 o AMD Ryzen 5 3600, al menos 16 GB de memoria RAM, una tarjeta gráfica NVIDIA GeForce RTX 2060 o AMD Radeon RX 5600 XT, y al menos 50 GB de espacio libre en el disco duro.",
      precio: "12000",
      banner: "https://pbs.twimg.com/media/E3dYW1KXwAUBo6G.jpg",
      portada:
        "https://www.serialgaming.co.uk/wp-content/uploads/2021/11/battlefield-2042-gold-edition-cover.png",
      codigo: 1,
    },
    {
      nombre: "BioShock Infinite",
      categoria: "FPS",
      descripcion:
        "BioShock Infinite es un videojuego de disparos en primera persona y la tercera entrega de la franquicia BioShock, desarrollado por Irrational Games y distribuido por 2K Games, siendo dirigido por Ken Levine, para las plataformas Microsoft Windows, PlayStation 3, Xbox 360 y Linux/SteamOS.1​ con su respectivo lanzamiento mundial el 26 de marzo de 2013.2​ BioShock Infinite no es una secuela directa de las anteriores dos entregas, tomando lugar y tiempo antes de los eventos ocurridos en susodichas, pero reteniendo aún la misma esencia en elementos de jugabilidad y estructura estética en lo que ambientación se refiere. Situado en el año 1912, el jugador controlará a Booker DeWitt, un exagente de Pinkerton en su intento de rescatar a una mujer llamada Elizabeth, quien se encuentra atrapada a bordo de Columbia, una ciudad flotante en decadencia a punto de colapsar.  Más tarde fue relanzado para PS4, XboxOne y Nintendo Switch.",
      link_de_video: "https://www.youtube.com/embed/J_gEzOZKyE4",
      requisitos:
        "Los requisitos mínimos para jugar BioShock Infinite en PC son: Windows Vista Service Pack 2 32-bit, procesador Intel Core 2 DUO 2.4 GHz o AMD Athlon X2 2.7 GHz, 2 GB de memoria RAM, tarjeta gráfica ATI Radeon 3870 o Nvidia 8800 GT o Intel HD 3000 Integrated Graphics con al menos 512 MB de VRAM y compatibilidad con DirectX 10 1. Los requisitos recomendados son: Windows 7 Service Pack 1, procesador Quad Core, 4 GB de memoria RAM y tarjeta gráfica ATI Radeon 6950 o Nvidia GeForce GTX 560 con al menos 1024 MB de VRAM y compatibilidad con DirectX 11 1.",
      precio: "700",
      banner:
        "https://cdn1.epicgames.com/offer/df2da503f2074f078f8090da3c27ec47/EGS_BioShockInfiniteCompleteEdition_MassMediaGames_S1_2560x1440-bf29199cfe7a76f62965f582571024f6",
      portada:
        "https://m.media-amazon.com/images/I/91jMNlKDQsL._AC_UF1000,1000_QL80_.jpg",
      codigo: 2,
    },
    {
      nombre: "Borderlands 3",
      categoria: "FPS",
      descripcion:
        "Borderlands 3​ es un videojuego de disparos en primera persona con elementos de rol, se trata de la secuela del videojuego de 2012, Borderlands 2. Fue desarrollado por Gearbox Software y distribuido por 2K Games para las plataformas Google Stadia, Microsoft Windows, PlayStation 4, Xbox One y Pc.",
      link_de_video: "https://www.youtube.com/embed/DU6wWn-oVpU",
      requisitos: "No disponible",
      precio: "3000",
      banner:
        "https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg",
      portada:
        "https://image.api.playstation.com/vulcan/ap/rnd/202010/2323/p50N4PBK9rNanGYKFecTvac5.png",
      codigo: 3,
    },
    {
      nombre: "Cyberpunk 2077",
      categoria: "Acción",
      descripcion:
        "Cyberpunk 2077 es un videojuego desarrollado y publicado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4 y Xbox One el 10 de diciembre de 2020, y posteriormente en PlayStation 5, Xbox Series X|S y Google Stadia.",
      link_de_video: "https://www.youtube.com/embed/qIcTM8WXFjk",
      requisitos:
        "Los requisitos mínimos incluyen un sistema operativo Windows 7/10 de 64 bits, un procesador Intel Core i5-3570K o AMD FX-8310, al menos 8 GB de memoria RAM, una tarjeta gráfica NVIDIA GeForce GTX 780 de 3 GB o AMD Radeon RX 470, y al menos 70 GB de espacio libre en el disco duro.  Por otro lado, los requisitos recomendados para una experiencia de juego más óptima incluyen un sistema operativo Windows 10 de 64 bits, un procesador Intel Core i7-4790 o AMD Ryzen 3 3200G, al menos 12 GB de memoria RAM, una tarjeta gráfica NVIDIA GeForce GTX 1060 de 6 GB o AMD Radeon R9 Fury, y al menos 70 GB de espacio libre en el disco duro.",
      precio: "9000",
      banner:
        "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EAT2VA3SYRF6NAV2ZXOXF3DZHQ.jpg",
      portada:
        "https://i.pinimg.com/originals/70/38/e0/7038e039bdaea0de36fee33ca14f3155.png",
      codigo: 3,
    },
    {
      nombre: "F1 23",
      categoria: "Simulación",
      descripcion:
        "F1 23 es un próximo videojuego de carreras desarrollado por Codemasters y publicado por EA Sports. Es la decimosexta entrada en la serie F1 de Codemasters. Posee la licencia oficial para los campeonatos de Fórmula 1 y Fórmula 2 de 2023.",
      link_de_video: "https://www.youtube.com/embed/qIcTM8WXFjk	",
      requisitos:
        "Los requisitos mínimos para jugar F1 23 en PC son: Windows 10 64-bit (versión 21H1 o superior), procesador Intel Core i3-2130 o AMD FX 4300, 8 GB de memoria, GPU NVIDIA GTX 1050 Ti o AMD RX 470 y 80 GB de espacio en disco duro 1. Los requisitos recomendados son: Windows 10 64-bit (versión 21H1 o superior), procesador Intel Core i5-9600K o AMD Ryzen 2600X, 16 GB de memoria, GPU NVIDIA GTX 1060 Ti o AMD RX 590 y 80 GB de espacio en disco duro",
      precio: "12000",
      banner:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/f1-23-2971108.jpg?tf=3840x",
      portada:
        "https://cdn.racinggames.gg/images/ncavvykf/racinggames/1ae7842787702496ad18c96b195f0b101957e7eb-1080x1350.jpg",
      codigo: 4,
    }
  );
  localStorage.setItem("products", JSON.stringify(products));
}

if (products.length == 0) {
  añadirProductos();
}
