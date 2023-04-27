import "./style.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UrlTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/url-entries");
      setData(result.data.slice(0, 20));
    };
    fetchData();
  }, []);

  const dataWithIndex = data.map((item, index) => ({
    ...item,
    index: index + 1,
  }));

  return (<div id="theDiv">
      <div className="Results">
        <p className="heading">Last 10 Entries</p>
        <div className="tableHeader"></div>
        <div className="tableTwo">
          <table className="table table-light ">
            <thead id="header">
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Time</th>
              </tr >
            </thead>
            <tbody>
              {dataWithIndex.map((item) => (
                <tr key={item.id}>
                  <td>{item.index}</td>
                  <td>{item.url}</td>
                  <td>{item.timeInterval}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
)};

export default UrlTable;