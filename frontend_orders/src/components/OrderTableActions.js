import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderTableActions = ({ accept }) => {
  useEffect(() => {
    const getAllOrders = async () => {
      const res = await axios.get('/api/getOrders');
      console.log(res.data);
    };

    getAllOrders();
  });

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
          {accept ? <th>Actions</th> : null}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name">James</td>
          <td data-label="Age">24</td>
          <td data-label="Job">Engineer</td>
          {accept ? (
            <td data-label="Job">
              <i className="paper plane icon"></i>
            </td>
          ) : null}
        </tr>
      </tbody>
    </table>
  );
};

export default OrderTableActions;
