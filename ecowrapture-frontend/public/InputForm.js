import React, { useState } from 'react';
import axios from 'axios';
import './InputForm.css';

const InputForm = ({ onSubmit, setCategory }) => {
    const [category, setCategoryState] = useState('');
    const [size, setSize] = useState('');
    const [materialPreference, setMaterialPreference] = useState('');
    const [volumeInLitres, setVolumeInLitres] = useState('');

    // Options for dropdowns
    const categoryOptions = [
        'Food Packaging', 
        'Cosmetics Packaging', 
        'Electronics Packaging',
        'Clothing Packaging',
        'Furniture Packaging',
        'Medical Supplies Packaging',
        'Automotive Parts Packaging',
        'Sports Equipment Packaging',
        'Pharmaceutical Packaging',
        'Household Items Packaging',
        'Luxury Goods Packaging',
        'Books & Stationery Packaging',
        
        'Jewelry Packaging',
        'Personal Care Packaging',
        'Pet Supplies Packaging',
        'Gardening Supplies Packaging',
        'Cleaning Supplies Packaging'
    ];
    const sizeOptions = ['Small', 'Medium', 'Large'];
    const materialOptions = ['Biodegradable', 'Recyclable'];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            category: category,
            size: size,
            materialpreference: materialPreference,
            volumeinlitres: parseFloat(volumeInLitres) || 0 // Assumes volume is a number
        };

        try {
            const response = await axios.post('http://localhost:5000/predict', formData);
            onSubmit(response.data, category); // Pass the full response data and selected category to App.js
        } catch (error) {
            console.error('Error fetching prediction:', error.response?.data || error.message);
        }
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategoryState(selectedCategory);
        setCategory(selectedCategory); // Update the category in App.js
    };

    return (
        <div className="input-form">
            <h2>Packaging Input Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category:</label>
                    <select value={category} onChange={handleCategoryChange} required>
                        <option value="" disabled>Select Category</option>
                        {categoryOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Size:</label>
                    <select value={size} onChange={(e) => setSize(e.target.value)} required>
                        <option value="" disabled>Select Size</option>
                        {sizeOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Material Preference:</label>
                    <select value={materialPreference} onChange={(e) => setMaterialPreference(e.target.value)} required>
                        <option value="" disabled>Select Material Preference</option>
                        {materialOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Volume in Litres:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={volumeInLitres}
                        onChange={(e) => setVolumeInLitres(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default InputForm;
