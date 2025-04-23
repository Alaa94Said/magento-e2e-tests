console.log('CWD:', process.cwd());
import path from 'path';

export const config: WebdriverIO.Config = {

    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [path.resolve(__dirname, '../features/home/homepage.feature'),
      path.resolve(__dirname, '../features/category/category-nav.feature'),
      path.resolve(__dirname, '../features/search/search.feature'),
      path.resolve(__dirname, '../features/add-to-cart/add-to-cart.feature'),
      path.resolve(__dirname, '../features/checkout/guest-checkout.feature'),



    ],

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
      require: [
        './src/features/step-definitions/homepage.steps.ts',
        './src/features/step-definitions/category-nav.steps.ts',
        './src/features/step-definitions/search.steps.ts',
        './src/features/step-definitions/add-to-cart.steps.ts',
        './src/features/step-definitions/guest-checkout.steps.ts',


      ],
      timeout: 60000,
      failAmbiguousDefinitions: true,
      failUndefinedDefinitions: true,
    },
    
    reporters: [
      'spec', 
      ['allure', { outputDir: 'reports/allure-results' }],

  
    ],
  
    
    automationProtocol: 'webdriver',


}
