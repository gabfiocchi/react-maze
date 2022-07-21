import React from 'react';

interface PadArrowProps {
    className?: string;
}
const PadArrow: React.FC<PadArrowProps> = ({ className = '' }) => {
    return (
        <svg aria-hidden="true" className={`w-4 h-4 ${className}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
    );
}
export default PadArrow;
