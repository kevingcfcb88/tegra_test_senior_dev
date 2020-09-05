import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AcceptOrders from './AcceptOrders';
import UploadFile from './UploadFile';
import NavigationBar from './NavigationBar';
import Error404 from './Error404';

function App() {
  return (
    <div className="ui container center aligned">
      <Switch>
        <Route path="/" exact>
          <NavigationBar active="/" />
          <AcceptOrders />
        </Route>
        <Route path="/uploadOrders" exact>
          <NavigationBar active="upload" />
          <div className="ui raised very padded text container segment">
            <h2 className="ui header">Upload Orders</h2>
            <UploadFile
              labelText="Choose file to upload"
              buttonText="Upload"
              method="post"
              sendTo="/"
            />
          </div>
        </Route>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
