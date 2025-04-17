import React from 'react';
import { detailbig } from '../../../constants/images';
import './autoPaint.css';
import Contact from '../../../components/Contact/Contact';
import Footer from '../../../components/Footer/Footer';

function AutoPaint() {
  return (
   <>
    <div className='autoPaint'> 

      <div className='autoPaint__wrapper'>
        <h1 className='headtext_cormorant' style={{marginBottom: '2rem', color: '#DCCA87'}}>Auto Paint</h1>
        <p className='p__opensans' style={{color: 'black'}}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
          and going through the cites of the word in classical literature, discovered the undoubtable source. 
        </p>
      </div>
        
      <div className='autoPaint__wrapper-image'>
        <img src={detailbig} alt='Store'/>
      </div>

    </div>

    <Contact />
    <Footer />
    </> 
  )
}

export default AutoPaint;