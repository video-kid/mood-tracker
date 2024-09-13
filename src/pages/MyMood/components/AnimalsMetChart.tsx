import type {
  ChartActions,
  DataPointsProps,
  GenericChartProps,
} from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';
import { ComponentType, forwardRef } from 'react';

import withSharedCrosshair from '../hoc/withSharedCrosshair';

type AnimalsMetChartProps = {
  animalsMet: Array<DataPointsProps>;
};

const buildOptionsConfig = (animalsMet: DataPointsProps[]) => ({
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
      dataPoints: animalsMet,
      color: '#501baa',
    },
  ],
});

const AnimalsMetChart = forwardRef<ChartActions | null, AnimalsMetChartProps>(
  ({ animalsMet = [] }, ref) => {
    const options = buildOptionsConfig(animalsMet);

    return (
      <Chart
        options={options}
        ref={ref}
      />
    );
  }
);

export default withSharedCrosshair(
  AnimalsMetChart as ComponentType<GenericChartProps<AnimalsMetChartProps>>
);
