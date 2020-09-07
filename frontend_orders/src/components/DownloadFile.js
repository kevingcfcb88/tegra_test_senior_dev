import React from 'react';
import { Link } from 'react-router-dom';

const DownloadFile = ({ path, text, divider }) => {
  const addDivider =
    divider === 'true' ? <div className="ui divider"></div> : null;
  return (
    <div id="template">
      <Link to={path} target="_blank" download>
        {text}
      </Link>
      {addDivider}
    </div>
  );
};

export default DownloadFile;
