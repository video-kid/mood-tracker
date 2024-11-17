export type DataPointsProps = {
  x: number;
  y: Array<number> | number;
  label?: string;
};

type ChartDataProps = {
  type?: string;
  dataPoints?: Array<DataPointsProps>;
  color?: string;
  toolTipContent?: string;
  mouseover?: (e: any) => void;
};

export type ChartProps = {
  toolTip: {
    shared?: boolean;
  };
  data: Array<ChartDataProps>;
};

export type ChartActions = {
  getMousePositionOnXAxis: any;
  setCrosshair: (value: number) => void;
};

export type MapOfDataPoints = { [key: string]: Array<DataPointsProps> };

export type GenericChartProps<T extends MapOfDataPoints> = T;
