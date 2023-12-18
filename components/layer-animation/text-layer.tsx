import React, { FC } from 'react';

interface Props {}

const CustomParticles: FC<Props> = ({}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        background: '#000'
      }}
    >
    
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 50,
          zIndex: 2,
          width: 200,
          height: 200,
          background: '#ffffff',
          borderRadius: 50,
          boxShadow: '0 0 10px 5px #000'
        }}
      >
        <h1 style={{ color: '#000' }}>Hello, React!</h1>
      </div>
    </div>
  );
};

export default CustomParticles;
