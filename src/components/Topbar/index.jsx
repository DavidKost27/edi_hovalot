import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./styles.scss";

const Topbar = () => (
  <header className="topbar">
    <div className="topbar-container">
      <Link to="/" style={{}}>
        לוגו הולך לפה
      </Link>

      <div>דף בית</div>
    </div>
  </header>
);

Topbar.propTypes = {
  siteTitle: PropTypes.string,
};

Topbar.defaultProps = {
  siteTitle: ``,
};

export default Topbar;
