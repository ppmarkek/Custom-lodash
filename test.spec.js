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