import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = ({ labelText, buttonText, method, sendTo }) => {
  const [file, setFile] = useState();

  const onSubmit = () => {
    const data = new FormData();
    data.append('file', file);
    axios
      .post(sendTo, data, {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      method={`${method}`}
      encType="multipart/form-data"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="ui centered">
        <label htmlFor="file">{labelText}&nbsp;&nbsp;</label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".xls, .xlsx, .csv"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <div>
        <div className="ui divider"></div>
        <button className="ui labeled icon button" onClick={onSubmit}>
          <i className="cloud upload icon"></i>
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default UploadFile;
