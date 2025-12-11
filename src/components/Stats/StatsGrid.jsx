import React from 'react';
import StatsCard from './StatsCard';

const StatsGrid = ({ stats, darkMode }) => {
    const cards = [
        { label: 'Total', value: stats.total, color: 'blue' },
        { label: 'Pending', value: stats.pending, color: 'orange' },
        { label: 'Done', value: stats.completed, color: 'green' }
    ];

    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            {cards.map(card => (
                <StatsCard key={card.label} {...card} darkMode={darkMode} />
            ))}
        </div>
    );
};

export default StatsGrid;