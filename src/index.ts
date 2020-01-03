/**
  This interface can represent vectors in n-Dimensions

  Examples:
  1-Dimension
  const OneDimensionalVector = {coordinates: [1]} // 1 on the number line.

  2-Dimensions
  const TwoDimensionalPOint = {coordinates: [2, 3]} // Would be (x, y) = (2, 3) on a Plane.

  ... etc.
*/
interface NDimensionalVector {
  coordinates: number[]
}

const preconditions = {
  sameDimensions: (vector1:NDimensionalVector, vector2:NDimensionalVector):void => {
    /**
      TODO: Technically you could find the distance between say
      a 1-dimensional vector and 2-dimensional vector by imputing
      the missing dimensions as 0.
      For now, and ease of implementation, we will put this burden
      on the users to fill in the missing dimensions with 0s.
    */
    if(vector1.coordinates.length !== vector2.coordinates.length) {
      throw "Both vectors must have the same dimension. If you are attempting to find the distance between vectors of different dimensions you must set the missing dimensions on whichever vector is missing them to 0."
    }
  }
};

const manhanttanDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector):number => {
  preconditions.sameDimensions(vector1, vector2);

  let sum = 0
  for(let i = 0; i < vector1.coordinates.length; i++) {
    sum += Math.abs( vector1.coordinates[i] - vector2.coordinates[i] )
  }

  return sum;
};

const euclideanDistance = (vector1:NDimensionalVector, vector2:NDimensionalVector):number => {
  preconditions.sameDimensions(vector1, vector2);

  let sum = 0
  for(let i = 0; i < vector1.coordinates.length; i++) {
    sum += (vector1.coordinates[i] - vector2.coordinates[i]) ** 2
  }

  return sum ** (1/2)
};

export { euclideanDistance, manhanttanDistance }
