import { useRef } from 'react';
import type { DataPointsProps, ChartActions } from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';

type MoodChartProps = {
  dailyMood: Array<DataPointsProps>;
  averageMood: Array<DataPointsProps>;
};

const MoodChart = ({ dailyMood = [], averageMood = [] }: MoodChartProps) => {
  const ref = useRef<null | ChartActions>(null);

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
        mouseover: (e: any) => {
          //   console.log(e);
        },
      },
    ],
  };

  return (
    <>
      Overall Mood
      <button onClick={() => ref.current && ref.current.setCrosshair(12)}>
        set croshair at 12
      </button>
      <Chart
        options={options}
        ref={ref}
      />
    </>
  );
};

export default MoodChart;
