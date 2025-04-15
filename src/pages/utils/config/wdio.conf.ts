// src/config/wdio.conf.ts
import { config as base } from 'webdriverio';
import * as dotenv from 'dotenv';

dotenv.config();

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
  }],
  logLevel: 'info',
  baseUrl: process.env.BASE_URL || 'https://magento.softwaretestingboard.com',
  waitforTimeout: 10000,
  framework: 'cucumber',
  reporters: [
    'spec',
    ['allure', {
      outputDir: './reports/allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],
  cucumberOpts: {
    require: ['./features/step-definitions/*.ts'],
    timeout: 60000,
  },
  services: ['chromedriver'],
};
