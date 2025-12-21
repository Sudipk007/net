import React from 'react';
import './Feature.css'
import os from 'os'
// We'll create this for specific Home page styling

function Home() {
  const k = ()=>{
    const info =os.userInfo();
    console.log(info.username)

  }
  return (
    <>
      <div className="homepage-container">
        <header className="hero-section">
          <h1>Welcome to NetNova Tech Solution</h1>
          <p>Your gateway to cutting-edge digital solutions and unparalleled innovation.</p>
          <button className="learn-more-button">Learn More</button>
        </header>

        {/* You can add more content sections below the header here */}
        <section className="about-us-section">
          <h2>About Us</h2>
          <p>NetNova is dedicated to transforming businesses with state-of-the-art technology. We specialize in providing dynamic web solutions, robust IT services, and innovative product development that drive growth and efficiency.</p>
          <button className="learn-more-button2" onClick={k}>Learn More</button>
        </section>


        <section className="key-features-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-item1">
              <h3>Dynamic Websites</h3>
              <p>Engaging, responsive, and high-performance web applications tailored to your needs.</p>
            </div>
            <div className="feature-item2">
              <h3>IT Consulting</h3>
              <p>Expert advice and solutions to optimize your IT infrastructure and strategies.</p>
            </div>
            <div className="feature-item3">
              <h3>Product Development</h3>
              <p>From concept to launch, we build innovative products that stand out.</p>
            </div>

            <div className="feature-item4">
              <h3>Networking</h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>

            <div className="feature-item5">
              <h3>Cloud Solutions </h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>
            <div className="feature-item6">
              <h3>Data Analaytic</h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>
            <div className="feature-item7">
              <h3>CyberSecurity</h3>
              <p>We design and architech a relaiable Networking functions for your Businesses.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;