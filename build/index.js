"use strict";
exports.__esModule = true;
var euclideanDistance = function (point1, point2) {
    // Every pair of points must have the same dimensions.
    /**
      TODO: Technically you could find the distance between say
      a 1-dimensional point and 2-dimensional point by imputing
      the missing dimensions as 0.
      For now, and ease of implementation, we will put this burden
      on the users to fill in the missing dimensions with 0s.
    */
    if (point1.coordinates.length !== point2.coordinates.length) {
        throw "Both points must have the same dimension. If you are attempting to find the distance between points of different dimensions you must set the missing dimensions on whichever point is missing them to 0.";
    }
    var sum = 0;
    for (var i = 0; i < point1.coordinates.length; i++) {
        sum += Math.pow((point1.coordinates[i] - point2.coordinates[i]), 2);
    }
    return Math.pow(sum, 1) / 2;
};
exports.euclideanDistance = euclideanDistance;
