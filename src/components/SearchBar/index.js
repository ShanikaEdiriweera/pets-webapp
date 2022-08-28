import { useState } from 'react';
import './searchBar.css';

function SearchBar(props) {
  const {
    onSearch
  } = props;

  const [query, setQuery] = useState('');

  const handleSearch = ({ currentTarget }) => {
    setQuery(currentTarget.value);
    onSearch(currentTarget.value);
  }

  return (
    <div className="searchBar">
      <button className="search-icon-wrapper" onClick={(e) => e.preventDefault()}>
        <img
          className="search-icon"
          src="/icons/search.svg"
          alt="search icon"
          onClick={ () => {} }
        />
      </button>

      <input
        className="searchQueryInput"
        type="text"
        placeholder="Search for pets"
        value={query}
        onChange={handleSearch}
        aria-label="Search for pets"
      />
    </div>
  );
}

export default SearchBar;
