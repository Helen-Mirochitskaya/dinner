import {data} from "./data";
import { useState } from "react";
import './App.css';

function App() {

  const [dishes, setDishes] = useState(data);

  const removeDishes = (id) => {
    let newDishes = dishes.filter ( dish => dish.id !== id);
    setDishes(newDishes)
  }

  return (
    <div>
      
      <div>
        <h1 className="container"> {dishes.length} dishes for dinner </h1>

      </div>

      {dishes.map ( (element => { 
        const { id, dish, image } = element;

        return( 
          <div   key={id} > 

            <div className="container">
              <h2> {id}. {dish}  </h2>
            </div>

            <div className="container" > 
              <img src={image} alt='dish' width='500px'  />
            </div>

            <div className="container" >

              <button onClick={ () => removeDishes(id)}> Remove </button>

            </div>

          </div>
        )
      }))}

      <div className="container btn">
        <button onClick={ () => setDishes( [] ) } > delete all </button>
      </div>



    </div>
  )
  
}

export default App;
