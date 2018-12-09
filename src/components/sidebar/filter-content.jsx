import React from "react";
import { FormattedMessage } from "react-intl";

function FilterContent() {
  return (
    <div className="sidebar__filters-content">
      <p className="sidebar__filters-content-title">
        <FormattedMessage id="condition" defaultMessage="Condition" />
      </p>
      <ul className="sidebar__filters-content-list">
        <li className="sidebar__filters-content-item">
          <label htmlFor="newLabel">
            <FormattedMessage id="new" defaultMessage="New" />
          </label>
          <input type="checkbox" id="newLabel" />
        </li>
        <li className="sidebar__filters-content-item">
          <label htmlFor="usedLabel">
            <FormattedMessage id="used" defaultMessage="Used" />
          </label>
          <input type="checkbox" id="usedLabel" />
        </li>
        <li className="sidebar__filters-content-item">
          <label htmlFor="scrapLabel">
            <FormattedMessage id="scrap" defaultMessage="Scrap" />
          </label>
          <input type="checkbox" id="scrapLabel" />
        </li>
      </ul>
      <select className="form-control sidebar__filters-content-select">
        <option disabled>Select</option>
        <option>Select</option>
      </select>
      <select className="form-control sidebar__filters-content-select">
        <option disabled>-Select-</option>
        <option>Select</option>
      </select>
    </div>
  );
}

export default FilterContent;
