'use strict';

module.exports = {
  async health(ctx) {
    try {
      // Check database connection
      await strapi.db.connection.raw('SELECT 1');
      
      ctx.send({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
      });
    } catch (error) {
      ctx.send({
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        database: 'disconnected',
        error: error.message,
      }, 500);
    }
  },
};
