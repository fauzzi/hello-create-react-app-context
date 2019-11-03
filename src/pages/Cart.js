import React from 'react'
import MainNavigation from '../components/MainNavigation'
import './Cart.css'

const CartPage = () => (
    <React.Fragment>
        <MainNavigation cartItemNumber={2} />
        <main className="cart">
            {cartItems.length <= 0 && <p>No Item in the cart</p>}
            <ul>
            {cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button>
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
    </React.Fragment>
)

const cartItems = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99, quantity : 2 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99, quantity :3 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99, quantity : 4 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99, quantity : 1 }
]

export default CartPage