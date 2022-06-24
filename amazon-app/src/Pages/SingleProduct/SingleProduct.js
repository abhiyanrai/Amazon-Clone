import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Data/ProductsData';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../Redux/action';
import "./SingleProduct.css";

const SingleProduct = () => {
    let { id } = useParams();
    let SingleProduct = products.find((item)=> item.id===id);

    let dispatch = useDispatch();
    const addItemToBasket = ()=> {
       const item = {   
          id: SingleProduct.id,
          rating: SingleProduct.rating,
          title: SingleProduct.title,
          price: SingleProduct.price,
          image: SingleProduct.image,
          specification: SingleProduct.specification,
          detail: SingleProduct.detail,
       }
       dispatch(addToBasket(item));
    }

  return ( <div className='single-product-container'>
       <img className='single-product-ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif" alt=""/>
       <div>
        <div className='single-product'>
            <img src={SingleProduct.image} className="single-product-image" />
            <div className='single-product-info'>
                <div className='single-product-title'>{SingleProduct.title}</div>
                <div className='single-product-rating'>
                {Array(SingleProduct.rating)
                  .fill()
                   .map((_, index) => 
                      <p key={index}></p>)}
                </div>
                <p className='single-product-price'>
                    Price: <strong>$</strong>
                    <strong>{SingleProduct.price}</strong>
                </p>
                <div className='single-product-specification'>
                    <h4>Specification</h4>
                    {SingleProduct.specification && SingleProduct.specification.map((item, index)=> {
                        return <li key={item}>{item}</li>
                    })}
                </div>
                <div className='single-product-description'>
                    <h4>Product Description</h4>
                    <p>{SingleProduct.detail}</p>
                </div>
                <button onClick={addItemToBasket}>
                    <i>
                        <ShoppingCartOutlinedIcon/>
                        </i> 
                    Add To Basket
                </button>
            </div>
        </div>
       </div>
    </div>
  )
}
export default SingleProduct;