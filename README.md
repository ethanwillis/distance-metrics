## Distance Metrics
This is an implementation of commonly used distance metrics in pure javascript (with typescript) as noted in this [stackexchange answer.](https://stats.stackexchange.com/a/151362)
The initial motivation was to be able to compute distance metrics between histograms.

## Installation
```sh
$ npm install --save distance-metrics
```

## Example
```javascript
const { euclideanDistance } = require('distance-metrics');
// Create two vectors for the points (-7, -4), (17, 6.5)
const vector1 = {coordinates: [-7, -4]}
const vector2 = {coordinates: [17, 6.5]}
console.log( euclideanDistance(vector1, vector2) )
```
***Output***
```
26.196373794859472
```

## Distance Metrics
All currently implemented distance metrics use parameters that are just vectors within an object.
All Vectors are of the following form. Where 0, 1, 2, 3, ... should be replaced by the values of your vector.
```json
{
  "coordinates": [0, 1, 2, 3]
}
```

```euclideanDistance(vector1, vector2)```

```manhanttanDistance(vector1, vector2)```



## Dev Quickstart
```sh
$ npm install
$ npm run compile
```
