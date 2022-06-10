const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Do Exercises;', 'Study Trybe course content;', 'Get dressed to dinner;', 'Go out to dinner with family;'];

function App() {
  return (
    <ul>
      { taskList.map((task) => Task(task)) }
    </ul>
  );
}

export default App;
