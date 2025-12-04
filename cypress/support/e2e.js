import './commands'
import * as apiUtils from './api_utils'
import * as utils from './utils'

import '@shelex/cypress-allure-plugin';


Cypress.utils = utils;
Cypress.apiUtils = apiUtils;