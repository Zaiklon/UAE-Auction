import React from "react";
import { FormattedMessage } from "react-intl";

function FilterHeader() {
  return (
    <div className="sidebar__filters-header">
      <p>
        <FormattedMessage id="filter" defaultMessage="Filter" />
      </p>
      <button className="sidebar__filters-reset" type="reset">
        <FormattedMessage id="reset" defaultMessage="Reset" />
      </button>
    </div>
  );
}

export default FilterHeader;
