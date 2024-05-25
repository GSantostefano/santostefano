import { useState, useRef, useEffect } from 'react';
import './PokerRangeSelector.css';

const PokerRangeSelector = () => {
  const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
  const suits = ['s', 'o'];
  const [selectedHands, setSelectedHands] = useState([]);
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

  const toggleSelection = (hand) => {
    setSelectedHands(prevSelected =>
      prevSelected.includes(hand)
        ? prevSelected.filter(h => h !== hand)
        : [...prevSelected, hand]
    );
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseEnter = (hand) => {
    if (isMouseDown && !selectedHands.includes(hand)) {
      toggleSelection(hand);
    }
  };

  const handleCellClick = (hand) => {
    if (!isMouseDown || selectedHands.includes(hand)) {
      toggleSelection(hand);
    }
  };

  const isSelected = (hand) => selectedHands.includes(hand);

  const generateTable = () => {
    const table = [];
    for (let i = 0; i < ranks.length; i++) {
      const row = [];
      for (let j = 0; j < ranks.length; j++) {
        let hand;
        if (i < j) {
          hand = ranks[i] + ranks[j] + suits[0]; // Offsuit
        } else if (i > j) {
          hand = ranks[j] + ranks[i] + suits[1]; // Suited
        } else {
          hand = ranks[i] + ranks[j]; // Pair
        }
        row.push(
          <td
            key={hand}
            className={isSelected(hand) ? 'selected' : ''}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => handleMouseEnter(hand)}
            onClick={() => handleCellClick(hand)}
          >
            {hand}
          </td>
        );
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };

  return (
    <div className='' id="poker-range-selector">
      <table id="poker-table" ref={tableRef}>
        <tbody>{generateTable()}</tbody>
      </table>
      <div id="selected-hands">
        <h2>Manos seleccionadas:</h2>
        <ul id="selected-hands-list">
          {selectedHands.map(hand => (
            <li key={hand}>{hand}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokerRangeSelector;
