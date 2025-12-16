export const BASE_URL = "http://localhost:5000";

export const API_PATHS = {
  TASKS: {
    GET_ALL: "/api/tasks",
    ADD: "/api/tasks",
    DELETE: (id) => `/api/tasks/${id}`,
  },
};
