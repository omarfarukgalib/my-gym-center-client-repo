import React from 'react';
import './Cart.css'
const Cart = (props) => {
    
    const {cart} = props
    const {addMinClick1,addMinClick2,addMinClick3,addMinClick4,btnClicked} = props;
    const {brk,brk2,brk3,brk4} = props
    
  
    return (
        <div className='cart'>
            <div className='sub-cart'>
                <h3>25kg</h3>
                <h3>6.5</h3>
                <h3>25years</h3>
            </div>
            <div className='sub-cart2'>
                <h4>weight</h4>
                <h4>height</h4>
                <h4>age</h4>
            </div>
            <h3>Add a break</h3>
            
          <div className='btn-1'>
          <button onClick={()=>addMinClick1(5)}>5min</button>
            <button onClick={()=>addMinClick2(8)}>8min</button>
            <button onClick={()=>addMinClick3(10)}>10min</button>
            <button onClick={()=>addMinClick4(13)}>13min</button>
          </div>
          <h3>Exercise Details</h3>
            <h3 className='h3'>Exercise Time <span>{cart} min</span></h3>
            <h3 className='h4'>Break Time <span>{brk}{brk2}{brk3}{brk4}</span></h3>
            <button onClick={()=>btnClicked()}>Acitivity completed</button>
        </div>
        
    );
};

export default Cart;