import React from 'react';
import ChevronRight from '../chevronRight/chevronRight';

const StartGameBanner: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <button className="inline-flex items-center py-2 px-4 text-sm text-center text-white bg-black rounded-full m-auto font-extrabold">
                Start game
                <ChevronRight />
            </button>
        </div>
    );
}
export default StartGameBanner;
