import React, { useState } from "react";
import "./CareerSimulation.scss";

const data = {
    "Data Science": [
        { label: "Corporate Analytics", percent: 70, color: "orange" },
        { label: "Research", percent: 20, color: "green" },
        { label: "Startup", percent: 10, color: "blue" },
    ],
    "Community Work": [
        { label: "NGO Career", percent: 60, color: "green" },
        { label: "Teaching", percent: 30, color: "blue" },
        { label: "Corporate Role", percent: 10, color: "orange" },
    ],
};

const CareerSimulation = () => {
    const [selected, setSelected] = useState(null);
    const recommended = localStorage.getItem("recommendedInternship");

    const handleSelect = (name) => setSelected(name);

    return (
        <div className="sim-page">
            <header>
                <a href="/" className="back-btn">← Back</a>
                <h1>Career Simulation</h1>
                <p>Predict possible outcomes of internships</p>
            </header>

            <main className="container">
                <h2>Career Simulation</h2>
                <p>Select an internship to view outcomes</p>

                <div className="internship-list">
                    {Object.keys(data).map((key) => (
                        <div
                            key={key}
                            className={`card ${selected === key ? "active" : ""}`}
                            onClick={() => handleSelect(key)}
                        >
                            {key} Internship
                        </div>
                    ))}
                </div>

                {selected && (
                    <div className="outcomes">
                        <h3>Outcomes of {selected}</h3>
                        {data[selected].map((o, i) => (
                            <div key={i} className="bar-container">
                                <div className={`bar ${o.color}`} style={{ width: `${o.percent}%` }}>
                                    <span className="label">{o.label}</span> {o.percent}%
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default CareerSimulation;
