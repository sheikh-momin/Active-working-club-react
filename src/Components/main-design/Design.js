import React from 'react';
import './Design.css'
import logo from '../../../src/run.png'
import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Sprinters from '../Sprinters/Sprinters';

const Design = () => {
  const [sprinters, setSprinters] = useState([])
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setSprinters(data))
  }, [])

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedSprinter = sprinters.find(sprinter => sprinter.id === id);
      if (addedSprinter) {
        const quantity = storedCart[id];
        addedSprinter.quantity = quantity;
        savedCart.push(addedSprinter);
      }
      //  console.log(addedSprinter);
    }
    setCart(savedCart);
  }, [sprinters])


  const handleAddToCart = (selectedSprinter) => {
    // console.log(sprinter);
    let newCart = [];
    const exists = cart.find(sprinter => sprinter.id === selectedSprinter.id);
    if (!exists) {
      selectedSprinter.quantity = 1;
      newCart = [...cart, selectedSprinter];
    }
    else {
      const restSprinter = cart.filter(sprinter => sprinter.id !== selectedSprinter.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...restSprinter, exists];
    }

    setCart(newCart);
    addToDb(selectedSprinter.id);
  }

  return (


    <div className='info-container'>


      <div>
        <div className='logo-header'>
          <img src={logo} alt=''></img>
          <h1>Active-Working-Club</h1>

        </div>

        <div className="players-container">
          {

            sprinters.map(sprinter => <Sprinters key={sprinter.id} sprinter={sprinter} handleAddToCart={handleAddToCart}></Sprinters>)
          }
        </div>

      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>

      </div>
      <div className='questions'>
        <h1>How does React Works?</h1>
        <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>

        <h1>What are the difference between props and state in React?</h1>
        <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>

        <h1>What are the usage of useEffect except api data fething?</h1>
        <p>Some common use cases of useEffect are:
          <br />

          1.Add an event listener for a button
          <br />
          2. Data fetching from API when component mounts
          <br />
          3. Perform an action when state or props change
          <br />
          4. Clean up event listeners when the component unmounts</p>
      </div>



    </div>

  );
};

export default Design;