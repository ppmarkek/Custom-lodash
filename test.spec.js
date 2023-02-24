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

describe('drop', () => {
  it('Creates a slice of array with n elements dropped from the beginning.', () => {
    const arr = [1, 2, 3];

    const result = Imd.drop(arr);

    expect(result).toEqual([2, 3]);
  });
  it('Creates a slice of array with n elements dropped from the beginning.', () => {
    const arr = [1, 2, 3];
    const number = 2;

    const result = Imd.drop(arr, number);

    expect(result).toEqual([3]);
  });
  it('Creates a slice of array with n elements dropped from the beginning.', () => {
    const arr = [1, 2, 3];
    const number = 5;

    const result = Imd.drop(arr, number);

    expect(result).toEqual([]);
  });
  it('Creates a slice of array with n elements dropped from the beginning.', () => {
    const arr = [1, 2, 3];
    const number = 0;

    const result = Imd.drop(arr, number);

    expect(result).toEqual([1, 2, 3]);
  });
});

describe('dropWhile', () => {
  it('Creates a slice of array excluding elements dropped from the beginning.', () => {
    var users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const value = function(o) { return !o.active; };

    const result = Imd.dropWhile(users, value);

    expect(result).toEqual(['pebbles']);
  });
  it('Creates a slice of array excluding elements dropped from the beginning.', () => {
    var users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const value = { 'user': 'barney', 'active': false };

    const result = Imd.dropWhile(users, value);

    expect(result).toEqual(['fred', 'pebbles']);
  });
  it('Creates a slice of array excluding elements dropped from the beginning.', () => {
    var users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const value = ['active', false];

    const result = Imd.dropWhile(users, value);

    expect(result).toEqual(['pebbles']);
  });
  it('Creates a slice of array excluding elements dropped from the beginning.', () => {
    var users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ];
    const value = 'active';

    const result = Imd.dropWhile(users, value);

    expect(result).toEqual(['barney', 'fred', 'pebbles']);
  });
});

describe('take', () => {
  it('Creates a slice of array with n elements taken from the beginning.', () => {
    const arr = [1, 2, 3];

    const result = Imd.take(arr);

    expect(result).toEqual([1]);
  });
  it('Creates a slice of array with n elements taken from the beginning.', () => {
    const arr = [1, 2, 3];
    const value = 2;

    const result = Imd.take(arr, value);

    expect(result).toEqual([1, 2]);
  });
  it('Creates a slice of array with n elements taken from the beginning.', () => {
    const arr = [1, 2, 3];
    const value = 5;

    const result = Imd.take(arr, value);

    expect(result).toEqual([1, 2, 3]);
  });
  it('Creates a slice of array with n elements taken from the beginning.', () => {
    const arr = [1, 2, 3];
    const value = 0;

    const result = Imd.take(arr, value);

    expect(result).toEqual([]);
  });
});

describe('filter', () => {
  it('Iterates over elements of collection, returning an array of all elements predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];
    const value = function(o) { return !o.active; };

    const result = Imd.filter(users, value);

    expect(result).toEqual(['fred']);
  });
  it('Iterates over elements of collection, returning an array of all elements predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];
    const value = { 'age': 36, 'active': true };

    const result = Imd.filter(users, value);

    expect(result).toEqual(['barney']);
  });
  it('Iterates over elements of collection, returning an array of all elements predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];
    const value = ['active', false];

    const result = Imd.filter(users, value);

    expect(result).toEqual(['fred']);
  });
  it('Iterates over elements of collection, returning an array of all elements predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];
    const value = 'active';

    const result = Imd.filter(users, value);

    expect(result).toEqual(['barney']);
  });
});

describe('find', () => {
  it('Iterates over elements of collection, returning the first element predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    const value = function(o) { return o.age < 40; };

    const result = Imd.find(users, value);

    expect(result).toEqual('barney');
  });
  it('Iterates over elements of collection, returning the first element predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    const value = { 'age': 1, 'active': true };

    const result = Imd.find(users, value);

    expect(result).toEqual('pebbles');
  });
  it('Iterates over elements of collection, returning the first element predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    const value = ['active', false];

    const result = Imd.find(users, value);

    expect(result).toEqual('fred');
  });
  it('Iterates over elements of collection, returning the first element predicate returns truthy for.', () => {
    var users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    const value = 'active';

    const result = Imd.find(users, value);

    expect(result).toEqual('barney');
  });
});

describe('includes', () => {
  it('Creates an array of elements split into groups the length of size.', () => {
    const arr = [1, 2, 3];
    const value = 1;

    const result = Imd.includes(arr, value);

    expect(result).toEqual(true);
  });
  it('Creates an array of elements split into groups the length of size.', () => {
    const arr = { 'a': 1, 'b': 2 };
    const value = 1;

    const result = Imd.includes(arr, value);

    expect(result).toEqual(true);
  });
  it('Creates an array of elements split into groups the length of size.', () => {
    const arr = 'abcd';
    const value = 'bc';

    const result = Imd.includes(arr, value);

    expect(result).toEqual(true);
  });
});

describe('map', () => {
  it('Creates an array of values by running each element in collection thru iteratee.', () => {
    const arr = [4, 8];
    function square(n) {
      return n * n;
    };

    const result = Imd.map(arr, square);

    expect(result).toEqual([16, 64]);
  });
  it('Creates an array of values by running each element in collection thru iteratee.', () => {
    const arr = { 'a': 4, 'b': 8 };
    function square(n) {
      return n * n;
    };

    const result = Imd.map(arr, square);

    expect(result).toEqual([16, 64]);
  });
  it('Creates an array of values by running each element in collection thru iteratee.', () => {
    const arr = 'user';
    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    const result = Imd.map(users, arr);

    expect(result).toEqual(['barney', 'fred']);
  });
});