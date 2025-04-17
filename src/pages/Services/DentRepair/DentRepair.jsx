import React from 'react';
import {  dentRemoval } from '../../../constants/images';
import './dentRepair.css';
import Contact from '../../../components/Contact/Contact';
import Footer from '../../../components/Footer/Footer';

function DentRepair() {
  return (
   <>
    <div className='dentRepair'> 

      <div className='dentRepair__wrapper'>
        <h1 className='headtext_cormorant' style={{marginBottom: '2rem', color: '#DCCA87'}}>Dent Repair</h1>
        <p className='p__opensans' style={{color: 'black'}}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
          and going through the cites of the word in classical literature, discovered the undoubtable source. 
        </p>
      </div>
        
      <div className='dentRepair__wrapper-image'>
        <img src={dentRemoval} alt='Store'/>
      </div>

    </div>

    <Contact />
    <Footer />
    </> 
  )
}

export default DentRepair;