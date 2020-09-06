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
          <th className="four wide">Order</th>
          <th className="four wide">Style</th>
          <th className="ten wide">Description</th>
          <th className="four wide">Status</th>
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
          <td data-label="status">{v.status}</td>
          {accept ? (
            <td data-label="Job" className="center aligned">
              <i className="paper plane icon"></i>
            </td>
          ) : null}
        </tr>
      );
    });
  };

  const onClickAction = (e) => {
    e.preventDefault();
    const pendingOrders = orders.filter((v) => {
      return v.status === 'Pending';
    });

    axios
      .post('/api/acceptOrders', { orders: pendingOrders }, {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <table className="ui celled table">
        {getTableHeader()}
        <tbody>{getTableContent()}</tbody>
      </table>
      <div className="ui divider"></div>
      <button className="positive ui button" onClick={(e) => onClickAction(e)}>
        Accept Orders
      </button>
    </div>
  );
};

export default OrderTableActions;
