import React from 'react'

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <div className='container'>
        <h3>SIGN UP TO NEWSLETTER</h3>
        <p>Subscribe to the Eren mailing list to receive updates on new arrivals, special offers and other discount information.</p>
        <form>
            <input className='w-100' placeholder='Subscribe to our newsletter...' type="text" id="fname" name="fname"/>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
