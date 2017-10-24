const _get = require('lodash.get');

const numberComparator = (asc, list, idx, path) =>
  asc
    ? _get(list[idx], path, list[idx]) <= _get(list[idx + 1], path, list[idx + 1])
    : _get(list[idx], path, list[idx]) >= _get(list[idx + 1], path, list[idx + 1]);

const stringComparator = (asc, list, idx, path) =>
  asc
    ? _get(list[idx], path, list[idx]).localeCompare(_get(list[idx + 1], path, list[idx + 1])) === -1
    : _get(list[idx + 1], path, list[idx + 1]).localeCompare(_get(list[idx], path, list[idx])) === -1;

const compareLists = (asc, list, path, compareFn) =>
  list.every((_, idx) => idx < list.length - 1 ? compareFn(asc, list, idx, path) : true);

const isSorted = (asc, list, path = null) => {
  if (!Array.isArray(list)) {
    throw new TypeError('List must be passed in.');
  }

  if (list.length === 0) {
    return true;
  }

  if (typeof _get(list[0], path, list[0]) === 'number') {
    return compareLists(asc, list, path, numberComparator);
  }
  else if (typeof _get(list[0], path, list[0]) === 'string') {
    return compareLists(asc, list, path, stringComparator);
  }
  else {
    throw new TypeError('Cannot compare values that are not strings or numbers.');
  }
};

/**
 * Determines if a list is sorted in ascending order.
 *
 * @param {Array.<*>} list        list of items to determine if sorted
 * @param {String}    [path=null] for a list of objects, compares the value of the path of the object
 * @returs {Boolean}  true if sorted
 * @throws {TypeError} if list is not an array or values to be compared are not a string or number
 */
const isAscending = (list, path) => isSorted(true, list, path);

/**
 * Determines if a list is sorted in descending order.
 *
 * @param {Array.<*>} list        list of items to determine if sorted
 * @param {String}    [path=null] for a list of objects, compares the value of the path of the object
 * @returs {Boolean}  true if sorted
 * @throws {TypeError} if list is not an array or values to be compared are not a string or number
 */
const isDescending = (list, path) => isSorted(false, list, path);

module.exports = {
  isAscending,
  isDescending
};
