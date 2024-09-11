import type { DataPointsProps } from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';

type NewBugsChartProps = {
  newBugs: Array<DataPointsProps>;
};

const NewBugsChart = ({ newBugs = [] }: NewBugsChartProps) => {
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

  return (
    <>
      bugs i got today
      <Chart options={options} />
    </>
  );
};

export default NewBugsChart;
