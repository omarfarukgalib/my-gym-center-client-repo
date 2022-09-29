import React from 'react';
import './Cart.css'
const Cart = () => {
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
          <button>5min</button>
            <button>8min</button>
            <button>10min</button>
            <button>13min</button>
          </div>
          <h3>Exercise Details</h3>
            <h3 className='h3'>Exercise Time<span></span></h3>
            <h3 className='h4'>Break Time<span></span></h3>
            <button id='activity-btn'>Acitivity completed</button>
        </div>
        
    );
};

export default Cart;