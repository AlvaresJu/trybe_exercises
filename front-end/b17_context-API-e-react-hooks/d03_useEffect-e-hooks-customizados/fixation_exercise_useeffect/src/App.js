import React from 'react';
import useCostumTimer from './hooks/useCostumTimer';

function App() {
  const [number, isMultiple, timer] = useCostumTimer();
  return (
    <div>
      <span>{`Tempo: ${timer}`}</span>
      <br />
      <span>{`Número aleatório ${number}`}</span>
      <br />
      { isMultiple && <span>Acerto</span> }
    </div>
  );
}

export default App;
