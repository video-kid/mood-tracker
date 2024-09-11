import type { ChartActions, DataPointsProps } from '../../../types/chart';
import Chart from '../../../components/Chart/Chart';
import { useContext, useEffect, useRef } from 'react';
import { SharedCrosshairContext } from '../../../context/Charts/SharedCrosshair/SharedCrosshair';

type AnimalsMetChartProps = {
  animalsMet: Array<DataPointsProps>;
};

const AnimalsMetChart = ({ animalsMet = [] }: AnimalsMetChartProps) => {
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
        dataPoints: animalsMet,
        color: '#501baa',
      },
    ],
  };

  useEffect(() => {
    ref.current && position && ref.current.setCrosshair(position);
  }, [position]);

  return (
    <>
      Animas met today
      <Chart
        options={options}
        ref={ref}
      />
    </>
  );
};

export default AnimalsMetChart;
