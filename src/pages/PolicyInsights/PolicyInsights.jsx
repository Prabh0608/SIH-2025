import React from "react";
import "./PolicyInsights.scss";

const PolicyInsights = () => {
    const data = [
        { region: "North India", skills: ["Python", "AI", "ML"], shortage: "High" },
        { region: "South India", skills: ["Data Analysis", "SQL"], shortage: "Moderate" },
        { region: "East India", skills: ["Design", "Marketing"], shortage: "High" },
        { region: "West India", skills: ["Excel", "Management"], shortage: "Low" },
    ];

    return (
        <div className="policy-page">
            <header>
                <a href="/" className="back-btn">← Back</a>
                <h1>Policy Insights Dashboard</h1>
                <p>AI-driven insights for identifying regional skill gaps</p>
            </header>

            <main className="container">
                <h2>Regional Skill Gap Overview</h2>
                <div className="table">
                    <div className="table-header">
                        <span>Region</span>
                        <span>Top Skills</span>
                        <span>Shortage Level</span>
                    </div>
                    {data.map((item, i) => (
                        <div key={i} className="table-row">
                            <span>{item.region}</span>
                            <span>{item.skills.join(", ")}</span>
                            <span className={`shortage ${item.shortage.toLowerCase()}`}>
                                {item.shortage}
                            </span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PolicyInsights;
