import {calculateRelativeDate} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {
  it('Today', () => {
    const input  = new Date('2024-01-13');
    const expected = 'Today: same year, same month, same date';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Yesterday', () => {
    const input  = new Date('2024-01-12');
    const expected = 'Yesterday: same year, same month, date = today - 1';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This week', () => {
    const input  = new Date('2024-01-09');
    const expected = 'This week: same year, same month, today - 7 < date < today - 1';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This Month', () => {
    const input  = new Date('2024-01-01');
    const expected = 'This month: same year, same month, date < today - 7';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });

  /*
    skipping the test for this year since current date falls in January,
    previous month would be in December the previous year. 
    Expected Response doesn't include the case: 'Last Month: year = current year - 1, month = current month -1'
  */

  it.skip('This Year', () => {
    const input  = new Date('2023-12-01');
    const expected = 'This month: same year, same month, date < today - 7';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });



  it('Last Year', () => {
    const input  = new Date('2023-12-11');
    const expected = 'Last year: year = current year - 1';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });

  it('Long time ago', () => {
    const input  = new Date('2022-12-11');
    const expected = 'Long time ago: everything else';
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
