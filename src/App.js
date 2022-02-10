import './App.css';

import Settings from './components/Settings/Settings';
import { INITIAL_ID, MIN_ID } from './constants/id';

import useCounter from './hooks/useCounter/useCounter';

const App = () => {
  const [id, handlersForId] = useCounter(INITIAL_ID, {
    minValue: MIN_ID,
  });

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Settings handlersForId={handlersForId} id={id} />
    </div>
  );
};

export default App;
