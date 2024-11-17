import type { DataPointsProps } from '../../types/chart';

export const dailyMood: Array<DataPointsProps> = [
  { x: 1726414607, y: 1 },
  { x: 1726501007, y: 4 },
  { x: 1726587407, y: 10 },
  { x: 1726673807, y: 3 },
  { x: 1726760207, y: 8 },
];

export const averageMood: Array<DataPointsProps> = [
  { x: 1726414607, y: [2, 4] },
  { x: 1726501007, y: [3, 5] },
  { x: 1726587407, y: [4, 6] },
  { x: 1726673807, y: [3, 5] },
  { x: 1726760207, y: [3, 5] },
];

export const animalsMet: Array<DataPointsProps> = [
  { x: 1726501007, y: 4 },
  { x: 1726587407, y: 10 },
  { x: 1726673807, y: 3 },
];

export const newBugs: Array<DataPointsProps> = [
  { x: 1726414607, y: 2 },
  { x: 1726501007, y: 0 },
  { x: 1726587407, y: 0 },
  { x: 1726673807, y: 1 },
  { x: 1726760207, y: 1 },
];
