const TaskList = ({ tasks, onDelete }) => {
    if (!tasks.length) {
        return (
            <p className="text-center text-gray-400 mt-6">
                No tasks yet
            </p>
        );
    }

    return (
        <ul className="space-y-4">
            {tasks.map((task) => (
                <li
                    key={task._id}
                    className="flex items-center gap-3"
                >
             <div
  className="
    flex-1 rounded-xl
    border border-gray-200
    bg-white
    px-5 py-3
    text-gray-800
    shadow-sm

    transition-shadow duration-200 ease-out
    hover:shadow-lg
    hover:ring-1 hover:ring-gray-300
  "
>
  {task.title}
</div>
        

                    {/* DELETE BUTTON (like Add button) */}
                    <button
                        onClick={() => onDelete(task._id)}
                        className="
              rounded-xl bg-red-500
              px-3 py-3
              text-white font-semibold
              shadow-md transition-all duration-200

              hover:bg-red-600 hover:shadow-lg
              active:scale-95
            "
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
