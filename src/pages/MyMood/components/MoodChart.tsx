import { MouseEvent, useContext, useEffect, useRef } from 'react';
import type { DataPointsProps, ChartActions } from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';
import { SharedCrosshairContext } from '../../../context/Charts/SharedCrosshair/SharedCrosshair';

type MoodChartProps = {
  dailyMood: Array<DataPointsProps>;
  averageMood: Array<DataPointsProps>;
};

const MoodChart = ({ dailyMood = [], averageMood = [] }: MoodChartProps) => {
  const ref = useRef<null | ChartActions>(null);
  const { updateCrosshair, position } = useContext(SharedCrosshairContext);

  const options = {
    axisX: {
      crosshair: {
        enabled: true,
      },
    },
    toolTip: {
      shared: false,
    },
    data: [
      {
        type: 'line',
        dataPoints: dailyMood,
        color: '#5c51e8',
      },
      {
        type: 'rangeSplineArea',
        dataPoints: averageMood,
        color: '#00BCD4',
        toolTipContent: '{y} average mood till {label}',
      },
    ],
  };

  useEffect(() => {
    ref.current && position && ref.current.setCrosshair(position);
  }, [position]);

  const mouseMoveHandler = (e: MouseEvent) => {
    ref.current &&
      updateCrosshair(ref.current.getMousePositionOnXAxis(e.pageX).toFixed(2));
  };

  return (
    <>
      Overall Mood
      <div onMouseMove={mouseMoveHandler}>
        <Chart
          options={options}
          ref={ref}
        />
      </div>
    </>
  );
};

export default MoodChart;
