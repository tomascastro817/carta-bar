// src/data/products.js
import packBronce from '../assets/pack-bronce.webp';
import packPlata from '../assets/pack-plata.webp';
import packOro from '../assets/pack-oro.webp';
import interior from '../assets/interior.webp';
import motor from '../assets/motor.webp';
import preventa from '../assets/preventa.webp';
import pulidos from '../assets/pulidos.webp';
import tapizado from '../assets/tapizado.webp';
import opticas from '../assets/opticas.webp';
import moto from '../assets/moto.webp';
import acrilico from '../assets/acrilico.webp';
import abrillantado from '../assets/abrillantado.webp';

const products = [
  {
    id: 1,
    nombre: 'Pack Bronce (Tradicional)',
    descripcion: 'Aspirado completo, Limpieza y acondicionamiento de plásticos (interior y exterior), Detallado exterior, Limpieza y desinfección de cristales, Acondicionamiento de cubiertas.',
    precioAuto: 35000,
    precioCamioneta: 50000,
    categoria: 'Packs Premium',
    imagen: packBronce,
    nivel: 'Bronce'
  },
  {
    id: 2,
    nombre: 'Pack Plata (Profundo)',
    descripcion: 'Aspirado completo, Limpieza detallado y desinfección de plásticos (interior y exterior), Acondicionamiento de plásticos, Lavado detallado de llantas, Detallado exterior, Encerado para mayor brillo y protección, Limpieza y desinfección de cristales, Acondicionamiento de cubiertas',
    precioAuto: 120000,
    precioCamioneta: 150000,
    categoria: 'Packs Premium',
    imagen: packPlata,
    nivel: 'Plata'
  },
  {
    id: 3,
    nombre: 'Pack Oro (Integral)',
    descripcion: 'Aspirado completo, Limpieza detallado y desinfección de plásticos (interior y exterior), Limpieza profunda de tapizados, Acondicionamiento de plásticos, Lavado detallado de llantas, Detallado exterior, Encerado, Limpieza y desinfección de cristales, Acondicionamiento de cubiertas',
    precioAuto: 230000,
    precioCamioneta: 250000,
    categoria: 'Packs Premium',
    imagen: preventa,
    nivel: 'Oro'
  },
  {
    id: 4,
    nombre: 'Tratamiento cerámico',
    descripcion: 'Detallado interior, Acondicionado interior, Detallado exterior, Descontaminado de pintura, Pulido profundo (corrección 2 a 3 pasos), Tratamiento cerámico Vonixx v-paint (3 años de proteccion)',
    precioAuto: 350000,
    precioCamioneta: 450000,
    categoria: 'Pulidos',
    imagen: pulidos,
  },
  {
    id: 5,
    nombre: 'Preventa',
    descripcion: 'Limpieza de exterior detallada con prelavado, Limpieza de llanta, Detallado de interior completo, Acondicionamiento interior/exterior, Descontaminado de pintura, Abrillantado (corrección 1 paso), Cera soft99 (protección 3 meses)',
    precioAuto: 200000,
    precioCamioneta: 230000,
    categoria: 'Preventa',
    imagen: interior,
  },
  {
    id: 6,
    nombre: 'limpieza de motor',
    descripcion: 'Desengrase de motor, Eliminación de suciedad y residuos, Limpieza de plásticos y componentes, Acondicionado de superficies, Terminación prolija y protegida',
    precioAuto: 45000,
    precioCamioneta: 55000,
    categoria: 'Especiales',
    imagen: motor,
  },
  {
    id: 7,
    nombre: 'restauracion de opticas',
    descripcion: 'Eliminación de opacidad y amarillamiento, Pulido de superficie, Restauración del brillo original, Mejora en la iluminación nocturna, Protección final',
    precioAuto: 45000,
    precioCamioneta: 50000,
    categoria: 'Especiales',
    imagen: opticas,
  },
  {
    id: 8,
    nombre: 'limpieza de tapizados',
    descripcion: 'Aspirado completo, Lavado profundo de butacas y alfombras, Eliminación de manchas difíciles, Neutralización de olores, Secado controlado',
    precioAuto: 80000,
    precioCamioneta: 100000,
    categoria: 'Especiales',
    imagen: tapizado,
  },
  {
    id: 9,
    nombre: 'pack oro (moto)',
    descripcion: 'Limpieza de exterior detallada con prelavado, Acondicionamiento exterior, Descontaminado de pintura, Pulido Profundo (corrección 2 a 3 paso), Protección cerámica (duración 3 años)',
    precioAuto: 120000,
    precioCamioneta: 30000,
    categoria: 'Motos',
    imagen: moto,
  },
  {
    id: 10,
    nombre: 'Tratamiento acrílico',
    descripcion: 'Detallado interior, Acondicionado interior, Detallado exterior, Descontaminado de pintura, Pulido profundo (corrección 2 a 3 pasos), Cera soft99 fusso coat (poteccion 12 meses)',
    precioAuto: 280000,
    precioCamioneta: 340000,
    categoria: 'Pulidos',
    imagen: acrilico,
  },
  {
    id: 11,
    nombre: 'Abrillantado',
    descripcion: 'Detallado interior, Acondicionado interior, Detallado exterior, Descontaminado de pintura, Abrillantado (corrección 1 pasos), Cera soft99 (poteccion 3 meses)',
    precioAuto: 120000,
    precioCamioneta: 150000,
    categoria: 'Pulidos',
    imagen: abrillantado,
  }
];

export default products;