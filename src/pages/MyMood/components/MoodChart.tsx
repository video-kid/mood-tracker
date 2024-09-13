import { ComponentType, forwardRef } from 'react';
import type {
  DataPointsProps,
  ChartActions,
  GenericChartProps,
} from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';
import withSharedCrosshair from '../hoc/withSharedCrosshair';

type MoodChartProps = {
  dailyMood: Array<DataPointsProps>;
  averageMood: Array<DataPointsProps>;
};

const buildOptionsConfig = (
  dailyMood: DataPointsProps[],
  averageMood: DataPointsProps[]
) => ({
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
});

const MoodChart = forwardRef<ChartActions | null, MoodChartProps>(
  ({ dailyMood = [], averageMood = [] }, ref) => {
    const options = buildOptionsConfig(dailyMood, averageMood);

    return (
      <Chart
        options={options}
        ref={ref}
      />
    );
  }
);

export default withSharedCrosshair(
  MoodChart as ComponentType<GenericChartProps<MoodChartProps>>
);
