import { useState, useRef, useEffect } from 'react';

const Preflop = () => {
  const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
  const suits = ['♥', '♦', '♣', '♠']; // Hearts, Diamonds, Clubs, Spades
  const positions = ['EP', 'MP', 'HJ', 'CO', 'BU', 'SB', 'BB']; // Poker positions

  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const toggleCardSelection = (card) => {
    // Si la carta seleccionada ya está en las cartas seleccionadas, la deseleccionamos
    if (selectedCards.includes(card)) {
      setSelectedCards(prevSelected => prevSelected.filter(c => c !== card));
      return;
    }
  
    // Si ya hay 2 cartas seleccionadas, eliminamos la primera antes de agregar la nueva carta
    if (selectedCards.length === 2) {
      const newSelectedCards = [...selectedCards.slice(1), card];
      setSelectedCards(newSelectedCards);
    } else {
      setSelectedCards(prevSelected =>
        prevSelected.includes(card)
          ? prevSelected.filter(c => c !== card)
          : [...prevSelected, card]
      );
    }
  };
  
  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseEnter = (card) => {
    if (isMouseDown && !selectedCards.includes(card)) {
      toggleCardSelection(card);
    }
  };

  const handleCardClick = (card) => {
    if (!isMouseDown || selectedCards.includes(card)) {
      toggleCardSelection(card);
    }
  };

  const handlePositionClick = (position) => {
    setSelectedPosition(position === selectedPosition ? null : position);
  };

  const isCardSelected = (card) => selectedCards.includes(card);
  const isPositionSelected = (position) => position === selectedPosition;

  const handleClearSelection = () => {
    setSelectedCards([]);
    setSelectedPosition(null);
  };

  const generateTable = () => {
    const table = [];
    for (let i = 0; i < suits.length; i++) {
      const suit = suits[i];
      const row = [];
      for (let j = 0; j < ranks.length; j++) {
        const card = ranks[j] + suit;
        const suitColor = getSuitColor(suit);
        row.push(
          <td
            key={card}
            className={`${isCardSelected(card) ? 'selected ' : ''} ${suitColor}`}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => handleMouseEnter(card)}
            onClick={() => handleCardClick(card)}
          >
            {card}
          </td>
        );
      }
      table.push(<tr key={suit}>{row}</tr>);
    }
    return table;
  };

  const getSuitColor = (suit) => {
    switch (suit) {
      case '♥':
        return 'text-red-600'; // Rojo para corazones
      case '♦':
        return 'text-blue-600'; // Azul para diamantes
      case '♣':
        return 'text-green-600'; // Verde para tréboles
      case '♠':
        return ''; // Negro para picas
      default:
        return '';
    }
  };

  return (
    <div className=''>
       <button onClick={handleClearSelection} className="bg-red-600  px-4 py-2 mt-4 rounded-md">Clear</button>
      <div className='mt-2' >
     
        <h2>Seleccionar Posicion:</h2>
        <div className=' mt-2 flex flex-row  gap-1 text-red-600'>
          {positions.map(position => (
            <div
              className={`border-2 pl-1 pr-1 rounded-lg cursor-pointer hover:text-yellow-300 hover:bg-red-600 position ${isPositionSelected(position) ? 'selected ' : ''}`}
              key={position}
              onClick={() => handlePositionClick(position)}
            >
              {position}
            </div>
          ))}
        </div>
      </div>
      <table className="m-6" id="poker-table" ref={tableRef}>
        <tbody>{generateTable()}</tbody>
      </table>
      <div >
        
  <div className=" text-3xl" >Hero:</div>
  <div className="flex flex-row items-center text-2xl">
    {selectedPosition && (
      <div className="mr-4">{selectedPosition}</div>
    )}
    <ul className="flex flex-row w-20">
      {selectedCards.map(card => (
        <li key={card} className={`${getSuitColor(card.charAt(card.length - 1))} p-1 m-1 rounded-md`}>{card}</li>
      ))}
    </ul>
    <div className="flex flex-row items-center text-2xl gap-3 p-3">
  
  {/* <button onClick={""} className="flex flex-row  px-1 border-2 rounded-lg hover:bg-red-600">OR</button><p className='text-green-500'>2.5x</p>
  <button onClick={""} className="flex flex-row  px-1 border-2 rounded-lg hover:bg-red-600">ROL</button><p className='text-green-500'>2.5x + 1xL</p>
  <button onClick={""} className="flex flex-row  px-1 border-2 rounded-lg hover:bg-red-600">3Bet</button><p className='text-yellow-300'>call</p>
  <button onClick={""} className="flex flex-row  px-1 border-2 rounded-lg hover:bg-red-600">4Bet</button><p className='text-red-500'>fold</p>
   */}
  </div>
        </div>
      </div>
      <div>
      <h2 className="text-3xl">Villanos:</h2>
      </div>
    </div>
  );
};

export default Preflop;
