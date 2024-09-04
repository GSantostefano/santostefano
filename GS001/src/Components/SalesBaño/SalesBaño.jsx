import Layout from '../../Components/Layout';
import bgi2 from '../../assets/img/pexels-yaroslav-shuraev-6811176.jpg';

function SalesBaño() {
  return (
    <div className="hero min-h-[100vh] w-auto flex flex-col justify-center items-center">
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
        className="text-9xl  flex flex-col items-center text-white relative z-2"
        style={{
          fontFamily: "'Playfair Display', serif", // Aquí se aplica la fuente
          filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))',
        }}
      >
        Proximamente
        <span className="text-3xl  -mt-4 font-light">Sales de Baño</span>
      </div>
    </div>
  );
}

export default SalesBaño;
