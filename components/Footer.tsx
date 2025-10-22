
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Belagavi Smart Bus Timings. All Rights Reserved.</p>
                <p className="text-sm mt-1">Data provided by NWKRTC. Timings are subject to change.</p>
            </div>
        </footer>
    );
};

export default Footer;
