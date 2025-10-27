import React from "react";
import "./Hero.scss";

const Hero = ({ onOpenModal }) => (
    <section className="hero">
        <h1>Right Internships for Every Student</h1>
        <p>
            AI-powered recommendation engine guiding students to internships matching
            their skills, location, and interests.
        </p>
        <div className="hero-buttons">
            <a href="#about">Learn More</a>
            <button onClick={onOpenModal}>Create Profile</button>
        </div>
    </section>
);

export default Hero;
