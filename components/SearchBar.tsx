
import React from 'react';

interface SearchBarProps {
    destinations: string[];
    onSearch: (destination: string) => void;
    currentDestination: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ destinations, onSearch, currentDestination }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Your Bus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                    <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
                        From
                    </label>
                    <input
                        type="text"
                        id="source"
                        disabled
                        value="Central Bus Terminal (CBT)"
                        className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm p-2 cursor-not-allowed"
                    />
                </div>
                <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                        To
                    </label>
                    <select
                        id="destination"
                        value={currentDestination}
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select a destination...</option>
                        {destinations.map(dest => (
                            <option key={dest} value={dest}>{dest}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
