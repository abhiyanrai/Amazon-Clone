import React from 'react';
import "./Payment.css";
import { useSelector } from 'react-redux';
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import { getBasketTotal } from '../../Data/BasketTotal';
import { Navigate, useNavigate } from 'react-router-dom';
// import { db } from "../Data/firebase";
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const Payment = () => {
    const {basket, user} = useSelector(state => state.data)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = () => {

    }
    const navigate = useNavigate();
    const orderPlaced = () => {
        alert("Your Order is being placed Successfully. Continue Shopping")
        navigate("/")
    }
  return (
    <div className='payment'>
         <div className='payment-container'>
            <h1>Checkout {<Link to="/checkout">{basket.lenth} items</Link>}</h1>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment-address'>
                    <p>{user && user.email}</p>
                    <p>House No. 07 Near Presidium School</p>
                    <p>Noida, India</p>
                </div>
            </div>
            <div className='payment-section'>
            <div className='payment-title'>
                <h3>Review items and Delivery</h3>
            </div>
            <div className='payment-items'>
                {basket && basket.map((item) => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment-details'>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                   <div className="payment-priceContainer">
                   <CurrencyFormat
                      renderText={(value)=> (

                           <>
                           <h3>Order Total : {value}</h3>
                          </>
                      )}
                         decimalScale={2}
                         value={getBasketTotal(basket)}
                         displayType={"text"}
                         thousandSeparator={true}
                        prefix={"$"}
                             />
                         <button onClick={orderPlaced}>
                            <span>Buy Now</span>
                            </button>    
                   </div>
                </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Payment