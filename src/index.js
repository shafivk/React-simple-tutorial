import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import {Products} from './products';
import Product from './product'


function Bestsellers(){

  return ( 
    <section className='Productlist'>
     {Products.map((prdt) => {
       const {img,title,author,year} = prdt;
       
       return (
         <Product key={prdt.id} prdt={prdt}></Product>
       )
     })}
    </section>

   
  );
}


ReactDom.render(<Bestsellers />,
    document.getElementById('root'))  ;