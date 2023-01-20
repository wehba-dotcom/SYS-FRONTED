import React from 'react';
import myimage from "./image2.jpg";
import Headheader from './Headheader';


function Body( ) {
  const myStyle = {
   
  
   
  };
  return (
    <div>
    <div className="col-md-12 " >
    <div className='card'>
      <div className='card__body'>
      <img src={myimage}  width="50%" height="50%"/>
      <img src={myimage}  width="50%" height="50%"/>
        <h2 className='card__title'></h2>
        <p className='card__description'></p>
        </div>            
        </div>
            
        </div>   
</div>
  )
}
export default Body