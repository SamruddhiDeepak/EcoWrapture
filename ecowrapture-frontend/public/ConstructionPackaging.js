import React from 'react';

const ConstructionPackaging = () => {
  const models = [
    {
      title: "Cement Bag",
      iframeSrc: "https://sketchfab.com/models/7ad243de1c8c4a45823c4eb6109c7e96/embed",
      creator: "entropy.cgassets",
      link: "https://sketchfab.com/3d-models/cement-bag-7ad243de1c8c4a45823c4eb6109c7e96",
    },
    {
      title: "Burlap Sack",
      iframeSrc: "https://sketchfab.com/models/e3b01fcc08e745758e65b1a997d52bf2/embed",
      creator: "Clockwork Creations",
      link: "https://sketchfab.com/3d-models/burlap-sack-e3b01fcc08e745758e65b1a997d52bf2",
    },
    {
      title: "Closed Carton Box",
      iframeSrc: "https://sketchfab.com/models/46c5b4ee31ca4463aef632f22e1bdfce/embed",
      creator: "FrancescoMilanese",
      link: "https://sketchfab.com/3d-models/closed-carton-box-46c5b4ee31ca4463aef632f22e1bdfce",
    },
    {
      title: "Paint Can",
      iframeSrc: "https://sketchfab.com/models/9dec0ba6f4b9475a838f3081c10943fd/embed",
      creator: "gd51alberto",
      link: "https://sketchfab.com/3d-models/paint-can-9dec0ba6f4b9475a838f3081c10943fd",
    },
  ];

  return (
    <div>
      <h1>Construction Packaging Models</h1>
      {models.map((model, index) => (
        <div key={index} className="sketchfab-embed-wrapper">
          <iframe
            title={model.title}
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src={model.iframeSrc}
          />
          <p style={{ fontSize: '13px', margin: '5px', color: '#4A4A4A' }}>
            <a href={model.link} target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              {model.title}
            </a>  
            <a href={`https://sketchfab.com/${model.creator.replace(/\s+/g, '').toLowerCase()}`} target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              {model.creator}
            </a> 
            <a href="https://sketchfab.com" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
              
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ConstructionPackaging;
