"use strict";


describe('Filter reduce', function() {

    var reduce, mockedBooks;

    beforeEach(module('ciApp'));
    beforeEach(module('testData'));

    beforeEach(inject(function(_$filter_, _mockedBooks_) {
        reduce = _$filter_('reduce');
        mockedBooks = _mockedBooks_;
    }));

    it('should be defined', function() {
        expect(reduce).toBeDefined();
    });

    it('should properly reduce the passed collection', function() {
        var expected = angular.copy(mockedBooks);
        expected.splice(0, 1);
        expected.splice(1, 1);

        var actual = reduce(mockedBooks, 90);
        expect(actual).toEqual(expected);
    });

});