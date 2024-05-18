// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MyMood = () => {
  const options = {
    title: {
      text: 'My mood',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'Apple', y: 10 },
          { label: 'Orange', y: 15 },
          { label: 'Banana', y: 25 },
          { label: 'Mango', y: 30 },
          { label: 'Grape', y: 28 },
        ],
      },
    ],
  };
  return (
    <div>
      <header>
        <h1>My mood chart</h1>
        <div>
          <CanvasJSChart
            options={options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
      </header>
    </div>
  );
};

export default MyMood;
