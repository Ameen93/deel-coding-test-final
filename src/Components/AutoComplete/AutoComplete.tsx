import React, { useState } from "react";
import "./AutoComplete.css";

interface AutoCompleteProps {
  suggestions: string[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // get the value of the search bar
    const value = event.target.value;
    setSearchTerm(value);
    // format then filter list. I originally used startswith instead of includes. Depends on the results you are looking for
    setFilteredSuggestions(
      suggestions
        .filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
        // I wasn't sure how many games the API would return so I limited the results displayed to 25
        .slice(0, 25)
    );
  };
  // When a game from the list is selected, the value is the search bar is updated and the suggestions are cleared. This was a last minute add for user experience
  const handleSuggestionClick = (word: string) => {
    setSearchTerm(word);
    setFilteredSuggestions([]);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const highlightMatch = (word: string) => {
    const startIndex = word.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (startIndex === -1) return word;

    // split the word into 3 sections to apply the highlight to just the matching parts
    const endIndex = startIndex + searchTerm.length;
    const beforeMatch = word.slice(0, startIndex);
    const match = word.slice(startIndex, endIndex);
    const afterMatch = word.slice(endIndex);

    return (
      <>
        {beforeMatch}
        <strong>{match}</strong>
        {afterMatch}
      </>
    );
  };

  return (
    <div className="autocomplete">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        {searchTerm && (
          <button className="clear-button" onClick={handleClearSearch}>
            Clear
          </button>
        )}
      </div>
      {searchTerm && (
        <ul>
          {filteredSuggestions.map((word, index) => (
            <li key={index} onClick={() => handleSuggestionClick(word)}>
              {highlightMatch(word)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
