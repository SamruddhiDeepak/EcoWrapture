import React, { useState } from 'react';
import './Services.css'; // Import the Services CSS file
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
import axios from 'axios';


const Services = () => {
    const [prediction, setPrediction] = useState(null);
    const [category, setCategory] = useState(null); 

    const handlePrediction = (data, selectedCategory) => {
        setPrediction(data);
        setCategory(selectedCategory); 
    };


    return (
        <div className="services-page">
            
            {/* Dynamic Content */}
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
            {category === 'Books & Stationery Packaging' && <BooksPackaging />}
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

export default Services;
