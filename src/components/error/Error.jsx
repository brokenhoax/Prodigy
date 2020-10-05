import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="main">
      404 Error - Page Not Found <Link to="/"></Link>{" "}
    </div>
  );
};

export default PageNotFound;
