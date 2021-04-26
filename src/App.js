import { useEffect, useState } from "react";
import axios from "axios";

import { Game, Information } from "./components";

import "./App.scss";

const App = () => {
   const [cells, setCells] = useState([]);
   const [hoverCells, setHoverCells] = useState([]);

   const [cellAmount, setCellAmount] = useState(5);
   const [selectedMode, setSelectedMode] = useState("easyMode");

   const [isLoaded, setIsLoaded] = useState(true);

   useEffect(() => {
      setIsLoaded(false);

      axios.get("http://demo1030918.mockable.io/").then(({ data }) => {
         setCellAmount(data[selectedMode].field);
         setIsLoaded(true);
      });

      let colIdx = 1;
      let rowIdx = 0;

      let newCells = Array(cellAmount ** 2)
         .fill()
         .map((cell, index) => {
            rowIdx++;
            if (rowIdx > cellAmount) {
               colIdx++;
               rowIdx = 1;
            }
            return { id: index, row: rowIdx, col: colIdx };
         });

      setCells(newCells);
   }, [cellAmount, selectedMode]);

   const onChangeMode = (mode) => {
      setSelectedMode(mode);
      setHoverCells([]);
   };

   const onHoverCell = (cell) => {
      const newCells = [...cells];
      const cellsWithoutHover = cells.filter((item) => item.id !== cell.id);

      if (!newCells[cell.id].filled) {
         newCells[cell.id].filled = true;
      } else {
         newCells[cell.id].filled = false;
      }

      setCells(newCells);
      setHoverCells([cell, ...cellsWithoutHover]);
   };

   return (
      <div className="app">
         <div className="wrapper">
            <Game
               cells={cells}
               selectedMode={selectedMode}
               onChangeMode={onChangeMode}
               onHoverCell={onHoverCell}
               isLoaded={isLoaded}
            />
            <Information hoverCells={hoverCells} />
         </div>
      </div>
   );
};

export default App;
