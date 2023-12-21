import React from "react";

interface Props {
    UpdateCircles: () => number;
}

const Lottery: React.FC<Props> = ({UpdateCircles}) => {
 return (
     <div className="lottery">
         <h2>Lottery</h2>
         <div className="circles">
             <p>current circle numbers</p>
         </div>
         <button onClick={UpdateCircles}>New numbers</button>
     </div>
 );
};

export default Lottery;