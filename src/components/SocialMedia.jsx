import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  // Redes sociales del bar
  const facebookUrl = "https://www.facebook.com/barvintage"; // Reemplaza con el enlace de la página de Facebook del bar
  const whatsappUrl = "https://twitter.com/barvintage"; // Reemplaza con el enlace de la cuenta de Twitter del bar
  const instagramUrl = "https://www.instagram.com/barvintage"; // Reemplaza con el enlace de Instagram del bar

  return (
    <div className="bg-white relative -top-4 z-10 pt-6 pb-3 rounded-t-xl  mx-auto">
      {/* Logo y Nombre */}
      <div className="flex items-center justify-center space-x-6 pb-4">
        {/* Logo */}
        <img
          src="https://img.freepik.com/vector-premium/vector-logotipo-barra-cerveza-vintage_555909-244.jpg?semt=ais_hybrid"
          alt="Logo del Local"
          className="w-24 h-24 rounded-full shadow-2xl"
        />
        {/* Nombre */}
        <h3 className="text-black text-2xl font-semibold tracking-wide">
          Beer Bar
        </h3>
      </div>
      <div className="border-b border-gray-900 mb-6 shadow-md w-10/12 mx-auto"></div>
      {/* Íconos de redes sociales */}
      <div className="flex justify-center space-x-6 border-b border-gray-50 shadow-md pb-3">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full shadow-lg"
        >
          <FaFacebook className="text-blue-500 text-3xl" />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full shadow-lg"
        >
          <FaWhatsapp className="text-green-500 text-3xl" />
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full shadow-lg"
        >
          <FaInstagram className="text-pink-400 text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
