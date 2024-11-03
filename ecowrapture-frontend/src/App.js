import React, { useState } from 'react';
import InputForm from './InputForm';
import FoodPackaging from './FoodPackaging'; 
import CosmeticsPackaging from './CosmeticsPackaging'; 
import ArtPackaging from './ArtPackaging';
import AutomotivePartsPackaging from './AutomotivePartsPackaging';
import BooksPackaging from './BooksPackaging';
import CleaningSuppliesPackaging from './CleaningSuppliesPackaging';
import ClothingPackaging from './ClothingPackaging';
import ConstructionPackaging from './ConstructionPackaging';
import ElectronicsPackaging from './ElectronicsPackaging';
import FurniturePackaging from './FurniturePackaging';
import GardeningSuppliesPackaging from './GardeningSuppliesPackaging';
import HouseholdItemsPackaging from './HouseholdItemsPackaging';
import JewelryPackaging from './JewelryPackaging';
import LuxuryGoodsPackaging from './LuxuryGoodsPackaging';
import MedicalSuppliesPackaging from './MedicalSuppliesPackaging';
import PersonalCarePackaging from './PersonalCarePackaging';
import PetSuppliesPackaging from './PetSuppliesPackaging';
import PharmaceuticalPackaging from './PharmaceuticalPackaging';
import SportsEquipmentPackaging from './SportsEquipmentPackaging';
import ToysPackaging from './ToysPackaging';
import './App.css';
import logo from './logoo.jpeg';

const App = () => {
    const [prediction, setPrediction] = useState(null);
    const [category, setCategory] = useState(null); 

    const handlePrediction = (data, selectedCategory) => {
        setPrediction(data);
        setCategory(selectedCategory); 
    };

    return (
        <div className="App">
            <h1>EcoWrapture</h1>
            <p>EcoWrapture is an innovative platform that uses generative AI to create eco-friendly, customizable packaging solutions that balance sustainability, cost, and product-specific needs. Our advanced AI model analyzes your input—product type, volume, preferred materials—and generates optimized packaging recommendations that include detailed descriptions of each material’s environmental impact, shelf life, and disposal options. With Google’s Gemini API powering generative explanations, EcoWrapture not only suggests sustainable options but also educates users on the benefits and lifecycle of each choice. Through interactive 3D visualizations, users can explore their packaging designs in real-time, empowering them to make informed, environmentally-conscious decisions that support a greener future.</p>
            <img src={logo} alt="EcoWrapture Logo" style={{ width: '29%', maxWidth: '600px' }} />
            <InputForm onSubmit={handlePrediction} setCategory={setCategory} /> 
            {prediction && (
                <div className="prediction-result">
                    <h2>Prediction Results</h2>
                    <p><strong>Suggested Material:</strong> {prediction.material}</p>
                    <p><strong>Cost:</strong> ${prediction.cost.toFixed(2)}</p>
                    <p><strong>Shelf Life:</strong> {prediction.shelflife} months</p>
                    <p><strong>Sustainability Score:</strong> {prediction.sustainability_score.toFixed(2)}</p>
                    <p><strong>Description:</strong> {prediction.description}</p> 
                </div>
            )}

            {category === 'Food Packaging' && <FoodPackaging />}
            {category === 'Cosmetics Packaging' && <CosmeticsPackaging />}
            {category === 'Art Packaging' && <ArtPackaging />}
            {category === 'Automotive Parts Packaging' && <AutomotivePartsPackaging />}
            {category === 'Books & Staionery Packaging' && <BooksPackaging />}
            {category === 'Cleaning Supplies Packaging' && <CleaningSuppliesPackaging />}
            {category === 'Clothing Packaging' && <ClothingPackaging />}
            {category === 'Construction Packaging' && <ConstructionPackaging />}
            {category === 'Electronics Packaging' && <ElectronicsPackaging />}
            {category === 'Furniture Packaging' && <FurniturePackaging />}
            {category === 'Gardening Supplies Packaging' && <GardeningSuppliesPackaging />}
            {category === 'Household Items Packaging' && <HouseholdItemsPackaging />}
            {category === 'Jewelry Packaging' && <JewelryPackaging />}
            {category === 'Luxury Goods Packaging' && <LuxuryGoodsPackaging />}
            {category === 'Medical Supplies Packaging' && <MedicalSuppliesPackaging />}
            {category === 'Personal Care Packaging' && <PersonalCarePackaging />}
            {category === 'Pet Supplies Packaging' && <PetSuppliesPackaging />}
            {category === 'Pharmaceutical Packaging' && <PharmaceuticalPackaging />}
            {category === 'Sports Equipment Packaging' && <SportsEquipmentPackaging />}
            {category === 'Toys Packaging' && <ToysPackaging />}
        </div>
    );
};

export default App;
