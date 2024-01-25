// src/components/ApiDataComponent.js

import React, { useState, useEffect } from 'react';

// ApiDataComponent: APIデータを取得して表示するコンポーネント
const ApiDataComponent = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pcmanage.wjg.jp/api/devices/1/'); // ここにAPIのエンドポイントを指定
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Device Information:</h2>
      {apiData ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Device Number</th>
              <th>Maker</th>
              <th>OS</th>
              <th>Memory</th>
              <th>Storage</th>
              <th>Graphic Board</th>
              <th>Storage Location</th>
              <th>Fault Flag</th>
              <th>Lease Start Date</th>
              <th>Lease Expiration Date</th>
              <th>Inventory Date</th>
              <th>Remarks</th>
              <th>Registration Date</th>
              <th>Update Date</th>
              <th>Delete Flag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{apiData.id}</td>
              <td>{apiData.device_number}</td>
              <td>{apiData.maker}</td>
              <td>{apiData.os}</td>
              <td>{apiData.memory}</td>
              <td>{apiData.storage}</td>
              <td>{apiData.has_graphic_board ? 'Yes' : 'No'}</td>
              <td>{apiData.storage_location}</td>
              <td>{apiData.fault_flag ? 'Yes' : 'No'}</td>
              <td>{apiData.lease_start_date}</td>
              <td>{apiData.lease_expiration_date}</td>
              <td>{apiData.inventory_date}</td>
              <td>{apiData.remarks}</td>
              <td>{apiData.registration_date}</td>
              <td>{apiData.update_date}</td>
              <td>{apiData.delete_flag ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiDataComponent;
