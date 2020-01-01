"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var euclideanDistance = function (p1, p2) {
    return utils_1.sum(p1[0].x, p2[0].x);
};
exports.euclideanDistance = euclideanDistance;
