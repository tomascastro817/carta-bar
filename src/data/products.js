// src/data/products.js
import packBronce from '../assets/pack-bronce.webp';
import packPlata from '../assets/pack-plata.webp';
import packOro from '../assets/pack-oro.webp';
import interior from '../assets/interior.webp';
import motor from '../assets/motor.webp';
import preventa from '../assets/preventa.webp';
import pulidos from '../assets/pulidos.webp';
import tapizado from '../assets/tapizado.webp';
const products = [
  {
    id: 1,
    nombre: 'Pack Bronce (Tradicional)',
    descripcion: ' Aspirado completo, Limpieza y acondicionamiento de plásticos (interior y exterior), Detallado exterior, Limpieza y desinfección de cristales, Acondicionamiento de cubiertas.',
    precioAuto: 15000,
    precioCamioneta: 18000,
    categoria: 'Packs Premium',
    imagen: packBronce,
    nivel: 'Bronce'
  },
  {
    id: 2,
    nombre: 'Pack Plata (Profundo)',
    descripcion: 'Descontaminado férrico completo, lavado a vapor y encerado acrílico de alta tecnología. Aporta un acabado vitrificado con protección de hasta 6 meses.',
    precioAuto: 45000,
    precioCamioneta: 54000,
    categoria: 'Packs Premium',
    imagen: packPlata,
    nivel: 'Plata'
  },
  {
    id: 3,
    nombre: 'Pack Oro ()',
    descripcion: 'Corrección de barniz en múltiples etapas para eliminar el 95% de hologramas, seguido de un recubrimiento cerámico 9H que blindará tu pintura por años.',
    precioAuto: 180000,
    precioCamioneta: 210000,
    categoria: 'Packs Premium',
    imagen: preventa,
    nivel: 'Oro'
  },
  {
    id: 4,
    nombre: 'Tratamiento cerámico',
    descripcion: 'Restauración completa del habitáculo. Limpieza de tapicería con inyección-extracción, nutrición de cueros y esterilización de conductos con ozono.',
    precioAuto: 35000,
    precioCamioneta: 42000,
    categoria: 'Pulidos',
    imagen: pulidos,
  },
  {
    id: 5,
    nombre: 'Preventa',
    descripcion: 'Restauración completa del habitáculo. Limpieza de tapicería con inyección-extracción, nutrición de cueros y esterilización de conductos con ozono.',
    precioAuto: 35000,
    precioCamioneta: 42000,
    categoria: 'Preventa',
    imagen: interior,
  },
  {
    id: 6,
    nombre: 'limpieza de motor',
    descripcion: 'Limpieza criogénica o a vapor profundo, desengrasante dieléctrico y sellado de plásticos para un aspecto mejor que recién salido de fábrica.',
    precioAuto: 25000,
    precioCamioneta: 30000,
    categoria: 'Especiales',
    imagen: motor,
  },
  {
    id: 7,
    nombre: 'restauracion de opticas',
    descripcion: 'Pulido milimétrico del policarbonato para eliminar la oxidación y sellado cerámico permanente. Claridad restaurada al 100%.',
    precioAuto: 25000,
    precioCamioneta: 30000,
    categoria: 'Especiales',
    imagen: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    nombre: 'limpieza de tapizados',
    descripcion: 'Pulido milimétrico del policarbonato para eliminar la oxidación y sellado cerámico permanente. Claridad restaurada al 100%.',
    precioAuto: 25000,
    precioCamioneta: 30000,
    categoria: 'Especiales',
    imagen: tapizado,
  }
];

export default products;