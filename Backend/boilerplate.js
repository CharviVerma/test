import React, { useState, useEffect } from 'react';
import { MongoClient } from 'mongodb';

function ResponseTimeChecker() {
  const [url, setUrl] = useState('');
  const [responseTime, setResponseTime] = useState('');
  const [cronTime, setCronTime] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseTime('Checking...............');
  };

  useEffect(() => {
    if (cronTime > 0) {
      const intervalId = setInterval(async () => {
        if (url) {
          try {
            const startTime = Date.now();
            const response = await fetch(url);
            const endTime = Date.now();
            const timeTaken = endTime - startTime;
            setResponseTime(`${timeTaken} ms`);

            // Save data to MongoDB
            const client = await MongoClient.connect('<mongo_db_url>');
            const db = client.db('<db_name>');
            const collection = db.collection('responseTimes');
            await collection.insertOne({
              url: url,
              responseTime: timeTaken,
              timestamp: new Date()
            });
            client.close();
          } catch (error) {
            setResponseTime('Error: Could not fetch URL');
          }
        }
      }, cronTime);

      return () => clearInterval(intervalId);
    }
  }, [url, cronTime]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        </label>
        <label>
          Enter cron job interval (in milliseconds):
          <input type="number" value={cronTime} onChange={e => setCronTime(Number(e.target.value))} />
        </label>
        <button type="submit">Check Response Time</button>
      </form>
      {responseTime &&
        <p>The response time for {url} is {responseTime}</p>
      }
    </div>
  );
}

export default ResponseTimeChecker;