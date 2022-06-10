const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const taskList = ['Do Exercises;', 'Study Trybe course content;', 'Get dressed to dinner;', 'Go out to dinner with family;'];

function App() {
  return (
    <ul>
      { taskList.map(Task) }
    </ul>
  );
}

export default App;
