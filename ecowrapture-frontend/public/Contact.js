import React from 'react';
import './Contact.css'; // Add a CSS file for styling if needed

const Contact = () => {
    return (
        <div className="contact-page">
        
            <div className="person-info">
                <h2>Samruddhi D</h2>
                <img
                    src="/sam.jpeg"  
                    alt="Samruddhi D"
                    className="profile-photo"
                />
                <p><strong>📧</strong><a href="mailto:samruddhid2009@gmail.com">samruddhid2009@gmail.com</a></p>
                <p><strong>📱</strong> 6363012086</p>
                <p><strong>🔗</strong> <a href="https://www.linkedin.com/in/samruddhi-deepak-6432b7294/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                <p><strong>🐙</strong> <a href="https://github.com/SamruddhiDeepak" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
            </div>

            {/* Second Person's Info */}
            <div className="person-info">
                <h2>Meghana D Hegde</h2>
                <img
                    src="/heg.jpeg"  // Reference the second person's image in the public folder
                    alt="Meghana D Hegde"
                    className="profile-photo"
                />
                <p><strong>📧</strong><a href="mailto:hegdemeghana08@gmail.com">hegdemeghana08@gmail.com</a></p>
                <p><strong>📱</strong> 9538196013</p>
                <p><strong>🔗</strong> <a href="https://www.linkedin.com/in/meghana-d-hegde-a9055131b/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                <p><strong>🐙</strong> <a href="https://github.com/MeghanaDHegde" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
            </div>
        </div>
    );
};

export default Contact;
