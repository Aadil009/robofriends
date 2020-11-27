import React from "react";

const SearchBox = ({ searchfield, searchChange })=> {
  return (
    <div>
      <input
        className="bg-light-green dib br3 pa3 mh2 mv2"
        type="search"
        placeholder="search here"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;