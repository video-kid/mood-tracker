import AnimalsMetChart from './components/AnimalsMetChart';
import MoodChart from './components/MoodChart';
import NewBugsChart from './components/NewBugsChart';
import { animalsMet, averageMood, dailyMood, newBugs } from './dataMock';

const MyMood = () => {
  return (
    <div>
      <header>
        <h1>My mood chart</h1>
      </header>
      <MoodChart
        dailyMood={dailyMood}
        averageMood={averageMood}
      />
      <AnimalsMetChart animalsMet={animalsMet} />
      <NewBugsChart newBugs={newBugs} />
    </div>
  );
};

export default MyMood;
