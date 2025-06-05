import React from 'react';
import { motion } from 'framer-motion';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="hero-content text-center">
                <motion.div 
                    className="logo-large"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img 
                        src="images/tech hub logoooo.jpg .jpg" 
                        alt="Tech Hub Logo" 
                        className="mx-auto" 
                        style={{ maxWidth: '300px', borderRadius: '15px' }} 
                    />
                </motion.div>
                
                <motion.h1 
                    className="glow-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    TECH HUB
                </motion.h1>
                
                <motion.p 
                    className="subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Fueling Ideas. Powering Innovation. Together.
                </motion.p>
                
                <motion.div 
                    className="cta-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <motion.a 
                        href="#join" 
                        className="btn btn-primary glow-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join the Movement
                    </motion.a>
                    <motion.a 
                        href="#projects" 
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See What We Do
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}

export default App;