import { useState } from "react";
import Fuse from 'fuse.js';
import Pill from '../../components/Pill';

// components
import SearchBar from "../../components/SearchBar";

function Search({ pets, setResults }) {
  const fuse = new Fuse(pets, {
    keys: [
      'name',
      'birthYear',
      'species'
    ],
    includeScore: true,
    // isCaseSensitive: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // threshold: 0.6,
    // useExtendedSearch: false,
  });

  const onSearch = (query) => {
    const results = fuse.search(query);
    const petResults = results.map(result => result.item);
    setResults(petResults);
  };

  const [selectedPills, setSelectedPills] = useState({});

  const onClickPill = (pillName, isDropdown, e) => {
    e.preventDefault();
    if (!isDropdown) setSelectedPills({...selectedPills, [pillName]: !selectedPills[pillName]});
  };

  return (
    <form className="search" role="search" spellCheck="false" >
      <SearchBar onSearch={onSearch} />
      <section className="pill-group">
        <Pill
          text="Type"
          name="type"
          isDropdown={ true }
          isSelected={ selectedPills["type"] }
          onClick={onClickPill}
        />
        <Pill
          text="Category"
          name="category"
          isDropdown={ true }
          isSelected={ selectedPills["category"] }
          onClick={onClickPill}
        />
        <Pill
          text="Latest added"
          name="latest-added"
          isDropdown={ false }
          isSelected={ selectedPills["latest-added"] }
          onClick={onClickPill}
        />
      </section>
    </form>
  );
}

export default Search;
