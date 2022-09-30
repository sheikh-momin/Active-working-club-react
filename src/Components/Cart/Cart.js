import React, { useEffect, useState } from 'react';
import './Cart.css'
import logo from '../../../src/runner.jpg'
import Toast from '../Toast/Toast';

const getTime =()=>{
  let newTime ={}
  const getData = localStorage.getItem('items');

  if(getData){
    newTime = JSON.parse(getData)
    
  }
  return newTime;

}

const Cart = ({ cart }) => {

  let total = 0;
  let quantity = 0;
  for (const sprinter of cart) {

    quantity = quantity + sprinter.quantity;
    total = parseFloat((total + sprinter.time * sprinter.quantity).toFixed(2));

  }
  const [record, setRecord] = useState('');
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(record));

    setRecord(record);

  },[record]);

  useEffect(() => {
    
    const data = getTime()
    console.log(data)
    setRecord(data)


  }, [record])





  return (
    <div className='cart'>
      <div className='profile'>
        <div className='cart-logo'>
          <img className='runner-img' src={logo} alt=""></img>

        </div>
        <div className='profile-text'>
          <h5>Mominul Islam</h5>
          <p><small>Savar,Dhaka</small></p>


        </div>
      </div>

      <div className='my-info'>
        <div className='info'>
          <h5>60kg</h5>
          <p>Weight</p>
        </div>
        <div >
          <h5>6.5</h5>
          <p>Height</p>
        </div>
        <div >
          <h5>22yrs</h5>
          <p>Age</p>
        </div>

      </div>
      <div className='activity-time'>
        <input className='time-btn' type="button" value="20s" onClick={e => setRecord(e.target.value)} />
        <input className='time-btn' type="button" value="39.12s" onClick={e => setRecord(e.target.value)} />
        <input className='time-btn' type="button" value="40.13s" onClick={e => setRecord(e.target.value)} />
        <input className='time-btn' type="button" value="38.49s" onClick={e => setRecord(e.target.value)} />


      </div>



      <div>
        <h5>Scores time Details</h5>
        <p>Selected items: {quantity}</p>

        <div className='total-time'>
          <p>Total Time:  {total} <small>seconds</small> </p>
        </div>

      </div>


      <div>
        <div className='total-time'>
          <p>Records: {record} </p>
        </div>
      </div>



      <Toast></Toast>


    </div>
  );
};

export default Cart;