// @ts-ignore-next-line
import CanvasJSReact from '@canvasjs/react-charts';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { ChartRefTypes, RootChartProps } from './types/chart';
import { ChartActions } from '../../types/chart';

const defaultOptions = {
  width: 500,
  height: 300,
};

const CanvasChart = CanvasJSReact.CanvasJSChart;

const Chart = forwardRef<ChartActions | undefined, RootChartProps>(
  ({ options, ...props }, ref) => {
    let chartRef = useRef<undefined | ChartRefTypes>(undefined);

    useImperativeHandle(
      ref,
      () => {
        const chartInstance = chartRef.current;

        if (!chartInstance) return;

        return {
          setCrosshair(value: number): void {
            chartInstance.axisX[0].crosshair.showAt(value);
          },
          getMousePositionOnXAxis(value: number): number {
            return chartInstance.axisX[0].convertPixelToValue(value);
          },
        };
      },
      []
    );

    return (
      <CanvasChart
        options={{ ...defaultOptions, ...options }}
        onRef={(reference: ChartRefTypes) => (chartRef.current = reference)}
        {...props}
      />
    );
  }
);

export default Chart;
