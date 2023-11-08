import type { ReduxState } from "@/store";

export const selectTaskList = (state: ReduxState) => state.taskList;
