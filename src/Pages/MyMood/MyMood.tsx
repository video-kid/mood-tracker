import { SharedCrosshairProvider } from '../../context/Charts/SharedCrosshair/SharedCrosshair';
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
      <SharedCrosshairProvider>
        <h3>Mood</h3>
        <MoodChart
          dailyMood={dailyMood}
          averageMood={averageMood}
        />
        <h3>Animals met :3</h3>
        <AnimalsMetChart animalsMet={animalsMet} />
        <h3>New bugs in code :c</h3>
        <NewBugsChart newBugs={newBugs} />
      </SharedCrosshairProvider>
    </div>
  );
};

export default MyMood;
