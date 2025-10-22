
import React, { useState, useMemo } from 'react';
import type { BusSchedule } from '../types';
import BusCard from './BusCard';

interface ResultsProps {
    results: BusSchedule[];
    destination: string;
}

type Tab = 'upcoming' | 'passed' | 'all';

const Results: React.FC<ResultsProps> = ({ results, destination }) => {
    const [activeTab, setActiveTab] = useState<Tab>('upcoming');

    const { upcoming, passed } = useMemo(() => {
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        const upcomingBuses = results.filter(bus => bus.departure > currentTime);
        const passedBuses = results.filter(bus => bus.departure <= currentTime);
        
        return { upcoming: upcomingBuses, passed: passedBuses };
    }, [results]);

    const renderBuses = (buses: BusSchedule[], status: 'upcoming' | 'passed' | 'all') => {
        if (buses.length === 0) {
            let message = "No buses found for this schedule.";
            if (status === 'upcoming') message = "No more buses for today. Please check the 'Passed Buses' tab.";
            if (status === 'passed') message = "No buses have departed yet today. Check 'Upcoming Buses'.";
            
            return <div className="text-center py-10 px-4 bg-gray-50 rounded-md mt-4">
                <p className="text-gray-500">{message}</p>
            </div>;
        }
        return (
            <div className="space-y-4 mt-4">
                {buses.map(bus => <BusCard key={bus.id} bus={bus} status={status === 'all' ? (upcoming.includes(bus) ? 'upcoming' : 'passed') : status} />)}
            </div>
        );
    };

    if (!destination) {
        return null;
    }
    
    if (results.length === 0 && destination) {
        return <div className="mt-8 text-center p-10 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700">No Routes Found</h2>
            <p className="text-gray-500 mt-2">Sorry, we couldn't find any bus schedules for the selected destination.</p>
        </div>;
    }

    const getTabClass = (tab: Tab) => {
        return activeTab === tab 
            ? "border-indigo-500 text-indigo-600" 
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";
    };

    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
                Schedule for <span className="text-indigo-600">{destination}</span>
            </h3>
            
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button onClick={() => setActiveTab('upcoming')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${getTabClass('upcoming')}`}>
                        Upcoming Buses <span className="bg-green-100 text-green-800 ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium">{upcoming.length}</span>
                    </button>
                    <button onClick={() => setActiveTab('passed')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${getTabClass('passed')}`}>
                        Passed Buses <span className="bg-red-100 text-red-800 ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium">{passed.length}</span>
                    </button>
                    <button onClick={() => setActiveTab('all')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${getTabClass('all')}`}>
                        Full Day Schedule <span className="bg-blue-100 text-blue-800 ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium">{results.length}</span>
                    </button>
                </nav>
            </div>
            
            {activeTab === 'upcoming' && renderBuses(upcoming, 'upcoming')}
            {activeTab === 'passed' && renderBuses(passed, 'passed')}
            {activeTab === 'all' && renderBuses(results, 'all')}
        </div>
    );
};

export default Results;
