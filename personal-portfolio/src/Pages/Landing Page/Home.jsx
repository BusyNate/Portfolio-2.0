import React from 'react';
import Navigation from '../../Components/Navigation';

export function Button() {
  return (
    <button style={{
      backgroundColor: 'rgba(181,22,253)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',  
      border: 'none',
      cursor: 'pointer',
      marginTop: '20px',
      width: 'fit-content',
    }}>
      Download CV 
    </button>
  );
}

export default function Home({ home }) {

  return (
    <div style={{ padding: '20px',}}>
      <Navigation />
     

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '70px',
        padding:'30px',
      }}>

        <div style={{
          flex: '2',
          display: 'flex',
          flexDirection: 'column',
          padding: '0px',
          maxWidth: '600px',

        }}>
          <h1 style={{color:'rgba(181,22,253)', fontSize:'65px'}}>{home.title}</h1>
          <p style={{color:'rgba(218,226,227,1)', fontSize:'20px'}}>{home.desr} <span style={{color:'rgba(181,22,253'}}>{home.p}</span>
          </p>
         
          <Button/>
        </div>

        <div style={{
          flex: '1',
          textAlign: 'center'
        }}>
          <img
            src={home.img}
            alt="Nathan Mtetwa"
            style={{
                marginLeft:'90px',
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
      </div>
    </div>
  );
}
