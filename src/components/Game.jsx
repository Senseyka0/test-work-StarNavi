import { useState } from "react";
import { Cell } from "./index";

const Game = ({ cells, selectedMode, onChangeMode, isLoaded, onHoverCell }) => {
   const [isStarted, setIsStarted] = useState(false);

   const styles = {
      width:
         selectedMode === "easyMode"
            ? "360px"
            : selectedMode === "normalMode"
            ? "640px"
            : "960px",
   };

   const handleStart = () => {
      setIsStarted(true);
   };
   const handleChangeMode = (e) => {
      setIsStarted(false);
      onChangeMode(e.target.value);
   };

   return (
      <div className="game">
         <div className="game__header">
            <select
               className="game__header-select"
               onChange={handleChangeMode}
               value={selectedMode}
            >
               <option value="easyMode">Easy mode</option>
               <option value="normalMode">Normal mode</option>
               <option value="hardMode">Hard mode</option>
            </select>
            <button className="game__header-button" onClick={handleStart}>
               START
            </button>
         </div>

         <div className="game__main" style={isLoaded ? styles : {}}>
            {isLoaded
               ? cells.map((cell) => {
                    return (
                       <Cell
                          key={cell.id}
                          cell={cell}
                          onHoverCell={onHoverCell}
                          isStarted={isStarted}
                       />
                    );
                 })
               : "Loading..."}
         </div>
      </div>
   );
};

export default Game;
