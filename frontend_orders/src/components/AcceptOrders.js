import React from 'react';
import OrderTableActions from './OrderTableActions';

const AcceptOrders = () => {
  return (
    <div className="ui raised very padded text container segment">
      <h2 className="ui header"> Accept Orders </h2>
      <OrderTableActions accept="true" />
    </div>
  );
};

export default AcceptOrders;
