import React from 'react';

const Navigation = () => {
  return (
    <div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
        </label>
        <nav className="nav-container">
            <h1 className="logo-toggle">My CV</h1>
        </nav>
        <header>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Qui je suis ?</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-link">Expérience & Formation</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  );
};

export default Navigation;
