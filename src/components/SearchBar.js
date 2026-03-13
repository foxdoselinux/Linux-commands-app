import React from 'react';

const SearchBar = () => {
    const [query, setQuery] = React.useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search Linux commands..."
            />
            <i className="search-icon">🔍</i> {/* You can replace this with an actual icon */}
        </div>
    );
};

export default SearchBar;