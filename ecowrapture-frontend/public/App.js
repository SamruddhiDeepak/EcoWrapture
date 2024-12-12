import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Contact from './Contact'; 
import Services from './Services'; 
import Chatbot from './Chatbot'; 
import NewsFeed from './NewsFeed'
import './App.css';

const App = () => {
    const [prediction, setPrediction] = useState(null);
    const [category, setCategory] = useState(null); 

    const handlePrediction = (data, selectedCategory) => {
        setPrediction(data);
        setCategory(selectedCategory); 
    };

    return (
        <Router>
            <div className="App">
                {/* Navbar */}
                <div className="navbar">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li> 
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/chatbot">Chatbot</Link></li>
                        <li><Link to="/newsfeed">NewsFeed</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        
                    </ul>
                </div>

                <Routes>
                    {/* Home Route */}
                    <Route
                        path="/"
                        element={
                            <div className="hero-section">
                                <div className="hero-text">
                                    <h1>EcoWrapture</h1>
                                    <p>EcoWrapture is a platform dedicated to creating eco-friendly, customizable packaging solutions that balance sustainability, cost, and product-specific needs. Using advanced AI algorithms, EcoWrapture analyzes user inputs—including product type, volume, and preferred materials—and generates optimized packaging recommendations. These recommendations are accompanied by detailed descriptions of each material’s environmental impact, shelf life, and disposal options.<br></br>In addition to providing sustainable packaging options, EcoWrapture educates users on the lifecycle and benefits of each material, ensuring informed decision-making for a greener future. Interactive 3D visualizations allow users to explore different packaging designs in real-time, enhancing engagement and understanding.<br></br>To further assist users, EcoWrapture features an intelligent chatbot—EcoBot—designed to answer questions, provide packaging recommendations, and offer personalized eco-friendly tips based on user input. The chatbot aims to simplify the user experience, making sustainability advice easily accessible and actionable. <br></br>There is also a news section featuring three categories—Packaging, Sustainability, and Innovation—to provide users with the latest updates and trends in these areas.</p>
                                </div>
                            </div>
                        }
                    />

                    {/* Services Route */}
                    <Route 
                        path="/services" 
                        element={<Services handlePrediction={handlePrediction} prediction={prediction} category={category} setCategory={setCategory} />} 
                    />

                    {/* Contact Route */}
                    <Route path="/contact" element={<Contact />} />

                    {/* Chatbot Route */}
                    <Route path="/chatbot" element={<Chatbot />} /> {/* Add the Chatbot route */}

                    <Route path="/newsfeed" element={<NewsFeed />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
