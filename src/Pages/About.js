import React from "react";
import "./About.css";
import Byters from "../Assets/byterss.jpeg";
import Meat from "../Assets/meat.jpeg";
const About = () => {
  return (
    <div className="backgroundabout flex flex-col justify-center text-center items-center px-60 mt-52">
      <section className="flex flex-row">
        <div className="">
          <h1 className="font-bold text-center text-2xl mb-5">About BYTERS</h1>
          <p>
            Welcome to Byters - Pakistan's trusted food review app, created by
            university students who are always on the lookout for new dining
            experiences and honest reviews. We understand the struggle of
            finding reliable opinions on local food spots—often, reviews are
            scattered across Google, Instagram, or other platforms, with mixed
            feedback that don't always tell the full story. Byters was built to
            simplify this process, providing a single platform dedicated to food
            reviews from Pakistan's diverse culinary scene.
          </p>
        </div>
        <div className="blob-img">
          <img src={Byters} />
        </div>
      </section>
      <section className="flex flex-row">
        <div className="blob-img2">
          <img src={Meat} />
        </div>
        <div className="mt-20">
          <h1 className="font-bold text-center text-2xl mb-5">
            Our Inspiration
          </h1>
          <p>
            Our journey began with a common experience: trying to decide if an
            Italian buffet in Lahore was worth the hype. Some reviews said it
            was a must-try, while others called it bland and overpriced. This
            led us to ask, "What if there was a platform just for food reviews
            in Pakistan, where you could easily find trusted opinions?" With
            Byters, we aim to make food discovery transparent, accessible, and
            community-driven.
          </p>
        </div>
      </section>
    </div>
  );
};
export default About;
