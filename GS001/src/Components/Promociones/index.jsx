import bgi2 from "../../assets/img/pexels-karolina-grabowska-4210336.jpg";

const Promociones = () => {
  const cardsData = [
    { id: 1, title: "Jabon Blackrose", price: 3000, img: "blackrose.jpg", label: "blackrose" },
    // ... el resto de los datos de las tarjetas
  ];

  return (
    <div>
      <div className="hero min-h-[100vh] w-auto flex flex-col justify-center items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgi2})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            filter: "blur(5px)",
          }}
        />

        <div
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-20 sm:mt-40 flex flex-col items-center text-white relative z-2 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))",
          }}
        >
          Promociones
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-2 sm:-mt-3">
            Comprá online con las mejores ofertas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative z-2 overflow-y-auto h-[calc(75vh-12rem)] pr-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white cursor-pointer w-48 h-56 sm:w-56 sm:h-60 rounded-lg shadow-lg transition transform hover:scale-105"
              onClick={() => showProduct(card)}
            >
              <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                  {card.label}
                </span>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={card.img}
                  alt={card.title}
                />
              </figure>
              <p className="flex justify-between items-center px-2">
                <span className="text-sm font-light">{card.title}</span>
                <span className="text-lg font-medium">$ {card.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promociones;
