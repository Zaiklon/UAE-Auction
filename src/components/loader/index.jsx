import React from "react";
import { FormattedMessage } from "react-intl";
import "./loader.sass";

function Loader() {
  return (
    <div className="loader">
      <div className="spinner" />
      <FormattedMessage id="loading" defaultMessage="Loading..." />
    </div>
  );
}

export default Loader;
