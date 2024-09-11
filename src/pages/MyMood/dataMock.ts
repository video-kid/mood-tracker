import type { DataPointsProps } from '../../types/chart';

export const dailyMood: Array<DataPointsProps> = [
  { x: 11, label: 11, y: 1 },
  { x: 12, label: 12, y: 4 },
  { x: 13, label: 13, y: 10 },
  { x: 14, label: 14, y: 3 },
  { x: 15, label: 15, y: 8 },
];

export const averageMood: Array<DataPointsProps> = [
  { x: 11, label: 11, y: [2, 4] },
  { x: 12, label: 12, y: [3, 5] },
  { x: 13, label: 13, y: [4, 6] },
  { x: 14, label: 14, y: [3, 5] },
  { x: 15, label: 15, y: [3, 5] },
];

export const animalsMet: Array<DataPointsProps> = [
  { x: 11, label: 11, y: 1 },
  { x: 12, label: 12, y: 4 },
  { x: 13, label: 13, y: 10 },
  { x: 14, label: 14, y: 3 },
  { x: 15, label: 15, y: 8 },
];

export const newBugs: Array<DataPointsProps> = [
  { x: 11, label: 11, y: 2 },
  { x: 12, label: 12, y: 0 },
  { x: 13, label: 13, y: 0 },
  { x: 14, label: 14, y: 1 },
  { x: 15, label: 15, y: 1 },
];
