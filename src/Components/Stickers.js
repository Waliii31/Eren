import React from 'react'
import asset20 from '../images/asset 20.png'
import asset21 from '../images/asset 21.png'
import asset22 from '../images/asset 22.png'
import asset23 from '../images/asset 23.png'
import asset24 from '../images/asset 24.png'

const Stickers = () => {
    const images = [asset20, asset21, asset22, asset23, asset24];
  return (
    <section className='stickers'>
        <div className='container'>
            {images.map((e)=>{
                return <img src={e} alt="" />
            })}
        </div>
    </section>

  )
}

export default Stickers
