import React from 'react';

const CurvedBackground = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Curved Background */}
      <div
        style={{
          backgroundColor: '#F0FDF4',
          height: '300px', // Adjust height as needed
          clipPath: 'ellipse(100% 50% at 50% 100%)', // Creates a curve
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Your Content Here</h1>
        <p>This is a section with a curved background!</p>
      </div>
    </div>
  );
};

export default CurvedBackground;
