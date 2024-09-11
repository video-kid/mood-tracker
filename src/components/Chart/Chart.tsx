// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { ChartRefTypes, RootChartProps } from './types/chart';
import { ChartActions } from '../../types/chart';

const defaultOptions = {
  width: 500,
  height: 300,
};

const CanvasChart = CanvasJSReact.CanvasJSChart;

const Chart = forwardRef<ChartActions, RootChartProps>(({ options }, ref) => {
  let chartRef = useRef<null | ChartRefTypes>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        setCrosshair(value: number): void {
          chartRef.current && chartRef.current.axisX[0].crosshair.showAt(value);
        },
      };
    },
    []
  );

  return (
    <CanvasChart
      options={{ ...defaultOptions, ...options }}
      onRef={(reference: ChartRefTypes) => (chartRef.current = reference)}
    />
  );
});

export default Chart;
