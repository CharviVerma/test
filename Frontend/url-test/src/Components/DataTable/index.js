import "./style.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/url-responses");
      setData(result.data.slice(0, 20));
    };
    fetchData();
  }, []);

  function formatDate(date) {
    try {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });}
    catch(error) {
console.log(error)
    }
  }

  
  const dataWithIndex = data.map((item, index) => ({
    ...item,
    index: index + 1,
  }));
  console.log(data);

  return (<div id="theDiv">
      <div className="Results">
        <p className="heading">Last 20 Test Results</p>
        <div className="tableHeader"></div>
        <div className="tableTwo">
          <table className="table table-light ">
            <thead id="header">
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Timestamp</th>
                <th>Response Time</th>
                <th className="">Status</th>
              </tr >
            </thead>
            <tbody>
              {dataWithIndex.map((item) => (
                <tr key={item.id}>
                  <td>{item.index}</td>
                  <td>{item.url}</td>
                  <td>{formatDate(item.createdAt)}</td>
                  <td>{Math.round(item.responseTime)}</td>
                  <td className="condition btn btn-primary">{item.responseStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
)};

export default DataTable;