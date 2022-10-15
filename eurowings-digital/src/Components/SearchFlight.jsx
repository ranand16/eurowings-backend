import React from "react";
export function SearchFlight({
  search,
  setSearch
}) {
  return <input 
        type="search" 
        className="px-6 font-size-6 color-spanish-roast mb-6"
        placeholder="Search origin, destination" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
    />;
}
  