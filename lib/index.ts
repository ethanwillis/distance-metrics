/**
  This type can represent vectors in n-Dimensions

  Examples:
  1-Dimension
  const OneDimensionalVector = {coordinates: [1]} // 1 on the number line.

  2-Dimensions
  const TwoDimensionalPoint = {coordinates: [2, 3]} // Would be (x, y) = (2, 3) on a Plane.

  ... etc.
*/
type NDimensionalVector = number[]

const preconditions = {
  sameDimensions: (vector1:NDimensionalVector, vector2:NDimensionalVector):void => {
    /**
      TODO: Technically you could find the distance between say
      a 1-dimensional vector and 2-dimensional vector by imputing
      the missing dimensions as 0.
      For now, and ease of implementation, we will put this burden
      on the users to fill in the missing dimensions with 0s.
    */
    if(vector1.length !== vector2.length) {
      throw "Both vectors must have the same dimension. If you are attempting to find the distance between vectors of different dimensions you must set the missing dimensions on whichever vector is missing them to 0."
    }
  },
  dimensionLengthGreaterThan: (minimumDimensionLength:number, ...vectors:NDimensionalVector[]):void => {
    vectors.forEach( (vector) => {
      if(vector.length <= minimumDimensionLength) {
        throw `One of the supplied vectors does not meet the minimum dimensional length of ${minimumDimensionLength}`
      }
    });
  },
  numberGreaterThan: (value:number, lowerBound:number):void => {
    if(value <= lowerBound) {
      throw `${value} <= ${lowerBound}, Value(${value}) must be stricly greater than lowerBound(${lowerBound})`
    }
  },
  numberLessThan: (value:number, upperBound:number):void => {
    if(value >= upperBound) {
      throw `${value} >= ${upperBound}, Value(${value}) must be stricly less than upperBound(${upperBound})`
    }
  }
};

const hellingerDistance = (vector1: NDimensionalVector, vector2:NDimensionalVector):number => {
  preconditions.sameDimensions(vector1, vector2);

  let sum = 0
  for(let i = 0; i < vector1.length; i++) {
    sum += vector1[i] === vector2[i] ? 1 : 0
  }

  return sum;
}

const manhattanDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector):number => {
  preconditions.sameDimensions(vector1, vector2);

  let sum = 0
  for(let i = 0; i < vector1.length; i++) {
    sum += Math.abs( vector1[i] - vector2[i] )
  }

  return sum;
};

const euclideanDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector):number => {
  preconditions.sameDimensions(vector1, vector2);

  let sum = 0
  for(let i = 0; i < vector1.length; i++) {
    sum += Math.pow(
              (vector1[i] - vector2[i]),
              2
           )
  }

  return Math.pow(sum, 1/2)
};

const fractionalDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector, exponent:number):number => {
  preconditions.sameDimensions(vector1, vector2);
  preconditions.numberGreaterThan(exponent, 0);
  preconditions.numberLessThan(exponent, 1);

  let sum = 0;
  for(let i = 0; i < vector1.length; i++) {
    sum += Math.pow(
              Math.abs( vector1[i] - vector2[i] ),
              exponent
           )
  }
  return sum;
}

const minkowskiDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector, exponent:number):number => {
  if(exponent < 1) {
    return fractionalDistance(vector1, vector2, exponent)
  } else if(exponent == 1) {
    return manhattanDistance(vector1, vector2)
  } else if(exponent == 2) {
    return euclideanDistance(vector1, vector2)
  } else {
      preconditions.numberGreaterThan(exponent, 0);
      preconditions.sameDimensions(vector1, vector2);

      let sum = 0;
      // If our exponent is even we don't need to calculate absolute value.
      if(exponent % 2 == 0) {
        for(let i = 0; i < vector1.length; i++) {
          sum += Math.pow(
                  vector1[i] - vector2[i],
                  exponent
                )
        }
      } else {
        for(let i = 0; i < vector1.length; i++) {
          sum += Math.pow(
            Math.abs( vector1[i] - vector2[i] ),
            exponent
          )
        }
      }
      return Math.pow(sum, exponent)
  }
}

const chebyshevDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector):number => {
  preconditions.sameDimensions(vector1, vector2);
  preconditions.dimensionLengthGreaterThan(0, vector1, vector2)

  let maxAbsoluteDifferenceBetweenDimensions = Math.abs( vector1[0] - vector2[0])
  for(let i = 1; i < vector1.length; i++) {
    const absoluteDifferenceBetweenDimensions = Math.abs( vector1[i] - vector2[i] )
    if(absoluteDifferenceBetweenDimensions > maxAbsoluteDifferenceBetweenDimensions) {
      maxAbsoluteDifferenceBetweenDimensions = absoluteDifferenceBetweenDimensions
    }
  }
  return maxAbsoluteDifferenceBetweenDimensions;
}

const matchDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector):number => {
  preconditions.sameDimensions(vector1, vector2);

  let sum = 0;
  for(let i = 0; i < vector1.length; i++) {
    sum += Math.abs( vector1[i] - vector2[i] )
  }

  return sum;
}


export {
  hellingerDistance,
  manhattanDistance,
  euclideanDistance,
  fractionalDistance,
  minkowskiDistance,
  chebyshevDistance,
  matchDistance
}
