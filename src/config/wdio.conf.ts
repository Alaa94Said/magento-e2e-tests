
export const config: WebdriverIO.Config = {

    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [  'features/home/homepage.feature'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    baseUrl: process.env.BASE_URL || 'https://magento.softwaretestingboard.com',
    waitforTimeout: 10000,
  
    connectionRetryCount: 3,
    framework: 'cucumber',

    cucumberOpts: {
      require: ['./features/step-definitions/*.ts'],
      timeout: 60000,
    },
    reporters: [
      'spec',
      ['allure', {
        outputDir: './reports/allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      }],
    ],
    automationProtocol: 'webdriver',


}
