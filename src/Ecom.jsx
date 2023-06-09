import React from 'react'
import styles from "./Ecom.module.css";
import { Items } from './EcomItems'
const Ecom = () => {
  return (
    <>
    <div className={`${styles.MainContainer}`}>

            
  <div className={`${styles.container}`}>
     {
      Items.map((Item)=>{
        const {name,price,discount,availablecount}=Item;
        return <div className={`${styles.Each}`}>
         <p className={`${styles.Name}`}>{name} <span>(available : {availablecount})</span></p>
         <p >
         <span className={`${styles.Price}`}>Price:</span>  <del>{price}</del>/- {discount}
         </p>
        </div>
      })
     }
  </div>
  </div>
        
    </>
  )
}

export default Ecom