import type {
  ChartActions,
  DataPointsProps,
  GenericChartProps,
} from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';
import { ComponentType, forwardRef } from 'react';

import withSharedCrosshair from '../hoc/withSharedCrosshair';

type NewBugsChartProps = {
  newBugs: Array<DataPointsProps>;
};

const buildOptionsConfig = (newBugs: DataPointsProps[]) => ({
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
      dataPoints: newBugs,
      color: '#a1df01',
    },
  ],
});

const NewBugsChart = forwardRef<ChartActions | null, NewBugsChartProps>(
  ({ newBugs = [] }, ref) => {
    const options = buildOptionsConfig(newBugs);

    return (
      <Chart
        options={options}
        ref={ref}
      />
    );
  }
);

export default withSharedCrosshair(
  NewBugsChart as ComponentType<GenericChartProps<NewBugsChartProps>>
);
