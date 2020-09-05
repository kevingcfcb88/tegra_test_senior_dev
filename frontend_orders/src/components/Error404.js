import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="ui raised very padded text container segment">
      <h2>
        404 Vincent can't find what he's looking for!{' '}
        <Link to="/">Go Home?</Link>
      </h2>
      <img src="https://thumbs.gfycat.com/BraveSnarlingChanticleer-size_restricted.gif" />
    </div>
  );
};

export default Error404;
