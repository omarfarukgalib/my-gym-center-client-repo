import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Extra from '../Extra/Extra';
import Single from '../Single/Single';

import './Main.css'
const Main = () => {
  const [gym,setGym] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setGym(data))
  },[])
  const[cart,setCart] = useState(0);
  const addToList=(gym)=>{
     
    const newCart = cart+gym;
    
    setCart(newCart)
  }
 let [brk,setBreak]= useState(0)
 const addMinClick1 = (time) => {
  console.log(time)
  
  setBreak(time)
  
 };
 let [brk2,setBreak2]= useState(0)
 const addMinClick2 = (time) => {
  console.log(time)
  
  setBreak2(time)
  
 };
 let [brk3,setBreak3]= useState(0)
 const addMinClick3 = (time) => {
  console.log(time)
  
  setBreak3(time)
  
 };
 let [brk4,setBreak4]= useState(0)
 const addMinClick4 = (time) => {
  console.log(time)
  
  setBreak4(time)
  
 };
 const btnClicked = () => {
  alert('working has been done')
 }
    return (
        <div className='main'>
          
            <div className="card-container">
            
            {
                gym.map(gym=><Single key={gym.id}
                gym={gym}
                addToList={addToList}
                
                ></Single>)
            }
            </div>
            <div className="cart-container">
            <h1>cart container</h1>
            <Cart cart={cart}
            addMinClick1={addMinClick1} 
            addMinClick2={addMinClick2} 
            addMinClick3={addMinClick3} 
            addMinClick4={addMinClick4} 
            btnClicked={btnClicked}
            ></Cart>
            </div>
          <Extra></Extra>
        </div>
    );
};

export default Main;