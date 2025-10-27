import React from "react";
import { useNavigate } from "react-router-dom";
import "./Features.scss";

const Features = () => {
    const navigate = useNavigate();

    const featureList = [
        {
            title: "Smart Internship Matching",
            desc: "AI suggests internships tailored to your academic background, location, and interests.",
            link: "/career-quiz",
        },
        {
            title: "Career Analysis",
            desc: "A career simulator that predicts possible outcomes of taking an internship.",
            link: "/career-simulation",
        },
        {
            title: "Inclusive Access",
            desc: "Filters for remote-friendly roles, disability support, and local-language internships.",
            link: null, // inactive
        },
        {
            title: "Peer Matching",
            desc: "Connect with students who have similar profiles and applied to the same opportunities.",
            link: "/peer-matching",
        },
        {
            title: "AI Mentor Support",
            desc: "A built-in mentor guides students on applying, preparing for interviews, and improving skills.",
            link: "/ai-mentor",
        },
        {
            title: "Policy Insights",
            desc: "Aggregated insights help government identify regional skill gaps.",
            link: "/policy-insights",
        },
    ];

    const handleFeatureClick = (link) => {
        if (link) navigate(link);
    };

    return (
        <section id="features">
            <h2>How Our Engine Helps Students</h2>
            <div className="grid">
                {featureList.map((item, index) => (
                    <article
                        key={index}
                        className={`feature-card ${!item.link ? "disabled" : ""}`}
                    >
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <button
                            className="feature-btn"
                            disabled={!item.link}
                            onClick={() => handleFeatureClick(item.link)}
                        >
                            {item.link ? "Try Yourself" : "Coming Soon"}
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Features;
