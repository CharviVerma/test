import "./style.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/data");
      setData(result.data.slice(0, 20));
    };
    try {
      const response = await axios.post('/api/saveFormData', {
        url: url,
        time: time
      });
      console.log(response.data);
      setNotice('Data saved successfully!');
      // add any other logic here for handling the response from the server
    } catch (error) {
      console.error(error);
      setNotice('An error occurred while saving the data. Please try again later.');
      // add any other logic here for handling errors
    }
    
  }, []);

  const dataWithIndex = data.map((item, index) => ({
    ...item,
    index: index + 1,
  }));

  return (
    <div id="theDiv">
      {notice && <div className="notice">{notice}</div>}
      <div class="Results">
        <p class="heading">Last 10 Test Results</p>
        <div class="tableHeader"></div>
        <div>
          <table class="table table-light ">
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Timestamp</th>
                <th>Response Time</th>
              </tr>
            </thead>
            <tbody>
              {dataWithIndex.map((item) => (
                <tr key={item.id}>
                  <td>{item.index}</td>
                  <td>{item.url}</td>
                  <td>{item.timestamp}</td>
                  <td>{item.responseTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
