import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>404 Page Not Found</title>
    </Helmet>
    404 <Link to="/">Back to home</Link>
  </div>
);
