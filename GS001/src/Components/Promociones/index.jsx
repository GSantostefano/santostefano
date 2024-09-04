import bgi2 from "../../assets/img/pexels-karolina-grabowska-4210336.jpg";
const Promociones = () => {
  return (
    <div>
      <div className="hero min-h-[100vh] w-auto flex flex-col justify-center items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgi2})`,
            backgroundSize: "cover",
            backgroundPosition: "top", // Centra la imagen

            filter: "blur(5px)",
          }}
        />

        <div
          className="text-9xl  flex flex-col items-center text-white relative z-2"
          style={{
            fontFamily: "'Playfair Display', serif", // Aquí se aplica la fuente
            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))",
          }}
        >
          Promociones
          <span className="text-3xl  -mt-3 font-light">Comprá online con las mejores ofertas</span>
        </div>
        <div
          className="bg-white cursor-pointer w-56 mt-28 h-60 rounded-lg"
          onClick={() => showProduct(data.data)}
        >
          <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
              blackrose
            </span>
            <img
              className="w-full h-full object-cover rounded-lg"
              src="blackrose.jpg"
              alt="Jabobes"
            />
            {/* {renderIcon(data.data.id)} */}
          </figure>
          <p className="flex justify-between items-center">
            <span className="text-sm font-light">Jabobes</span>
            <span className="text-lg font-medium">$ 3000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
