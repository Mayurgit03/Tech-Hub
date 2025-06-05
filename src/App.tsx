import React from 'react';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="hero-content text-center">
                <div className="logo-large animate-bounce">
                    <img src="images/tech hub logoooo.jpg .jpg" alt="Tech Hub Logo" className="mx-auto" style={{ maxWidth: '300px', borderRadius: '15px' }} />
                </div>
                <h1 className="glow-text animate-fade-in">TECH HUB</h1>
                <p className="subtitle animate-slide-up">Fueling Ideas. Powering Innovation. Together.</p>
                <div className="cta-buttons animate-fade-in-up">
                    <a href="#join" className="btn btn-primary glow-btn">Join the Movement</a>
                    <a href="#projects" className="btn btn-secondary">See What We Do</a>
                </div>
            </div>
        </div>
    );
}

export default App;