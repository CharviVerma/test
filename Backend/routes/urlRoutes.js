const express = require('express');
const router = express.Router();
const UrlInterval = require('../models/UrlInterval');
const UrlResponse = require('../models/UrlResponse');
const startCronJob = require('../cron');

router.post('/url-interval', async (req, res) => {
    try {
      const { url, timeInterval } = req.body;
      const urlInterval = new UrlInterval({ url, timeInterval });
      await urlInterval.save();
      startCronJob(urlInterval);
      res.status(201).json(urlInterval);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  router.get('/url-responses', async (req, res) => {
    try {
      const urlResponses = await UrlResponse.find().sort({ createdAt: -1 }).limit(20);
      res.json(urlResponses);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });
  
  router.get('/url-responses/all', async (req, res) => {
    try {
      const urlResponses = await UrlResponse.find();
      res.json(urlResponses);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });
  
  router.get('/url-entries', async (req, res) => {
    try {
      const urlIntervals = await UrlInterval.find();
      res.json(urlIntervals);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });

  module.exports = router;