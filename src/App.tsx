import React from 'react';
import { motion } from 'framer-motion';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1 
                        className="text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        COLLABORATE.
                    </motion.h1>
                    
                    <motion.h1 
                        className="text-8xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        BUILD THE FUTURE.
                    </motion.h1>

                    <motion.p 
                        className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        A student-driven tech community empowering learners through events, projects, and innovation.
                    </motion.p>

                    <motion.div 
                        className="flex gap-6 justify-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <motion.button 
                            className="px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            JOIN THE COMMUNITY
                        </motion.button>
                        
                        <motion.button 
                            className="px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            EXPLORE PROJECTS
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default App;