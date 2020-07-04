import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";

const PageTitle = ({
  title,
  subtitle,
  className,
  displaySubtitle,
  ...attrs
}) => {
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    "mb-sm-0"
  );

  return (
    <Col xs="12" sm="4" className={classes} {...attrs}>
      {displaySubtitle && (
        <span className="text-uppercase page-subtitle">{subtitle}</span>
      )}
      {/* <span className="text-uppercase page-subtitle">{subtitle}</span> */}
      <h3 className="page-title">{title}</h3>
    </Col>
  );
};

PageTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string,
  /**
   * If the page has a subtitle.
   */
  displaySubtitle: PropTypes.bool,
};

PageTitle.defaultProps = {
  displaySubtitle: false,
};

export default PageTitle;
