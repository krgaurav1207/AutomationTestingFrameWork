// Since cucumber & playwright doesn't contain assertion library
const chai = require('chai')

//to set global variable to freely use across project
global.expect = chai.expect
global.assert = chai.assert
global.should = chai.should