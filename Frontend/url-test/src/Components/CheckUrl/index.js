import "./style.scss";
import React, { useState } from "react";
import axios from "axios";

const CheckUrl = () => {
  const [url, setUrl] = useState("");
  const [timeInterval, setTimeInterval] = useState(1);
  const [notice, setNotice] = useState("");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTimeInterval(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`URL: ${url}`);
    console.log(`Time: ${timeInterval}`);
    saveFormDataToDatabase(url, timeInterval);
    // Add your own logic here for what to do with the submitted form data
  };

  const timeOptions = [
    { value: "1", label: "1 sec" },
    { value: "10", label: "10 sec" },
    { value: "60", label: "1 min" },
    { value: "600", label: "10 mins" },
    { value: "6000", label: "1 hr" },
  ];

  const saveFormDataToDatabase = async (url, timeInterval) => {
    try {
      const response = await axios.post("http://localhost:3000/url-interval", {
        url: url,
        timeInterval: timeInterval,
      });
      console.log(response.data);
      setNotice("Data saved successfully!");
      // add any other logic here for handling the response from the server
    } catch (error) {
      console.error(error);
      setNotice(
        "An error occurred while saving the data. Please try again later."
      );
      // add any other logic here for handling errors
    }
  };

  return (
    <div>
      <div id="middle">
        {notice && <div className="notice">{notice}</div>}
        <div id="check_url"></div>
        <h2>CHECK YOUR WEBLINK HERE</h2>
        <p>This tool helps you identify broken links in your webpage.</p>
        <div>
          <span className="toolstext">Domain Name</span>
        </div>
        <div className="enter">
          <form onSubmit={handleSubmit}>
            <input
              tabIndex="1"
              type="url"
              id="urlInput"
              name="url"
              className="host_name"
              value={url}
              placeholder="Enter URL here"
              onChange={handleUrlChange}
              required
            />
            <select
              id="timeSelect"
              name="time"
              className="time"
              value={timeInterval}
              onChange={handleTimeChange}
            >
              {timeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button className="Signup btn btn-success">Go</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckUrl;
