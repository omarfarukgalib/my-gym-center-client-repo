import React from 'react';
import './Single.css'

const Single = (props) => {
    
    const {name,url,details,age,duration_minutes} = props.gym;
   
    const{addToList} = props
    
    
  
    
    return (
        
        <div className='single-container'>
           
           
            <img src={url} alt="" />
            <h3>{name}</h3>
            <h5>{details}</h5>
            <h5>age: {age}</h5>
            <h5>min: {duration_minutes}</h5>
            
            <button onClick={()=>addToList(duration_minutes)}>Add To List</button>
           
        </div>
    );
};

export default Single;