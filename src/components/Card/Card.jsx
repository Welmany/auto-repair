import React from 'react';
import './Card.css';
import CardItem from './CardItem';

import { frameStraightening, paint, refinishingDetail, detailbig, dentRemoval} from '../../constants/images';

function Card() {
  return (
    <div className='cards' id='services'>
      <h1 className='headtext__cormorant'>Our Services</h1>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            path='/autoPaint'
            label='Read More'
            src={detailbig}
            alt='img'
            text='Paint'
          />
          <CardItem
            path='/bumperRepair'
            label='Read More'
            src={refinishingDetail}
            alt='img'
            text='Refinishing & Detailing'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            path='/dentRepair'
            label='Read More'
            src={dentRemoval}
            alt='img'
            text='Paintless Dent Removal'
          />
          <CardItem
            path='/service'
            label='Read More'
            src={frameStraightening}
            alt='img'
            text='Frame Straightening'
          />
          <CardItem
            path='/services'
            label='Read More'
            src={paint}
            alt='img'
            text='Paiting'
          />
        </ul>
      </div>
    </div>
  );
}

export default Card;
