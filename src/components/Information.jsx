const Information = ({ hoverCells }) => {
   return (
      <div className="information">
         <h2 className="information__title">Hover squares</h2>
         <div className="information__items">
            {hoverCells.map((cell, index) => {
               return cell.filled ? (
                  <div className="information__item" key={index}>
                     Row: {cell.row}, col: {cell.col}
                  </div>
               ) : (
                  ""
               );
            })}
         </div>
      </div>
   );
};

export default Information;
