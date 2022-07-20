import React from 'react';
import PadArrow from '../padArrow/padArrow';
import './pad.scss';
const Pad: React.FC = () => {
    const keyPress = (targetKey: string) => {
        window.dispatchEvent(new KeyboardEvent('keydown', { 'key': targetKey }));
    };

    return (
        <div className="fixed bottom-2 right-2 p-2 flex flex-col items-center bg-gradient-to-tl from-slate-100 to-slate-200 rounded-full shadow">
            <div>
                <button
                    onClick={() => keyPress('ArrowUp')}
                    className="bg-slate-300 w-10 h-10 hover:bg-slate-200 focus:ring-4 focus:relative focus:z-20 focus:outline-none focus:ring-blue-300 flex items-center justify-center rounded-t-lg shadow-md"
                >
                    <PadArrow className="-rotate-90" />
                </button>
            </div>
            <div className="flex justify-between bg-slate-300 rounded-lg shadow-md">
                <button
                    onClick={() => keyPress('ArrowLeft')}
                    className="w-10 h-10 hover:bg-slate-200 hover:relative focus:ring-4 focus:relative focus:z-20 focus:outline-none focus:ring-blue-300 flex items-center justify-center rounded-l-lg mr-10"
                >
                    <PadArrow className="rotate-180" />
                </button>
                <button
                    onClick={() => keyPress('ArrowRight')}
                    className="w-10 h-10 hover:bg-slate-200 hover:relative focus:ring-4 focus:relative focus:z-20 focus:outline-none focus:ring-blue-300 flex items-center justify-center rounded-r-lg"
                >
                    <PadArrow />
                </button>
            </div>
            <div>
                <button
                    onClick={() => keyPress('ArrowDown')}
                    className="bg-slate-300 w-10 h-10 hover:bg-slate-200 hover:relative focus:ring-4 focus:relative focus:z-20 focus:outline-none focus:ring-blue-300 flex items-center justify-center rounded-b-lg shadow-md"
                >
                    <PadArrow className="rotate-90" />
                </button>
            </div>
        </div>
    );
}
export default Pad;
