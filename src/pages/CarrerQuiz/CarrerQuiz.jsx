import React, { useState } from "react";
import "./CareerQuiz.scss";
import { useNavigate } from "react-router-dom";

const CareerQuiz = () => {
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    const questions = [
        { text: "Do you enjoy solving logical problems?", role: "Data Science" },
        { text: "Do you like helping people directly?", role: "Community Work" },
        { text: "Do you prefer creative projects?", role: "Design" },
        { text: "Do you enjoy doing detailed research and analysis?", role: "Research" },
        { text: "Do you like organizing teams and leading people?", role: "Leadership" },
    ];

    const handleAnswer = (role) => setAnswers([...answers, role]);

    const finishQuiz = () => {
        if (!answers.length) return setResult("Please answer at least one question.");

        const top = answers
            .sort((a, b) => answers.filter((x) => x === a).length - answers.filter((x) => x === b).length)
            .pop();

        localStorage.setItem("recommendedInternship", top);
        setResult(`Best Fit: ${top} Internship`);
    };

    const goToSimulation = () => navigate("/career-simulation");

    return (
        <div className="quiz-page">
            <header>
                <a href="/" className="back-btn">← Back</a>
                <h1>AI-driven Quiz</h1>
                <p>Use an AI-driven psychometric quiz to match internships</p>
            </header>

            <main className="container">
                <h2>Career Personality Quiz</h2>
                {questions.map((q, idx) => (
                    <div key={idx} className="question">
                        <p>{q.text}</p>
                        <button className="yes" onClick={() => handleAnswer(q.role)}>Yes</button>
                        <button className="no" onClick={() => handleAnswer("Other")}>No</button>
                    </div>
                ))}
                <button className="finish-btn" onClick={finishQuiz}>Finish Quiz</button>

                {result && (
                    <div id="result">
                        <h3>{result}</h3>
                        {result.startsWith("Best Fit") && (
                            <button className="view-btn" onClick={goToSimulation}>View Career Simulation</button>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default CareerQuiz;
