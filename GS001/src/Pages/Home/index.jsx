import Layout from '../../Components/Layout';
import bgi2 from '../../assets/img/pexels-selimdersiniz-10931202.jpg';

function Home() {
  return (
    <div className="hero min-h-[100vh] w-auto flex flex-col justify-center items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgi2})`,
          backgroundSize: 'cover',
          filter: 'blur(5px)',
        }}
      />

      <div
        className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex flex-col items-center text-white relative z-2"
        style={{
          fontFamily: "'Playfair Display', serif",
          filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))',
        }}
      >
        Andrea Pérez
        {/* <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light -mt-2 md:mt-5">
        Aromas Fantasticos
        </span> */}
      </div>
    </div>
  );
}

export default Home;
