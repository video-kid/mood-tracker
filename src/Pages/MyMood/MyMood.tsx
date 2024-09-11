import Chart from '../../components/Chart/Chart';
import { AverageMoodType, DailyMoodType } from '../../types/chart';

const MyMood = () => {
  const dailyMood: Array<DailyMoodType> = [
    { label: '10.05', y: 3 },
    { label: '11.05', y: 1 },
    { label: '12.05', y: 4 },
    { label: '13.05', y: 10 },
    { label: '14.05', y: 8 },
  ];

  const averageMood: Array<AverageMoodType> = [
    { label: '10.05', y: [2, 4] },
    { label: '11.05', y: [3, 5] },
    { label: '12.05', y: [4, 6] },
    { label: '13.05', y: [3, 5] },
    { label: '14.05', y: [3, 5] },
  ];

  return (
    <div>
      <header>
        <h1>My mood chart</h1>
        <Chart
          dailyMood={dailyMood}
          averageMood={averageMood}
        />
      </header>
    </div>
  );
};

export default MyMood;
