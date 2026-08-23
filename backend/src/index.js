'use strict';
const cron = require('node-cron');

module.exports = {
  register({ strapi }) {
    // Запуск бэкапа каждый день в 2:00
    cron.schedule('0 2 * * *', () => {
      strapi.log.info('Starting scheduled backup...');
      require('../scripts/backup.js');
    });
  },
};
