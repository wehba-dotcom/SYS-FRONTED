import React from 'react';
import "../styles/form.css";


function Card1(props ) {
  
  return (
    <div className="col-md-4 col-sm-6 text-center" >
    <div className='card'>
      <div className='card__body'>
   
   <p className='card__description'>{props.description}</p>
        
       <h3>{props.see}</h3>
       
        </div>            
        </div>
            
          
</div>
  )
}
export default Card1