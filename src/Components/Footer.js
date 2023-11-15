import React from 'react'
import asset26 from '../images/asset 26.png'
import asset27 from '../images/asset 27.png'
import asset28 from '../images/asset 28.jpeg'
import asset29 from '../images/asset 29.png'
import asset30 from '../images/asset 30.png'



const Footer = () => {
    const arr = [asset26, asset27, asset28, asset29, asset30]
  return (
    <footer className='footer'>
        <div className='go-up'>
            <a href="#navbar"><i class="bi bi-chevron-double-up"></i></a>
        </div>
        <div className='container'>
            <div className='foot foot-1'>
                <h4>ABOUT STORE</h4>
                <p><i class="bi bi-house-door"></i> 234 Heaven Stress, Beverly Hill.</p>
                <p><i class="bi bi-telephone"></i> 800 123 456 789</p>
                <p><i class="bi bi-envelope"></i> Contact@erentheme.com</p>
                <div className='d-flex'>
                    {arr.map((e)=>{
                        return <img src={e} alt="" />
                    })}
                </div>

            </div>
            <div className='foot foot-2'>
                <h4>MY ACCOUNT</h4>
                <ul>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">My Cart</a></li>
                    <li><a href="/">Wishlist</a></li>
                    <li><a href="/">Checkout</a></li>
                    <li><a href="/">Userinfo</a></li>
                </ul>
            </div>
            <div className='foot foot-3'>
                <h4>INFORMATION</h4>
                <ul>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">My Cart</a></li>
                    <li><a href="/">Wishlist</a></li>
                    <li><a href="/">Checkout</a></li>
                    <li><a href="/">Userinfo</a></li>
                </ul>
            </div>
            <div className='foot foot-4'>
                <h4>CUSTOMER SERVICE</h4>
                <ul>
                    <li><a href="/">Shipping Policy</a></li>
                    <li><a href="/">Compensation First</a></li>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Return Policy</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Shipping Info</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer




      