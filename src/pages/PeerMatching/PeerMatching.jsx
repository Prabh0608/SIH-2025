import React, { useState } from "react";
import "./PeerMatching.scss";

const PeerMatching = () => {
    const [query, setQuery] = useState("");
    const [matches, setMatches] = useState([]);

    const students = [
        { name: "Aarav Singh", skills: ["Python", "AI", "Data Science"], location: "Delhi" },
        { name: "Neha Patel", skills: ["Excel", "Data Entry"], location: "Lucknow" },
        { name: "Ravi Sharma", skills: ["JavaScript", "React"], location: "Jaipur" },
        { name: "Priya Verma", skills: ["SQL", "Data Analysis"], location: "Pune" },
    ];

    const handleSearch = () => {
        const results = students.filter(
            (s) =>
                s.name.toLowerCase().includes(query.toLowerCase()) ||
                s.skills.some((skill) => skill.toLowerCase().includes(query.toLowerCase())) ||
                s.location.toLowerCase().includes(query.toLowerCase())
        );
        setMatches(results);
    };

    return (
        <div className="peer-page">
            <header>
                <a href="/" className="back-btn">← Back</a>
                <h1>Peer Matching</h1>
                <p>Connect with similar students and find internship buddies</p>
            </header>

            <main className="container">
                <h2>Find Your Match</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by skill, name, or city..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div className="results">
                    {matches.length > 0 ? (
                        matches.map((m, i) => (
                            <div key={i} className="card">
                                <h3>{m.name}</h3>
                                <p>📍 {m.location}</p>
                                <div className="skills">
                                    {m.skills.map((s, j) => (
                                        <span key={j}>{s}</span>
                                    ))}
                                </div>
                                <button>Connect</button>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No matches yet. Try searching something!</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default PeerMatching;
