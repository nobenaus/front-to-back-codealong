const withPWA = require('next-pwa');

// Add ability to install and use offline
module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
});
