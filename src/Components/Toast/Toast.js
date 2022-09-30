import React from 'react';
import toast from 'react-simple-toasts';
import './Toast.css'

const Toast = () => (
  <div className="example">
    <button onClick={() => toast('Your activity has been added successfully!')}>Save Activity</button>
    
  </div>
);
export default Toast;