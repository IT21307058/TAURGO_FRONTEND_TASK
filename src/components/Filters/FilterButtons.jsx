import React from 'react';
import FilterButton from './FilterButton';

const FilterButtons = ({ filter, setFilter, darkMode }) => (
    <div className="flex gap-2 mb-6 flex-wrap">
        {['all', 'pending', 'completed'].map(f => (
            <FilterButton
                key={f}
                filter={f}
                currentFilter={filter}
                onClick={() => setFilter(f)}
                darkMode={darkMode}
            />
        ))}
    </div>
);

export default FilterButtons;