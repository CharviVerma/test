import "./style.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UrlTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3100/url-entries");
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
        <p class="heading">Last 10 entries</p>
        <div class="tableHeader"></div>
        <div>
          <table class="table table-light ">
            <thead>
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