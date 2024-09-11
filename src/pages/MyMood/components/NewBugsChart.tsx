import type { ChartActions, DataPointsProps } from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';
import { useContext, useEffect, useRef } from 'react';
import { SharedCrosshairContext } from '../../../context/Charts/SharedCrosshair/SharedCrosshair';

type NewBugsChartProps = {
  newBugs: Array<DataPointsProps>;
};

const NewBugsChart = ({ newBugs = [] }: NewBugsChartProps) => {
  const ref = useRef<null | ChartActions>(null);
  const { position } = useContext(SharedCrosshairContext);

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
        dataPoints: newBugs,
        color: '#a1df01',
      },
    ],
  };

  useEffect(() => {
    ref.current && position && ref.current.setCrosshair(position);
  }, [position]);

  return (
    <>
      bugs i got today
      <Chart
        options={options}
        ref={ref}
      />
    </>
  );
};

export default NewBugsChart;
