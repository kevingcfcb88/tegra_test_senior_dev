import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AcceptOrders from './AcceptOrders';
import UploadFile from './UploadFile';
import DownloadExcelTemplate from './DownloadFile';
import NavigationBar from './NavigationBar';
import Error404 from './Error404';

function App() {
  return (
    <div className="ui container center aligned">
      <Switch>
        <Route path="/" exact>
          <NavigationBar active="/" />
          <AcceptOrders />
        </Route>{' '}
        <Route path="/uploadOrders" exact>
          <NavigationBar active="upload" />
          <div className="ui raised very padded text container segment">
            <h2 className="ui header"> Upload Orders </h2>
            <DownloadExcelTemplate
              path="/template_orders.xlsx"
              text="Download Template"
              divider="true"
            />
            <UploadFile
              labelText="Choose file to upload"
              buttonText="Upload"
              method="post"
              sendTo="/"
            />
          </div>{' '}
        </Route>{' '}
        <Route component={Error404} />{' '}
      </Switch>{' '}
    </div>
  );
}

export default App;
