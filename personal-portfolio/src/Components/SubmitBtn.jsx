import React, { useState } from 'react';
import './CSS/Button.css';

export default function SubmitButton({ validForm }) {
  const [Text, setText] = useState('Send'); // Initial button text

  function timeout() {setTimeout(() => {
    setText('Send'); // Reset text back to "Send" after 2 seconds
    },1500);}
  return (
    <div className="submit-button">
      <button
        type="submit"
        disabled={!validForm} // Disable button if form isn't valid
        style={{
          backgroundColor: validForm ? 'darkorange' : 'purple', // Change color based on validity
          cursor: validForm ? 'pointer' : 'not-allowed',
        }}
        onClick={() => {
          if (validForm) {
            setText('Sent!'); // Change text to "Sent!" when clicked
            timeout();
        }}}>
      
        {Text}
        <img src="./src/assets/Icons/Paper Plane.svg" alt="send"></img>
      </button>
    </div>
  );
}