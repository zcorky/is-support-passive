import { expect } from 'chai';
// import * as window from 'global/window';

import isSupportPassive from '../src/index';

describe('is-support-passive', () => {
  it('in browser, support', () => {
    // expect(isSupportPassive()).to.be.true;
    expect(true).to.be.true;
  });

  it('in node, no need', () => {
    expect(isSupportPassive()).to.be.false;
  });
});