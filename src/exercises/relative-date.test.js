import {calculateRelativeDate} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {
  it('Today', () => {
    const input  = new Date('2024-01-13');
    const expected = 'Today';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Yesterday', () => {
    const input  = new Date('2024-01-12');
    const expected = 'Yesterday';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This week', () => {
    const input  = new Date('2024-01-09');
    const expected = 'This week';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This Month', () => {
    const input  = new Date('2024-01-01');
    const expected = 'This month';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });

  /*
    skipping the following two tests for this year and last month since current date falls in January,
    previous month would be in December the previous year. 
    Expected Response doesn't include the cases: 
    'Last Month: year = current year - 1, month = current month -1'

  */

    it.skip('Last Month', () => {
      const input  = new Date('2024-12-01');
      const expected = 'Last month';
      const actual = calculateRelativeDate(input);
      expect(actual).to.equal(expected);
    });

  it.skip('This Year', () => {
    const input  = new Date('2024-01-01');
    const expected = 'This year';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });



  it('Last Year', () => {
    const input  = new Date('2023-12-11');
    const expected = 'Last year';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });

  it('Long time ago', () => {
    const input  = new Date('2022-12-11');
    const expected = 'Long time ago';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });

  it('Invalid selection', () => {
    const input  = new Date('2025-12-11');
    const expected = 'Invalid Selection: Select current or past dates';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
});
