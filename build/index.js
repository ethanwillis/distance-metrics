"use strict";
exports.__esModule = true;
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
    }
};
var manhanttanDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += Math.abs(vector1[i] - vector2[i]);
    }
    return sum;
};
exports.manhanttanDistance = manhanttanDistance;
var euclideanDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.length; i++) {
        sum += Math.pow((vector1[i] - vector2[i]), 2);
    }
    return Math.pow(sum, (1 / 2));
};
exports.euclideanDistance = euclideanDistance;
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
