export type DataPointsProps = {
  label: number;
  x: number;
  y: Array<number> | number;
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
