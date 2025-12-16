export const BASE_URL = "https://task-manager-3r80.onrender.com";

export const API_PATHS = {
  TASKS: {
    GET_ALL: "/api/tasks",
    ADD: "/api/tasks",
    DELETE: (id) => `/api/tasks/${id}`,
  },
};

