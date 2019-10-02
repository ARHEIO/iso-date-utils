/**
 * @license
 * Copyright Adam Eggleston. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const toISOString = require('./index');
const expect = require('chai').expect;

describe('#toISOString', () => {

  it('should export a function', () => {
    expect(toISOString).to.be.a('function');
  });

  it('should return a javascript date object as an ISO string with timezone', () => {
    const testDate = new Date('Wed Oct 02 2019 14:50:58 GMT+1000')
    const expectedDate = '2019-10-02T14:50:58+10:00'
    
    expect(toISOString(testDate)).to.deep.equal(expectedDate);
  });

});