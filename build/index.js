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
        if (vector1.coordinates.length !== vector2.coordinates.length) {
            throw "Both vectors must have the same dimension. If you are attempting to find the distance between vectors of different dimensions you must set the missing dimensions on whichever vector is missing them to 0.";
        }
    }
};
var manhanttanDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.coordinates.length; i++) {
        sum += Math.abs(vector1.coordinates[i] - vector2.coordinates[i]);
    }
    return sum;
};
exports.manhanttanDistance = manhanttanDistance;
var euclideanDistance = function (vector1, vector2) {
    preconditions.sameDimensions(vector1, vector2);
    var sum = 0;
    for (var i = 0; i < vector1.coordinates.length; i++) {
        sum += Math.pow((vector1.coordinates[i] - vector2.coordinates[i]), 2);
    }
    return Math.pow(sum, 1) / 2;
};
exports.euclideanDistance = euclideanDistance;
