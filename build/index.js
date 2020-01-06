"use strict";
exports.__esModule = true;
var native_1 = require("../native");
exports.threadCount = native_1.threadCount;
var preconditions = {
    sameDimensions: function (vector1, vector2) {
        /**
          TODO: Technically you could find the distance between say
          a 1-dimensional vector and 2-dimensional vector by imputing
          the missing dimensions as 0.
          For now, and ease of implementation, we will put this burden
          on the users to fill in the missing dimensions with 0s.
        */
        if (vector1.length !== vector2.length) {
            throw "Both vectors must have the same dimension. If you are attempting to find the distance between vectors of different dimensions you must set the missing dimensions on whichever vector is missing them to 0.";
        }
    },
    dimensionLengthGreaterThan: function (minimumDimensionLength) {
        var vectors = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            vectors[_i - 1] = arguments[_i];
        }
        vectors.forEach(function (vector) {
            if (vector.length <= minimumDimensionLength) {
                throw "One of the supplied vectors does not meet the minimum dimensional length of " + minimumDimensionLength;
            }
        });
    },
    numberGreaterThan: function (value, lowerBound) {
        if (value <= lowerBound) {
            throw value + " <= " + lowerBound + ", Value(" + value + ") must be stricly greater than lowerBound(" + lowerBound + ")";
        }
    },
    numberLessThan: function (value, upperBound) {
        if (value >= upperBound) {
            throw value + " >= " + upperBound + ", Value(" + value + ") must be stricly less than upperBound(" + upperBound + ")";
        }
    }
};
var hellingerDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += vector1[i] === vector2[i] ? 1 : 0;
    }
    return sum;
};
exports.hellingerDistance = hellingerDistance;
var manhattanDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += Math.abs(vector1[i] - vector2[i]);
    }
    return sum;
};
exports.manhattanDistance = manhattanDistance;
var euclideanDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += Math.pow((vector1[i] - vector2[i]), 2);
    }
    return Math.pow(sum, 1 / 2);
};
exports.euclideanDistance = euclideanDistance;
var fractionalDistance = function (vector1, vector2, exponent) {
    preconditions.sameDimensions(vector1, vector2);
    preconditions.numberGreaterThan(exponent, 0);
    preconditions.numberLessThan(exponent, 1);
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += Math.pow(Math.abs(vector1[i] - vector2[i]), exponent);
    }
    return sum;
};
exports.fractionalDistance = fractionalDistance;
var minkowskiDistance = function (vector1, vector2, exponent) {
    if (exponent < 1) {
        return fractionalDistance(vector1, vector2, exponent);
    }
    else if (exponent == 1) {
        return manhattanDistance(vector1, vector2);
    }
    else if (exponent == 2) {
        return euclideanDistance(vector1, vector2);
    }
    else {
        preconditions.numberGreaterThan(exponent, 0);
        preconditions.sameDimensions(vector1, vector2);
        var sum = 0;
        // If our exponent is even we don't need to calculate absolute value.
        if (exponent % 2 == 0) {
            for (var i = 0; i < vector1.length; i++) {
                sum += Math.pow(vector1[i] - vector2[i], exponent);
            }
        }
        else {
            for (var i = 0; i < vector1.length; i++) {
                sum += Math.pow(Math.abs(vector1[i] - vector2[i]), exponent);
            }
        }
        return Math.pow(sum, exponent);
    }
};
exports.minkowskiDistance = minkowskiDistance;
var chebyshevDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    preconditions.dimensionLengthGreaterThan(0, vector1, vector2);
    var maxAbsoluteDifferenceBetweenDimensions = Math.abs(vector1[0] - vector2[0]);
    for (var i = 1; i < vector1.length; i++) {
        var absoluteDifferenceBetweenDimensions = Math.abs(vector1[i] - vector2[i]);
        if (absoluteDifferenceBetweenDimensions > maxAbsoluteDifferenceBetweenDimensions) {
            maxAbsoluteDifferenceBetweenDimensions = absoluteDifferenceBetweenDimensions;
        }
    }
    return maxAbsoluteDifferenceBetweenDimensions;
};
exports.chebyshevDistance = chebyshevDistance;
var matchDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += Math.abs(vector1[i] - vector2[i]);
    }
    return sum;
};
exports.matchDistance = matchDistance;
console.log(native_1.threadCount());
