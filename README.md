# EcoWrapture: AI-Driven Sustainable Packaging Design Platform

EcoWrapture is an innovative platform that leverages generative AI to design and recommend eco-friendly packaging solutions tailored to specific product categories and user preferences. By combining machine learning with a focus on sustainability, EcoWrapture generates not only packaging design recommendations but also detailed explanations about the materials used, their sustainability scores, and methods for composting or recycling, thereby promoting sustainable practices in packaging.

## Table of Contents

- [Key Features](#key-features)
- [Technical Overview](#technical-overview)
- [Impact](#impact)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Key Features

1. **Generative AI-Driven Material Descriptions:**
   - At the core of EcoWrapture is a generative AI model that provides in-depth, context-sensitive explanations for the recommended materials based on factors such as cost, shelf life, and environmental impact.
   - Leveraging Google’s Gemini API, EcoWrapture’s AI crafts personalized descriptions about each material, outlining why it’s ideal for the specific packaging needs, its environmental benefits, and sustainable disposal methods. This feature educates users on the environmental value of each material choice and encourages responsible packaging practices.

2. **Customizable Input Form for Packaging Requirements:**
   - Users input essential details about their packaging needs through a React-based frontend, including product category (e.g., Food Packaging, Cosmetics Packaging), preferred size, volume, and material preference (e.g., biodegradable or recyclable).
   - The platform provides tailored recommendations across various product categories, making EcoWrapture adaptable for diverse industries from pharmaceuticals to luxury goods.

3. **Predictive Analytics for Sustainability and Cost:**
   - A backend system developed with Flask and powered by a machine learning model estimates the cost, shelf life, and sustainability score for each packaging recommendation.
   - The AI model uses historical data to accurately predict key packaging attributes, ensuring users receive optimized solutions for both performance and sustainability.

4. **3D Visualizations and SketchFab Integration:**
   - SketchFab enables users to visualize packaging designs in 3D, offering an interactive experience to understand how each package will look and function in real life. This visual integration supports users in making more informed decisions.

## Technical Overview

- **Frontend:** Developed in React, the user interface allows seamless input for packaging specifications and displays the AI-driven recommendations and descriptions.
- **Backend:** A Flask-based backend handles the data processing, model predictions, and interaction with Google’s Gemini API for generating material descriptions. The backend integrates with a Random Forest model for cost, shelf life, and sustainability predictions.
- **Generative AI with Gemini:** The generative AI component is responsible for producing the descriptive text for each material. Based on the packaging parameters, Gemini provides clear, structured explanations detailing material properties, benefits, and disposal methods.
- **3D Visualization:** Using SketchFab, EcoWrapture brings packaging designs to life in 3D, allowing users to visualize each eco-friendly solution in a dynamic, engaging way.

## Impact

EcoWrapture is designed not only to provide sustainable packaging solutions but also to drive awareness around eco-friendly materials and responsible disposal practices. The generative AI model adds significant value by educating users on material selection, highlighting the environmental impact, and offering actionable steps for sustainability. EcoWrapture empowers businesses and individuals to make environmentally conscious choices in packaging, contributing to global sustainability goals.

## Technologies Used

- Frontend: React
- Backend: Flask
- AI Model: Google Gemini
- 3D Visualization: SketchFab
- Machine Learning: Scikit-Learn (RandomForest for regression and classification)
- Generative AI: Google Generative AI (Gemini model for material description generation)
- API Requests: Axios
- Styling: CSS
- Database: CSV data (for this prototype)


## Installation

1. Clone the repository:
```bash
git clone https://github.com/SamruddhiDeepak/ecowrapture.git
```

2. Navigate to the frontend directory:

```bash
cd ecowrapture/ecowrapture-frontend
```

3. Install the dependencies:

```bash
npm install
```

4. Navigate to the backend directory:

```bash
cd ../ecowrapture-backend
```

5. Install the backend dependencies (if applicable):

```bash
pip install -r requirements.txt
```

6. Run the frontend and backend servers:
For the frontend:
```bash
npm start
```
For the backend (in another terminal):
```bash
python app.py  
```

## Usage
Open your web browser and navigate to http://localhost:3000 to access the EcoWrapture application.
Follow the on-screen instructions to input your packaging requirements and receive sustainable packaging solutions.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or report issues in the GitHub repository.







