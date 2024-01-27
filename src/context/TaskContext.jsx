import {  createContext, useContext, useReducer } from "react";
import taskReducer from "../reducers/taskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export function useTasks() {
    return useContext(TaskContext);
}

export function useTasksDispatch() {
    return useContext(TaskDispatchContext);
}


export default function TasksProvider({children}) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
