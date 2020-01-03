/**
  This interface can represent points in n-Dimensions

  Examples:
  1-Dimension
  const OneDimensionalPoint = {coordinates: [1]} // 1 on the number line.

  2-Dimensions
  const TwoDimensionalPOint = {coordinates: [2, 3]} // Would be (x, y) = (2, 3) on a Plane.

  ... etc.
*/
interface NDimensionalPoint {
  coordinates: [number]
}

const preconditions = {
  sameDimensions: (point1:NDimensionalPoint, point2:NDimensionalPoint):void => {
    /**
      TODO: Technically you could find the distance between say
      a 1-dimensional point and 2-dimensional point by imputing
      the missing dimensions as 0.
      For now, and ease of implementation, we will put this burden
      on the users to fill in the missing dimensions with 0s.
    */
    if(point1.coordinates.length !== point2.coordinates.length) {
      throw "Both points must have the same dimension. If you are attempting to find the distance between points of different dimensions you must set the missing dimensions on whichever point is missing them to 0."
    }
  }
};

const manhanttanDistance = (point1:NDimensionalPoint, point2:NDimensionalPoint):number => {
  preconditions.sameDimensions(point1, point2);

  let sum = 0
  for(let i = 0; i < point1.coordinates.length; i++) {
    sum += Math.abs( point1.coordinates[i] - point2.coordinates[i] )
  }

  return sum;
};

const euclideanDistance = (point1:NDimensionalPoint, point2:NDimensionalPoint):number => {
  preconditions.sameDimensions(point1, point2);

  let sum = 0
  for(let i = 0; i < point1.coordinates.length; i++) {
    sum += (point1.coordinates[i] - point2.coordinates[i]) ** 2
  }

  return sum ** 1/2
};

export { euclideanDistance }
