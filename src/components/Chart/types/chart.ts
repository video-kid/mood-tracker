import { ChartProps } from '../../../types/chart';

export type RootChartProps = {
  options: ChartProps;
};

type AxisXChartRefTypes = {
  crosshair: {
    showAt: (value: number) => void;
  };
};

export type ChartRefTypes = {
  axisX: Array<AxisXChartRefTypes>;
};
