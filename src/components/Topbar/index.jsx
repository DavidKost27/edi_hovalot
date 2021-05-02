import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./styles.scss";

const Topbar = () => (
  <header className="topbar">
    <div>
      <Link to="/" style={{}}>
        לוגו הולך לפה
      </Link>
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
