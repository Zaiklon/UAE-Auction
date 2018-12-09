import React from "react";
import FilterHeader from "./filter-header";
import FilterContent from "./filter-content";

function Filter() {
  return (
    <form className="sidebar__filters">
      <FilterHeader />
      <FilterContent />
    </form>
  );
}

export default Filter;
