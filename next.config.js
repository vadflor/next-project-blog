const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  reactStrictMode: true;

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //this is for development 
    return {
      env: {
        mongodb_username: 'next',
        mongodb_password: 'nextjs',
        mongodb_database: 'my-site-dev',
      }
    };
  }
  //this is for prodaction
  return {
    env: {
      mongodb_username: 'next',
      mongodb_password: 'nextjs',
      mongodb_database: 'my-site',
    }
  }

}
