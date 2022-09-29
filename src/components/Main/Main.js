import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Single from '../Single/Single';

import './Main.css'
const Main = () => {
  const [gym,setGym] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setGym(data))
  },[])
    return (
        <div className='main'>
            <div className="card-container">
            
            {
                gym.map(gym=><Single key={gym.id}
                gym={gym}
                ></Single>)
            }
            </div>
            <div className="cart-container">
            <h1>cart container</h1>
            <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;