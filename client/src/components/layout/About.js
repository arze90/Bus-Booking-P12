import React, { Fragment } from 'react'

const about = () => {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@500&family=Old+Standard+TT:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <header className="header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-12 text-center">
              <h1><strong>Welcome to Bus Buddy Travels</strong></h1>
              <p>
                Welcome to our bus website! Discover convenient and reliable bus services tailored to your travel needs.
                From easy booking options to comfortable rides, we strive to make your journey smooth and enjoyable.
                Explore our routes, check schedules, and reserve your seats hassle-free. Whether you're commuting daily
                or embarking on an adventure, trust us to get you there safely and on time. Start your journey with us today!"
              </p>
              <button className="btn btn-primary">Start Connecting !</button>
            </div>
          </div>
        </div>
      </header>
      <section className="message py-5">
        <div className="container text-center">
          <h1>We've got what you need!</h1>
          <p>
            Bus Buddy Travels offers easy booking, comfortable rides, and top-notch safety. With punctual departures and diverse routes, we ensure a smooth journey every time. Enjoy onboard amenities like Wi-Fi and entertainment, supported by our responsive customer service. Take advantage of special offers and eco-friendly practices. Start your hassle-free journey with us today!

          </p>
          <button className="btn btn-primary">Check it out!</button>
        </div>
      </section>
      <section className="services">
        <div className="container text-center1 py-5">
          <h1>About our services</h1>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bar-chart myicon"></i>
                  <h1>Become a Travel Agent</h1>
                  <p>
                    You can also become a travel agent and add your buses for traveling.
                    If you interested then go through this link or add button
                    Link:- bus-business.herokuapp.com
                  </p>
                  <button className="btn btn-primary" href="bus-business.herokuapp.com">Visit Site</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bell-o myicon"></i>
                  <h1>Best Explanation</h1>
                  <p>
                  Bus Buddy Travels offers easy booking, comfortable rides, and top-notch safety. With punctual departures and diverse routes, we ensure a smooth journey every time. Enjoy onboard amenities like Wi-Fi and entertainment, supported by our responsive customer service. Take advantage of special offers and eco-friendly practices. Start your hassle-free journey with us today!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-braille myicon"></i>
                  <h1>Best Explanation</h1>
                  <p>
                  With punctual departures and diverse routes, we ensure a smooth journey every time. Enjoy onboard amenities like Wi-Fi and entertainment, supported by our responsive customer service. Take advantage of special offers and eco-friendly practices. Start your hassle-free journey with us today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="message py-5">
        <div className="container text-center">
          <h1>Register and start !!</h1>
          <p>
          To register and start your journey with Bus Buddy Travels, simply visit our website or download our mobile app. Create your account in just a few easy steps, and you'll be ready to book your tickets, explore routes, and enjoy a comfortable ride with us. Join our community of satisfied travelers today!
          </p>
          <button className="btn btn-primary">Register</button>
        </div>
      </section>

      <section >
        <div className="container text-center">
          <h1>Let's Get In Touch!</h1>
          <p>
            Ready to start your next project with us? Give us a call or send us an
            email and we will get back to you as soon as possible!
          </p>
          <i className="fa fa-phone myicon text-warning"></i>
          <i className="fa fa-heart myicon text-danger"></i>
          <p>+91 8965325894</p>
          <p>arze@gmail.com</p>
        </div>
      </section>

      <section className="message py-5">
        <div className="container text-center">
          <h1>Importants Links</h1>
          <div className="container">

            <div className="col-md-12">
            <a href="https://www.facebook.com"  > Facebook </a>
            <br/>
            <br/>
            <a href="https://www.instagram.com"> Instagram </a>
            <br/>
            <br/>
            <a href="https://www.google.com"> Google </a>
            <br/>
            <br/>
            <a href="https://www.twitter.com"> X </a>

              

              
            </div>
          </div>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </section>
      <section className="footer bg-dark">
        <div className="container py-5 text-white text-center">
          <p>Copyright © 2024 - Arze Pvt Ltd.</p>
        </div>
      </section>

    </Fragment>
  )
}

export default about