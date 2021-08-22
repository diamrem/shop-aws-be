import type { AWS } from '@serverless/typescript';

import getShopAdminInfo from '@functions/getShopAdminInfo';
import getShopInfo from '@functions/getShopInfo';

const serverlessConfiguration: AWS = {
  service: 'shop-info-service-eu',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'eu-central-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { getShopAdminInfo, getShopInfo },
};

module.exports = serverlessConfiguration;
