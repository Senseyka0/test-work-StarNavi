import React from "react";

const Cell = ({ cell, onHoverCell, isStarted }) => {
   const onHover = () => {
      if (isStarted) onHoverCell(cell);
   };
   return (
      <div
         className={`game__main-cell ${cell.filled ? "filled" : ""}`}
         row={cell.row}
         col={cell.col}
         onMouseEnter={onHover}
      ></div>
   );
};

export default Cell;
