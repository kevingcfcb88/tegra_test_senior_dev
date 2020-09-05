import React from 'react';

const UploadFile = ({ labelText, buttonText, method, sendTo }) => {
  return (
    <form method={`${method}`} encType="multipart/form-data" action={sendTo}>
      <div className="ui centered">
        <label htmlFor="file">{labelText}&nbsp;&nbsp;</label>
        <input type="file" id="file" name="file" accept=".xls, .xlsx, .csv" />
      </div>
      <div>
        <div className="ui divider"></div>
        <button className="ui labeled icon button">
          <i className="cloud upload icon"></i>
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default UploadFile;
