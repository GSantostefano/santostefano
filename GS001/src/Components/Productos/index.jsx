const Componente = () => {
  return (
    <div className="flex flex-wrap max-w-7xl p-5 justify-between">
      <div className="bg-stone-950/30 m-2 cursor-pointer w-56 h-60 rounded-lg mb-5 transform transition-transform duration-300 hover:scale-105 hover:bg-stone-950/20 hover:shadow-black hover:shadow-lg">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-stone-950/90 rounded-lg text-xs m-2 px-3 py-0.5 hover:bg-stone-950/70">
            BlackRose
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="coldmint.jpg"
            alt="BlackRose"
          />
        </figure>
        <p className="flex justify-between items-center">
          <span className="text-sm font-light p-2 hover:text-white">Jabón</span>
          <span className="text-lg font-medium p-2 hover:text-white">$3500</span>
        </p>
      </div>

      {/* Repite el bloque para cada producto, cambiando solo el contenido */}
      <div className="bg-stone-950/30 m-2 cursor-pointer w-56 h-60 rounded-lg mb-5 transform transition-transform duration-300 hover:scale-105 hover:bg-stone-950/20 hover:shadow-black hover:shadow-lg">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-stone-950/90 rounded-lg text-xs m-2 px-3 py-0.5 hover:bg-stone-950/70">
            Daily Repose
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="coldmint.jpg"
            alt="Daily Repose"
          />
        </figure>
        <p className="flex justify-between items-center">
          <span className="text-sm font-light p-2 hover:text-white">Jabón</span>
          <span className="text-lg font-medium p-2 hover:text-white">$3500</span>
        </p>
      </div>

      {/* Añade más productos según sea necesario */}
    </div>
  );
};

export default Componente;
