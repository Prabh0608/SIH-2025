import React from "react";
import "./Navbar.scss";

const Navbar = ({ onOpenModal }) => {
    return (
        <header className="navbar">
            <a href="#" className="logo">Skill Bridge</a>
            <nav>
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <button onClick={onOpenModal}>Create Profile</button>
            </nav>
        </header>
    );
};

export default Navbar;
