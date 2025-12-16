import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await onAdd(title);
      setTitle("");
    } catch {
      setError("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <input
          type="text"
          value={title}
          placeholder="Enter task..."
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError(""); // ✅ clear only when typing
          }}
          className="
            flex-1 rounded-xl
            border border-gray-200
            px-4 py-3
            shadow-sm transition-all
            focus:outline-none focus:shadow-md
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            rounded-xl bg-blue-600 px-5 py-3
            text-white font-semibold
            shadow-md transition-all
            hover:bg-blue-700
            active:scale-95
            disabled:opacity-50
          "
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default TaskForm;
