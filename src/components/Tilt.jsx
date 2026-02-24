import React, { useRef, useState } from 'react';

const Tilt = ({ children, className = '' }) => {
    const tiltRef = useRef(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!tiltRef.current) return;
        const { left, top, width, height } = tiltRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const multiplier = 20; // Max rotation angle
        const rotateX = (0.5 - y) * multiplier;
        const rotateY = (x - 0.5) * multiplier;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'transform 0.1s ease-out'
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s ease-out'
        });
    };

    return (
        <div
            ref={tiltRef}
            className={className}
            style={{ ...style, willChange: 'transform' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default Tilt;
