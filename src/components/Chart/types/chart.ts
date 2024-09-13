import { ChartProps } from '../../../types/chart';

export type RootChartProps = {
  options: ChartProps;
};

type AxisXChartRefTypes = {
  [x: string]: any;
  crosshair: {
    showAt: (value: number) => void;
  };
  convertPixelToValue: (value: number) => number;
};

export type ChartRefTypes = {
  axisX: Array<AxisXChartRefTypes>;
};
