// src/NewsFeed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsFeed.css';

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('sustainability');
    const [error, setError] = useState(null); // State to handle errors
    const [loading, setLoading] = useState(true); // State to handle loading state

    // Fetch news based on selected category
    useEffect(() => {
        setLoading(true); // Start loading
        setError(null); // Reset error before fetching

        axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=5f0b7c7180ff4d5fb931fef9e3332377`)
            .then(response => {
                setArticles(response.data.articles);
                setLoading(false); // Stop loading when data is fetched
            })
            .catch(error => {
                setError('Error fetching news');
                setLoading(false); // Stop loading even on error
            });
    }, [category]);

    const handleFilterChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="news-container">
            <h2>Latest News on {category}</h2>
            <select onChange={handleFilterChange} value={category}>
                <option value="sustainability">Sustainability</option>
                <option value="packaging">Packaging</option>
                <option value="innovation">Innovation</option>
            </select>

            {loading && <p>Loading news...</p>} {/* Display loading message */}
            {error && <p>{error}</p>} {/* Display error message */}

            <div className="news-list">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <div key={index} className="news-card">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    ))
                ) : (
                    <p>No articles found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default NewsFeed;
