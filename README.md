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
const vector1 = [-7, -4]
const vector2 = [17, 6.5]
console.log( euclideanDistance(vector1, vector2) )
```
***Output***
```
26.196373794859472
```

## Distance Metrics Functions
All currently implemented distance metrics use parameters that are just arrays.

### Minkowski Family
```euclideanDistance(vector1, vector2)```

```manhattanDistance(vector1, vector2)```

```fractionalDistance(vector1, vector2, exponent)```

```minkowskiDistance(vector1, vector2, exponent)```

### Other Distance Functions
```hellingerDistance(vector1, vector2)```

```chebyshevDistance(vector1, vector2)```

```matchDistance(vector1, vector2)```

## Native Distance Metrics Functions
I've started some experimental work where I'm going to implement native versions of the javascript functions.
Currently I have implemented the following functions in Rust.
```manhattanDistanceNative(vector1, vector2)```

### Notes:
The manhattan, euclidean, and fractional distance functions are all special cases of the minkowskiDistance function.
If you are only using function calls to minkowskiDistance(...) that are equivalent your code will be slightly faster if you call the underlying special cases directly.

```manhattanDistance(vector1, vector2)``` is equivalent to ```minkowskiDistance(vector1, vector2, 1)```
```euclideanDistance(vector1, vector2)``` is equivalent to ```minkowskiDistance(vector1, vector2, 2)```
```fractionalDistance(vector1, vector2, <any exponent less than 1>)``` is equivalent to ```minkowskiDistance(vector1, vector2, <any exponent less than 1>)```

## Dev Quickstart

```sh
$ npm install
$ npm run compile
```
