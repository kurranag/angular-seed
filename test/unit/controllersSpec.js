'use strict';
describe('controllers', function() {
    describe('MyCtrl1', function() {
        var scope = {}, ctrl;
        beforeEach(module('myApp'));
        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('MyCtrl1', { $scope: scope });
        }));
        it('should exist', inject(function() {
            expect(ctrl).not.toBe(undefined);
        }));

        it('should have a car property', inject(function() {
            expect(scope.car).not.toBe(undefined);
        }));

        it('should have a car.make property', inject(function() {
            expect(scope.car.make).not.toBe(undefined);
        }));

        it('should have a car.model property', inject(function() {
            expect(scope.car.model).not.toBe(undefined);
        }));
        it('should have a car.year property', inject(function() {
            expect(scope.car.year).not.toBe(undefined);
        }));
        it('should have a car.price property', inject(function() {
            expect(scope.car.price).not.toBe(undefined);
        }));
        it('car.make should be Honda', inject(function() {
            expect(scope.car.make).toBe('Honda');
        }));
        it('car.model should be Civic', inject(function() {
            expect(scope.car.model).toBe('Civic');

        }));


    });
    describe('MyCtrl2', function() {
        var scope = {}, ctrl;
        beforeEach(module('myApp'));
        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('MyCtrl2', { $scope: scope });
        }));

        it('MyCtrl2 should exist', inject(function() {
            expect(ctrl).not.toBe(undefined);
        }));
        it('Should have 5 cars', inject(function() {
            expect(scope.car.length).toBe(5);

        }));
        it('should be able to add one more car', inject(function() {
        scope.car.push({ make: 'Honda',
            model: 'Civic',
            year: 2014,
            price: 26000
        });
            expect(scope.car.length).toBe(6);
        }));
        it('the second cars make shouldd be "Honda"', inject(function() {
            expect(scope.car[1].make).toBe('Honda');

        }));
    });
});
