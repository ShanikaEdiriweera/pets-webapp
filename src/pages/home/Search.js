import Fuse from 'fuse.js';

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
    console.log('results', results);
    const petResults = results.map(result => result.item);
    setResults(petResults);
  };

  return (
    <form className="search" role="search" spellCheck="false" >
      <SearchBar onSearch={onSearch} />
    </form>
  );
}

export default Search;
