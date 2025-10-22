
import React, { useState, useMemo } from 'react';
import type { BusSchedule } from './types';
import { busSchedules } from './data/busSchedules';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [destination, setDestination] = useState<string>('');
    const [searchResults, setSearchResults] = useState<BusSchedule[]>([]);
    const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

    const uniqueDestinations = useMemo(() => {
        const destinations = new Set(busSchedules.map(schedule => schedule.to));
        return Array.from(destinations).sort();
    }, []);

    const handleSearch = (selectedDestination: string) => {
        setDestination(selectedDestination);
        if (selectedDestination) {
            const results = busSchedules
                .filter(schedule => schedule.to === selectedDestination)
                .sort((a, b) => a.departure.localeCompare(b.departure));
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
        setSearchPerformed(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <SearchBar
                        destinations={uniqueDestinations}
                        onSearch={handleSearch}
                        currentDestination={destination}
                    />
                    {searchPerformed && (
                        <Results
                            results={searchResults}
                            destination={destination}
                        />
                    )}
                     {!searchPerformed && (
                        <div className="mt-8 text-center p-10 bg-white rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-700">Welcome to Belagavi Bus Timings</h2>
                            <p className="text-gray-500 mt-2">Please select a destination to view the bus schedule.</p>
                            <img src="https://picsum.photos/800/300?random=1" alt="Bus" className="mt-6 rounded-lg mx-auto shadow-lg" />
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
