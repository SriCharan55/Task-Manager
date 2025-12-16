import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

export const getTasks = () =>
  axiosInstance.get(API_PATHS.TASKS.GET_ALL);

export const addTask = (title) =>
  axiosInstance.post(API_PATHS.TASKS.ADD, { title });

export const deleteTask = (id) =>
  axiosInstance.delete(API_PATHS.TASKS.DELETE(id));
