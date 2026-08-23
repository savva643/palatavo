'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/feedback',
      handler: 'feedback.create',
      config: {
        policies: [],
      },
    },
  ],
};
