import React from "react";
import "./About.css";
import Byters from "../Assets/byterss.jpeg";
import Meat from "../Assets/meat.jpeg";
const About = () => {
  return (
    <div className="backgroundabout flex flex-col justify-center text-center items-center px-60 pt-28">
      <section className="flex flex-row">
        <div className="w-4/5 flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-2xl mb-5">About BYTERS</h1>
          <p className="w-custom text-justify">
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
        <div className="blob-img w-1/2">
          <img src={Byters}  alt='blob-image1'/>
        </div>
      </section>
      <section className="flex flex-row h-custom mt-16">
        <div className="blob-img2">
          <img src={Meat}  alt='blob-image2' />
        </div>
        <div className="mt-32">
          <h1 className="font-bold text-center text-2xl mb-5">
            Our Inspiration
          </h1>
          <p className="w-custom text-justify">
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
      <section className="flex flex-row mt-24">
        <div className="w-4/5 flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-2xl mb-5">Why BYTERS?</h1>
          <p className="w-custom text-justify">
            Byters is more than just a review app—it's a community for food
            lovers in Pakistan. Here, you can follow reviewers whose tastes
            align with yours, discover popular spots, and contribute to a
            growing hub of local food recommendations. As our users share their
            honest opinions, reviewers earn badges for reliability, helping you
            quickly find trustworthy voices.
          </p>
        </div>
        <div className="blob-img3 w-1/2">
          <img src={Byters}  alt='blob-image3' />
        </div>
      </section>

      <section className="flex flex-row h-custom mt-16">
        <div className="blob-img4">
          <img src={Meat}   alt='blob-image4'/>
        </div>
        <div className="mt-32">
          <h1 className="font-bold text-center text-2xl mb-5">What We Offer</h1>
          <p className="w-custom text-justify">
            Starting in Lahore, Pakistan’s food capital, we bring you reviews,
            ratings, and recommendations for all types of dining
            experiences—from street food to fine dining. Whether you're a
            student on a budget, a family looking for quality dining, or a food
            lover eager to explore, Byters is your guide to the best places to
            eat in Pakistan.
          </p>
        </div>
      </section>
      <section className="flex flex-col mt-44 mb-36 border-t-4 border-color pt-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-2xl mb-5">
            Join Our Community!
          </h1>
          <p className="w-custom2 text-justify">
            Everyone deserves an exceptional dining experience, and Byters is
            here to help make that possible. Follow trusted reviewers, explore
            hidden gems, and leave your own reviews for others to enjoy. Join
            Byters to shape Pakistan’s first dedicated food review community!
          </p>
        </div>
        <div className="flex flex-row items-center justify-center text-xl mt-12">
          <input
            type="email"
            placeholder="Get updates on E-Mail"
            className="border-none focus:border-none bg-emailInput w-96 py-2 pl-3 pr-4 outline-none "
          />
          <button className="btn-bg text-white py-2 px-4">Subscribe</button>
        </div>
      </section>
    </div>
  );
};
export default About;
