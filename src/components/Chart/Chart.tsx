// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
import { AverageMoodType, DailyMoodType } from '../../types/chart';

const CanvasChart = CanvasJSReact.CanvasJSChart;

type ChartProps = {
  dailyMood: Array<DailyMoodType>;
  averageMood: Array<AverageMoodType>;
};

const Chart = ({ dailyMood = [], averageMood = [] }: ChartProps) => {
  const options = {
    toolTip: {
      shared: false,
    },
    data: [
      {
        type: 'line',
        dataPoints: dailyMood,
        color: '#5c1be8',
      },
      {
        type: 'rangeSplineArea',
        dataPoints: averageMood,
        color: '#00BCD4',
        toolTipContent: '{y} average mood till {label}',
        mouseover: (e: any) => {
          console.log(e.dataSeries);
        },
      },
    ],
  };

  return (
    <CanvasChart
      options={options}
      /* onRef = {ref => this.chart = ref} */
    />
  );
};

export default Chart;
