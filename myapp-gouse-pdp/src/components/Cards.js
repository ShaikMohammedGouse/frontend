import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='lorem ipsum dolor sit amet'
              label=''
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='Et labore aliquid hic architecto illo At rerum'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='consectetur adipisci elit, sed eiusmod tempor incidunt'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='Non labore rerum est ullam enim aut vero commodi'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img5.jpg'
              text='Est nobis expedita vel dolorum molestias aut quia commodi qui nihil pariatur'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
