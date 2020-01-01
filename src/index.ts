import { sum } from './utils';

interface Point {
  x: number;
  y: number;
}

const euclideanDistance = (p1:Point[], p2:Point[]) => {
  return sum(p1[0].x, p2[0].x);
}

export { euclideanDistance }
