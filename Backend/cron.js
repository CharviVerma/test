const cron = require('node-cron');
const request = require('request-promise-native');
const { performance } = require('perf_hooks');
const NUM_JOBS = 20

module.exports = async function startCronJob(urlInterval) {
  const { url, timeInterval } = urlInterval;

  for (let i = 1; i <= NUM_JOBS; i++) {
    cron.schedule(`*/${timeInterval} * * * * *`, async () => {
      try {
        const startTime = performance.now();

        const response = await request.get(url);

        const endTime = performance.now();

        const responseTime = endTime - startTime;

        const responseUrl = new ResponseUrl({
          url: url,
          responseTime: responseTime,
          url_interval_id: urlInterval._id,
          createdAt: new Date(),
        });

        // Save the response URL object to the database
        await responseUrl.save();

        console.log(`Checked URL ${url} at ${new Date()}, response time: ${responseTime}ms`);
      } catch (err) {
        console.error(err);
      }
    });
  }
};