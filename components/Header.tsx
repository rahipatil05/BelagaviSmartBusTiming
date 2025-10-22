
import React from 'react';

const BusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 8V6a2 2 0 00-2-2H4a2 2 0 00-2 2v2h16zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h2a1 1 0 100-2H4zm11 0a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
    </svg>
);


const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <BusIcon />
                    <h1 className="text-2xl font-bold tracking-tight">Belagavi Smart Bus Timings</h1>
                </div>
                <span className="text-sm font-semibold">CBT Hub</span>
            </div>
        </header>
    );
};

export default Header;
