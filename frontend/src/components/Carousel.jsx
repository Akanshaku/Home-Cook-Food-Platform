import React from 'react';

const Carousel = () => {
  return (
    <div className="container py-4">
      <div
        id="mainCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000" // Auto-rotate every 3 seconds
      >
        <div className="carousel-inner rounded shadow-sm overflow-hidden">
          <div className="carousel-item active">
            <img
              src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64d26736b35f0c30ea2a5cde_PB-030122-PF-Whats-Your-Favorite-Indian-Thali-last.png"
              className="d-block w-100"
              alt="Home Cooked"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://theideaslab.com/wp-content/uploads/2024/06/TLM-Feature-Image-1-1024x536.jpg"
              className="d-block w-100"
              alt="Indian Thali"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.trivalleydesi.com/wp-content/uploads/2019/02/7E731E95-EFAE-4552-8B1A-A173A2D0DDE0.jpeg"
              className="d-block w-100"
              alt="Chef"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://blog.pickyourtrail.com/wp-content/uploads/2018/02/home-panel-11-1-1.jpg"
              className="d-block w-100"
              alt="Chef"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://theplanetd.com/images/popular-indian-dishes-cuisine.jpg"
              className="d-block w-100"
              alt="Chef"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
