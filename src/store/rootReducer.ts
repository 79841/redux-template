import { categoryListSlice, taskListSlice } from "./slices";

export const reducer = {
  taskList: taskListSlice.reducer,
  categoryList: categoryListSlice.reducer,
};
