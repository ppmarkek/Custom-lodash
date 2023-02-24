import { ImdenverLodash } from './lodash';
import {describe, expect, it} from '@jest/globals'

const Imd = new ImdenverLodash;

describe('chunk', () => {
  it('Creates an array of elements split into groups the length of size', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const number = 2;

    const result = Imd.chunk(arr, number);

    expect(result).toEqual([['a', 'b'], ['c', 'd']]);
  });
  it('Creates an array of elements split into groups the length of size', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const number = 3;

    const result = Imd.chunk(arr, number);
    
    expect(result).toEqual([['a', 'b', 'c'], ['d']]);
  });
});

describe('compact', () => {
  it('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
    const arr = [0, 1, false, 2, '', 3];

    const result = Imd.compact(arr);

    expect(result).toEqual([1, 2, 3]);
  });
});