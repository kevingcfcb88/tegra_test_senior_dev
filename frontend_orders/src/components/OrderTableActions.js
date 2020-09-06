import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderTableActions = ({ accept }) => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    try {
      const res = await axios.get('/api/getOrders');
      if (res.data) {
        const response = JSON.parse(res.data);
        setOrders(Object.entries(response).map((v) => v[1]));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Order</th>
          <th>Style</th>
          <th>Description</th>
          {accept ? <th>Actions</th> : null}
        </tr>
      </thead>
    );
  };

  const getTableContent = () => {
    if (!orders) {
      return null;
    }
    return orders.map((v) => {
      console.log(v);
      return (
        <tr key={v.id}>
          <td data-label="order">
            {v.Order}
            {v.Line ? `-${v.Line}` : null}
          </td>
          <td data-label="style">
            {v.Style}
            {v.Color ? `-${v.Color}` : null}
          </td>
          <td data-label="description">{v.Description}</td>
          {accept ? (
            <td data-label="Job">
              <i className="paper plane icon"></i>
            </td>
          ) : null}
        </tr>
      );
    });
  };

  return (
    <table className="ui celled table">
      {getTableHeader()}
      <tbody>{getTableContent()}</tbody>
    </table>
  );
};

export default OrderTableActions;
