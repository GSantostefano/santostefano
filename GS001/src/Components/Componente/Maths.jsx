import { useState } from 'react';

const Maths = () => {
  const [eq, setEq] = useState('');
  const [pot, setPot] = useState('');
  const [pot1, setPot1] = useState('');
  const [inversion, setInversion] = useState('');
  const [stackEfectivo, setStackEfectivo] = useState('');
  const [resultEv, setResultEv] = useState(null);
  const [resultSpr, setResultSpr] = useState(null);

  const handleEvCalculation = () => {
    const ev = (parseFloat(eq) * parseFloat(pot)) - parseFloat(inversion);
    setResultEv(ev);
  };

  const handleSprCalculation = () => {
    const spr = parseFloat(stackEfectivo) / parseFloat(pot1);
    setResultSpr(spr);
  };

  return (
    <div className="ml-60 bg-red-900/30 w-full p-4">
      <div>
        <div>Contenido de Maths</div>
        {/* EV */}
        <div>
          <p className="underline mt-5 ">Fórmula General de EV</p>
          <div className='mt-5'>
            <label>
              EQ:
              <input
                type="number"
                value={eq}
                onChange={(e) => setEq(e.target.value)}
                className="ml-2 p-1 border border-gray-400 rounded text-black"
              />
            </label>
            <label className="ml-4">
              Pot:
              <input
                type="number"
                value={pot}
                onChange={(e) => setPot(e.target.value)}
                className="ml-2 p-1 border border-gray-400 rounded text-black"
              />
            </label>
            <label className="ml-4">
              Inversión:
              <input
                type="number"
                value={inversion}
                onChange={(e) => setInversion(e.target.value)}
                className="ml-2 p-1 border border-gray-400 rounded text-black"
              />
            </label>
            <button
              onClick={handleEvCalculation}
              className="ml-4 p-2 bg-yellow-500 text-black rounded"
            >
              Calcular EV
            </button>
          </div>
          {resultEv !== null && (
            <p className="mt-2">EV = {resultEv.toFixed(2)}</p>
          )}
        </div>
        {/* SPR */}
        <div>
          <p className="underline mt-5">Stack to Pot Ratio</p>
          <div className='mt-5' >
            <label>
              Stack Efectivo:
              <input
                type="number"
                value={stackEfectivo}
                onChange={(e) => setStackEfectivo(e.target.value)}
                className="ml-2 p-1 border border-gray-400 rounded text-black"
              />
            </label>
            <label className="ml-4">
              Pot:
              <input
                type="number"
                value={pot1}
                onChange={(e) => setPot1(e.target.value)}
                className="ml-2 p-1 border border-gray-400 rounded text-black"
              />
            </label>
            <button
              onClick={handleSprCalculation}
              className="ml-4 p-2 bg-yellow-500 text-black rounded"
            >
              Calcular SPR
            </button>
          </div>
          {resultSpr !== null && (
            <p className="mt-2">SPR = {resultSpr.toFixed(2)}</p>
          )}
        </div>
        {/* OUTS */}

      </div>
    </div>
  );
};

export default Maths;
