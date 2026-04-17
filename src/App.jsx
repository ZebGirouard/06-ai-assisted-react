import { useState } from "react";

const starterTasks = [
  { id: 1, title: "Read one API response carefully", category: "learning" },
  { id: 2, title: "Ship a tiny UI improvement", category: "building" },
  { id: 3, title: "Write down one bug before fixing it", category: "debugging" }
];

function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.title}</strong>
          <span>{task.category}</span>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [tasks] = useState(starterTasks);
  const [filter, setFilter] = useState("all");

  const visibleTasks = filter === "all" ? tasks : tasks.filter((task) => task.category === filter);

  return (
    <main className="page">
      <section className="panel">
        <p className="eyebrow">Prompt, inspect, verify</p>
        <h1>Use AI to speed up the loop, not replace it.</h1>
        <div className="toolbar">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("learning")}>Learning</button>
          <button onClick={() => setFilter("building")}>Building</button>
          <button onClick={() => setFilter("debugging")}>Debugging</button>
        </div>
        <TaskList tasks={visibleTasks} />
      </section>
    </main>
  );
}
