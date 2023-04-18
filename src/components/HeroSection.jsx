import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" height="600" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='text-dark mb-5'>KILL OFFLINE STORE</h1>
        <h2 className='text-dark mb-5'>Now finished offline shopping With K.O.S</h2>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" height="600" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='text-light mb-5'>KILL OFFLINE STORE</h1>
        <h2 className='text-light mb-5'>Now finished offline shopping With K.O.S</h2>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/298852/pexels-photo-298852.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" height="600" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='text-light mb-5'>KILL OFFLINE STORE</h1>
      <h2 className='text-light mb-5'>Now finished offline shopping With K.O.S</h2>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default HeroSection
