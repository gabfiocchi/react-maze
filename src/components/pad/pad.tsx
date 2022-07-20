import React from 'react';
import PadArrow from '../padArrow/padArrow';
import './pad.scss';
const Pad: React.FC = () => {
    return (
        <div className="fixed bottom-0 right-0 flex flex-column items-center bg-blue-200">
            <div>
                <button className="bg-red-200 w-10 h-10 flex items-center justify-center">
                    <PadArrow className="-rotate-90" />
                </button>
            </div>
            <div className="flex flex-column my-2 w-32 justify-between	">
                <button className="bg-red-200 w-10 h-10 flex items-center justify-center">
                    <PadArrow className="rotate-180" />
                </button>
                <button className="bg-red-200 w-10 h-10 flex items-center justify-center">
                    <PadArrow />
                </button>
            </div>
            <div>
                <button className="bg-red-200 w-10 h-10 flex items-center justify-center">
                    <PadArrow className="rotate-90" />
                </button>
            </div>
        </div>
    );
}
export default Pad;
