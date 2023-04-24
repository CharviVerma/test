import "./style.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/url-responses");
      setData(result.data.slice(0, 20));
    };
    fetchData();
  }, []);

  const dataWithIndex = data.map((item, index) => ({
    ...item,
    index: index + 1,
  }));

  return (<div id="theDiv">
      <div class="Results">
        <p class="heading">Last 20 Test Results</p>
        <div class="tableHeader"></div>
        <div>
          <table class="table table-light ">
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Timestamp</th>
                <th>Response Time</th>
                <th>Status</th>
              </tr >
            </thead>
            <tbody>
              {dataWithIndex.map((item) => (
                <tr key={item.id}>
                  <td>{item.index}</td>
                  <td>{item.url}</td>
                  <td>{item.created_at}</td>
                  <td>{item.responseTime}</td>
                  <td>{item.responseStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
)};

export default DataTable;