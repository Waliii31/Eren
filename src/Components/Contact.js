import React from 'react'

const Contact = () => {
  return (
        <section id="contact" className="contact">
            <h4 className="heading">CONTACT US</h4>
            <div className="container py-5">
                <div className="contact-form">
                    <form className="row g-3">
                        <div className="col-md-6"><input type="text" placeholder="Your Name..." className="form-control" id="inputEmail4" /> </div>
                        <div className="col-md-6"><input type="email" placeholder="Your Email..." className="form-control" id="inputEmail4" /> </div>
                        <div className="col-12"><input type="text" placeholder="Subject..." className="form-control" id="inputEmail4" /> </div>
                        <div className="mb-3"><textarea className="form-control" placeholder="Your Message..." id="exampleFormControlTextarea1" rows="8"></textarea></div>
                        <div className="col-12 w-50">
                            <button type="submit" className="button main-btn py-1 px-3 fs-6">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>  
)
}

export default Contact
