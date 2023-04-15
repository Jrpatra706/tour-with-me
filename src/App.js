import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours';


const App = () => {
  // initialized with data from data.js
  const [tours,setTours] = useState(data);

  // removing tour due to click on not-interested button
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    // returning a new ui
    return(
      <div className="refresh">
        <h2 className="refresh-txt">No Tours Left</h2>
        <button className="btn-white" onClick={ () => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return(
    <div className="App">
      {/* passing removeTour function as a prop */}
      {/* passed into Tours */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
