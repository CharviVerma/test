const cron = require('node-cron');
const request = require('request-promise-native');
const { performance } = require('perf_hooks');
const UrlInterval = require('./models/UrlInterval');
const UrlResponse = require('./models/UrlResponse');
let numJobs = 2

module.exports = async function startCronJob(urlInterval) {
  const { url, timeInterval } = urlInterval;

    const task = cron.schedule(`*/${timeInterval} * * * * *`, async () => {
      try {
        const startTime = performance.now();

        const response = await request.get(url);

        const endTime = performance.now();

        const responseTime = endTime - startTime;

        const urlResponse = new UrlResponse({
          url: url,
          responseTime: responseTime,
          url_interval_id: urlInterval._id,
          createdAt: new Date(),
        });

        await urlResponse.save();

        console.log(`Checked URL ${url} at ${new Date()}, response time: ${responseTime}ms`);
      } catch (err) {
        console.error(err);
      }
      numJobs--;
      if(numJobs == 0){
        task.stop()
      }
    });
};