console.log('CWD:', process.cwd());
import path from 'path';

export const config: WebdriverIO.Config = {

    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [path.resolve(__dirname, '../features/checkout/guest-checkout.feature')],

    //specs: [path.resolve(__dirname, '../features/**/*.feature')],

    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'error',
    baseUrl: process.env.BASE_URL || 'https://magento.softwaretestingboard.com',
    waitforTimeout: 10000,
  
    connectionRetryCount: 3,
    framework: 'cucumber',

    cucumberOpts: {
      require: ['./src/features/step-definitions/checkout.steps.ts'],
        //'./src/features/step-definitions/*.ts'],
      timeout: 60000,
    },
    
    reporters: [
      'spec', 
      ['allure', { outputDir: 'reports/allure-results' }],

  
    ],
  
    
    automationProtocol: 'webdriver',


}
