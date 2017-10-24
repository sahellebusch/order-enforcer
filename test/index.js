const {expect} = require('chai');
const {isAscending, isDescending} = require('../src/order-enforcer');

// will return all true values
const sillyCompare = () => [0, 1, 2, 3, 4].map((val, idx) => val === idx);

describe('order-enforcer', () => {
  describe('isAscending', () => {
    it('will throw an error if a list is not passed in', () => {
      expect(() => isAscending('boom')).to.throw(TypeError);
    });

    it('will return true with an ascending list', () =>
      expect(isAscending([1, 2, 3, 4, 5])).to.be.true
    );

    it('will return true with a list of 0 length', () =>
      expect(isAscending([])).to.be.true
    );

    it('will return true with a list of length 1', () =>
      expect(isAscending([4])).to.be.true
    );

    it('will return false with a randomly sorted list', () =>
      expect(isAscending([6, 3, 9, 5, 3])).to.be.false
    );

    it('will return false with a descending list', () =>
      expect(isAscending([5, 4, 3, 2, 1])).to.be.false
    );

    it('will return true with a sorted list by sub property', () => {
      const sortedByPropVal = [
        {prop1: {prop2: 1}},
        {prop1: {prop2: 2}},
        {prop1: {prop2: 3}},
        {prop1: {prop2: 4}},
        {prop1: {prop2: 5}},
      ];

      expect(isAscending(sortedByPropVal, 'prop1.prop2')).to.be.true;
    });

    it('will return true with an unsortedlist by subproperty', () => {
      const sortedByPropVal = [
        {prop1: {prop2: 1}},
        {prop1: {prop2: 5}},
        {prop1: {prop2: 7}},
        {prop1: {prop2: 2}},
        {prop1: {prop2: 3}},
      ];

      expect(isAscending(sortedByPropVal, 'prop1.prop2')).to.be.false;
    });

    it('will return true with an ascending list of strings', () =>
      expect(isAscending(['a', 'bc', 'def', 'ghi', 'jkl'])).to.be.true
    );

    it('will return false with a randomly sorted list of strings', () =>
      expect(isAscending(['arf', 'mxd', 'trf', 'prl', 'zx'])).to.be.false
    );
  });

  describe('isDescending', () => {
    it('will throw an error if a list is not passed in', () => {
      expect(() => isDescending('boom')).to.throw(TypeError);
    });

    it('will return true with a list of 0 length', () =>
      expect(isDescending([])).to.be.true
    );

    it('will return true with a list of length 1', () =>
      expect(isDescending([4])).to.be.true
    );

    it('will return false with an descending list', () =>
      expect(isDescending([1, 2, 3, 4, 5])).to.be.false
    );

    it('will return false with a randomly sorted list', () =>
      expect(isDescending([4, 7, 5, 9, 0])).to.be.false
    );

    it('will return true with a descending list', () =>
      expect(isDescending([5, 4, 3, 2, 1])).to.be.true
    );

    it('will return true with a descending list by sub property', () => {
      const sortedByPropVal = [
        {prop1: {prop2: 5}},
        {prop1: {prop2: 4}},
        {prop1: {prop2: 3}},
        {prop1: {prop2: 2}},
        {prop1: {prop2: 1}},
      ];

      expect(isDescending(sortedByPropVal, 'prop1.prop2')).to.be.true;
    });

    it('will return true with an unsortedlist by subproperty', () => {
      const sortedByPropVal = [
        {prop1: {prop2: 1}},
        {prop1: {prop2: 5}},
        {prop1: {prop2: 7}},
        {prop1: {prop2: 2}},
        {prop1: {prop2: 3}},
      ];

      expect(isDescending(sortedByPropVal, 'prop1.prop2')).to.be.false;
    });


    it('will return true with an ascending list of strings', () =>
      expect(isDescending(['jkl', 'ghi', 'def', 'bc', 'a'])).to.be.true
    );

    it('will return false with a randomly sorted list of strings', () =>
      expect(isDescending(['arf', 'mxd', 'trf', 'prl', 'zx'])).to.be.false
    );
  });
});
