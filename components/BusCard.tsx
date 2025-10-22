
import React from 'react';
import type { BusSchedule } from '../types';

interface BusCardProps {
    bus: BusSchedule;
    status: 'upcoming' | 'passed' | 'all';
}

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" />
    </svg>
);

const PlatformIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);


const BusCard: React.FC<BusCardProps> = ({ bus, status }) => {
    const statusClasses = {
        upcoming: 'border-l-4 border-green-500',
        passed: 'border-l-4 border-red-500 opacity-70',
        all: 'border-l-4 border-gray-300'
    };
    
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 hover:shadow-xl ${statusClasses[status]}`}>
            <div className="flex-1 mb-4 md:mb-0">
                <div className="flex items-center">
                    <ClockIcon />
                    <p className="text-xl font-bold text-gray-800">{bus.departure}</p>
                    <span className="ml-3 text-sm font-semibold text-gray-500">Departure Time</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    <p>Route: <span className="font-medium text-gray-700">{bus.from} to {bus.to}</span></p>
                    <p>Depot/Sch No: <span className="font-medium text-gray-700">{bus.depot} / {bus.sch_no}</span></p>
                </div>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <PlatformIcon />
                <span className="text-sm font-semibold text-gray-700">Platform {bus.platform}</span>
            </div>
        </div>
    );
};

export default BusCard;
