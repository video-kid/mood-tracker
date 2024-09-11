import type { DataPointsProps } from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';

type AnimalsMetChartProps = {
  animalsMet: Array<DataPointsProps>;
};

const AnimalsMetChart = ({ animalsMet = [] }: AnimalsMetChartProps) => {
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
        dataPoints: animalsMet,
        color: '#501baa',
      },
    ],
  };

  return (
    <>
      Animas met today
      <Chart options={options} />
    </>
  );
};

export default AnimalsMetChart;
