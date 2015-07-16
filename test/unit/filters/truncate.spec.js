"use strict";


describe('Filter truncate', function() {

    var truncate;

    beforeEach(module('ciApp'));

    beforeEach(inject(function(_$filter_) {
        truncate = _$filter_('truncate');
    }));

    it('should be defined', function() {
        expect(truncate).toBeDefined();
    });

    it('should properly truncate the passed input', function() {
        var input = '123456789';
        var output = truncate(input, 3, '...');
        expect(output).toBe('123...');
    });

});