import Layout from '../../Components/Layout';
import bgi2 from '../../assets/img/pexels-yaroslav-shuraev-6811176.jpg';

function SalesBaño() {
  return (
    <div className="hero min-h-[100vh] w-auto flex flex-col justify-center items-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgi2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Centra la imagen
          filter: 'blur(5px)',
        }}
      />

      <div
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex flex-col items-center text-white relative z-2 text-center"
        style={{
          fontFamily: "'Playfair Display', serif", // Aquí se aplica la fuente
          filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))',
        }}
      >
        Proximamente
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-2 sm:-mt-4">
          Sales de Baño
        </span>
      </div>
    </div>
  );
}

export default SalesBaño;
