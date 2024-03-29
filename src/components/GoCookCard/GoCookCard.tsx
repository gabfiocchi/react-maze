import React from 'react';
import ChevronRight from '../ChevronRight/ChevronRight';
import './GoCookCard.scss';

const GoCookCard: React.FC = () => {
    return (
        <div className="cook-card flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-md w-full mt-20">
            <h3 className="text-xl font-bold">
                Hungry?
            </h3>
            <p className="font-semibold">
                We serve up tasty treats, cold-pressed juices and nutrient-packed breakfasts.
            </p>

            <a
                className="inline-flex items-center py-2 px-4 text-sm text-center text-white bg-black rounded-full mt-8 mr-auto font-extrabold hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-slate-300"
                href="https://cookunity.com/our-menu" target="_blank" rel="noreferrer"
                title="View our menu">
                View our menu
                <ChevronRight />
            </a>
        </div>
    );
}
export default GoCookCard;
