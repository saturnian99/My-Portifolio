import React from 'react';

const tasks = ["Organize bed", "Drink water", "Meditate"];

const createTask = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>{tasks.map(task => createTask(task))}</ol>
  );
}

export default App;
