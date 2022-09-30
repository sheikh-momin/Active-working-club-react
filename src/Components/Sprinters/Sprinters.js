import React from 'react';
import './Sprinters.css'

const Sprinters = (props) => {
  const { name, info, distance, time, img } = props.sprinter;
  return (
    <div className='player'>
      <img src={img} alt=""></img>
      <div className='player-info'>
        <p className='name'>Name: {name}</p>
        <p>Info: {info}</p>
        <p>Distance: {distance}m</p>
        <p>Time: {time}s</p>

      </div>
      <button onClick={() => props.handleAddToCart(props.sprinter)} className='btn-cart' >Add to Cart</button>


    </div>
  );
};

export default Sprinters;