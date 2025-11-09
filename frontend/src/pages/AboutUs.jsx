import React from "react";


const AboutUs = () => {
  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>
          Empowering Home Chefs.  
          <span> Delivering the Taste of Home.</span>
        </h1>
        <p>
          At <strong style={{ color: "#f97316" }}>HomeCook</strong>, we believe that real food is made in real kitchens.
          Our platform connects passionate home chefs with food lovers who crave 
          authenticity, warmth, and flavor in every bite.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To bring the love and authenticity of home-cooked meals to everyone’s table — 
            empowering home chefs to turn their culinary passion into purpose and helping 
            people rediscover the joy of real, handmade food.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To create a global community that celebrates local talent, honors traditional recipes, 
            and makes wholesome, homemade meals easily accessible to everyone — anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values">
        <h2>Our Core Values</h2>
        <div className="about-values-grid">
          {[
            {
              title: "Authenticity",
              desc: "Every dish tells a story — of culture, care, and craftsmanship.",
            },
            {
              title: "Empowerment",
              desc: "We uplift local home chefs and help them grow through technology.",
            },
            {
              title: "Community",
              desc: "We believe food connects people — creating bonds beyond boundaries.",
            },
            {
              title: "Quality",
              desc: "From ingredients to delivery, we ensure excellence in every detail.",
            },
          ].map((value, index) => (
            <div className="value-card" key={index}>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <div className="about-footer">
        <p>
          Together, we are not just delivering meals —{" "}
          <span>we are delivering memories of home.</span>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
