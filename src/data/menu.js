import imgCarne from '../assets/carne.jpg';
import imgCarneConPapa from '../assets/carneconpapa.jpg';
import imgComida4 from '../assets/comida4.jpg';
import imgMesa from '../assets/MESA.jpg';
import imgMesasAfuera from '../assets/Mesas_afuera.jpg';
import imgMesas5 from '../assets/mesas5.jpg';
import imgPlatoDeComida from '../assets/Platodecomida.jpg';
import imgPlatoDeComida2 from '../assets/Platodecomida2.jpg';
import imgPlatoDeComida3 from '../assets/Platodecomida3.jpg';

import imgAsadotira from '../assets/asadotira.jpg';
import imgBifechorizo from '../assets/bifechorizo.jpg';
import imgBluecheeseburger from '../assets/bluecheeseburger.jpg';
import imgBurgerbrasa from '../assets/burgerbrasa.jpg';
import imgBurgertrufada from '../assets/burgertrufada.jpg';
import imgCintasragu from '../assets/cintasragu.jpg';
import imgEmpanada from '../assets/empanada.jpg';
import imgEntrana from '../assets/entraña.jpg';
import imgFlan from '../assets/flan.jpg';
import imgMollega from '../assets/mollega.jpg';
import imgOjobife from '../assets/ojobife.jpg';
import imgPanqueque from '../assets/panqueque.jpg';
import imgPapasrusticas from '../assets/papasrusticas.jpg';
import imgProvoleta from '../assets/provoleta.jpg';
import imgRaviolescordero from '../assets/raviolescordero.jpg';
import imgSorrentinocalabaza from '../assets/sorrentinocalabaza.jpg';
import imgVegetalesrescoldo from '../assets/vegetalesrescoldo.jpg';
import imgVolcan from '../assets/volcan.jpg';

export const menuItems = [
  // ENTRADAS
  { id: 1, category: "Entradas", name: "Empanada de Carne Cortada a Cuchillo", desc: "Masa casera, carne de pastura, verdeo y pimentón ahumado.", price: "$2.500", featured: false, img: imgEmpanada },
  { id: 2, category: "Entradas", name: "Provoleta BRASA", desc: "Queso provolone fundido a la leña, tomates asados, orégano fresco y oliva.", price: "$6.800", featured: true, img: imgProvoleta },
  { id: 3, category: "Entradas", name: "Mollejas al Limón", desc: "Crocantes por fuera, tiernas por dentro. Marinadas en limón y tomillo.", price: "$9.500", featured: false, img: imgMollega },
  
  // CARNES
  { id: 4, category: "Carnes", name: "Ojo de Bife (400g)", desc: "Corte premium madurado 21 días, cocción a fuego lento con leña de quebracho.", price: "$18.500", featured: true, img: imgOjobife },
  { id: 5, category: "Carnes", name: "Entraña Fina", desc: "Tierna y jugosa, sellada a fuego fuerte. Acompañada de chimichurri casero.", price: "$21.000", featured: false, img: imgEntrana },
  { id: 6, category: "Carnes", name: "Bife de Chorizo (500g)", desc: "El clásico argentino. Borde de grasa crujiente y centro rosado perfecto.", price: "$17.000", featured: false, img: imgBifechorizo },
  { id: 7, category: "Carnes", name: "Asado de Tira", desc: "Costillar cortado transversalmente, sabor intenso a humo y brasas.", price: "$16.500", featured: false, img: imgAsadotira },

  // PASTAS
  { id: 8, category: "Pastas", name: "Ravioles de Cordero", desc: "Masa al huevo estirada a mano, rellenos de cordero braseado, salsa de reducción de Malbec.", price: "$14.000", featured: true, img: imgRaviolescordero },
  { id: 9, category: "Pastas", name: "Sorrentinos de Calabaza", desc: "Rellenos de calabaza asada y muzzarella, con crema de salvia y almendras tostadas.", price: "$11.500", featured: false, img: imgSorrentinocalabaza },
  { id: 10, category: "Pastas", name: "Cintas con Ragú", desc: "Pappardelle artesanales con estofado de ternera de cocción prolongada.", price: "$12.800", featured: false, img: imgCintasragu },

  // HAMBURGUESAS
  { id: 11, category: "Hamburguesas", name: "Burger BRASA", desc: "Blend de asado y roast beef (200g), queso cheddar, panceta ahumada, cebolla crispy y barbacoa casera.", price: "$9.500", featured: false, img: imgBurgerbrasa },
  { id: 12, category: "Hamburguesas", name: "Blue Cheese Burger", desc: "Medallón de 200g, queso azul fundido, rúcula fresca, cebolla caramelizada y alioli.", price: "$9.800", featured: false, img: imgBluecheeseburger },
  { id: 13, category: "Hamburguesas", name: "Burger Trufada", desc: "Blend premium, queso gruyere, champiñones salteados y mayonesa de trufa negra.", price: "$10.500", featured: false, img: imgBurgertrufada },

  // GUARNICIONES
  { id: 14, category: "Guarniciones", name: "Papas Rústicas al Romero", desc: "Papas andinas asadas con ajo, romero y escamas de sal marina.", price: "$4.500", featured: false, img: imgPapasrusticas },
  { id: 15, category: "Guarniciones", name: "Vegetales al Rescoldo", desc: "Mix de vegetales de estación asados directamente sobre las brasas.", price: "$5.200", featured: false, img: imgVegetalesrescoldo },

  // POSTRES
  { id: 16, category: "Postres", name: "Volcán de Dulce de Leche", desc: "Centro líquido y tibio, acompañado de helado de crema americana.", price: "$6.000", featured: false, img: imgVolcan },
  { id: 17, category: "Postres", name: "Flan Casero", desc: "Receta tradicional, servido con abundante crema chantilly y dulce de leche.", price: "$4.800", featured: false, img: imgFlan },
  { id: 18, category: "Postres", name: "Panqueques Quemados al Ron", desc: "Rellenos de dulce de leche, flambeados en la mesa y espolvoreados con azúcar impalpable.", price: "$6.500", featured: false, img: imgPanqueque }
];

export const galleryImages = [
  imgCarne,
  imgCarneConPapa,
  imgComida4,
  imgMesa,
  imgMesasAfuera,
  imgMesas5,
  imgPlatoDeComida,
  imgPlatoDeComida2,
  imgPlatoDeComida3
];