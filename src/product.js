import React from 'react'


const  Product = (props) => {
    const {img,title,author,year}=props.prdt;
   // console.log(props);
   
   const alerting = () => {
     alert ('Hello react!!!' );
   };
 
   const complexExample = (author) => {
     console.log(author);
   }
   return (
     <article className='Product' onMouseOver = {() =>{
       console.log(title)
     }}>
       <img src ={img} />
       <h1 onClick={ () => console.log(title)}>{title}</h1>
       <h4>{author}</h4>
       <button type="button" onClick={alerting}>check to test</button>
       <p>{year}</p>
       <button type ="button" onClick={() => complexExample(author)}>More example</button>
             
       </article>  
   );
 
 };

export default Product
