import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, addTask, deleteTask } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
  try {
    setLoading(true);
    setError("");

    const res = await getTasks();
    setTasks(res.data);

  } catch {
    // Retry once after delay (cold start fix)
    setTimeout(async () => {
      try {
        const res = await getTasks();
        setTasks(res.data);
        setError("");
      } catch {
        setError("Server is waking up, please try again");
      } finally {
        setLoading(false);
      }
    }, 1500);

    return;
  }

  setLoading(false);
};


  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (title) => {
    await addTask(title);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-14">
      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl mb-10 p-7 flex flex-col min-h-130">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Task Manager
        </h1>

        {/* Add Task Form */}
        <TaskForm onAdd={handleAdd} />

        {/* Divider */}
        <div className="border-t border-gray-200 my-6" />

        {/* Status */}
        {loading && (
          <p className="text-center text-gray-500">
            Loading tasks...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {/* Task List */}
        {!loading && (
          <div className="flex-1 overflow-y-auto pb-6">

            {/* Tasks Heading */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Tasks
            </h2>

            <TaskList tasks={tasks} onDelete={handleDelete} />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
