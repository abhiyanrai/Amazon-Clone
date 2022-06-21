import React from 'react';
import "./Product.css";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { headerItems } from '../../Data/ProductsData';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../Redux/action';


const Product = ({id, title, image, price, rating, detail, specification}) => {

  const dispatch = useDispatch();
  const onAddItemToBasket = () => {
    const item = {
      id, title, image, price, rating, specification, detail
    };
    dispatch(addToBasket(item));
  }
  return (
    <div className='product'>
     <div className='info'>
       <Link to={`product/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h4>{title}</h4>
       </Link>
       <p className='price'>
        <strong>$</strong>
        <strong>{price}</strong>
       </p>
       <div className='rating'>
        {Array(rating)
        .fill()
        .map((_, index) => 
           <p key={index}></p>)}
       </div>
       </div> 
       <img src={image} alt=""/>
       <button onClick={onAddItemToBasket}>
          <i>
            <ShoppingCartOutlinedIcon/>
          </i>
          Add To Cart
       </button>
     </div>
  )
}

export default Product