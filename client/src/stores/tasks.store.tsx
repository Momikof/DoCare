import { create } from 'zustand';

export const useTasksStore = create(set => ({
    tasks: undefined,
    setTasks: (tasks: any) => set({ tasks })
  }));
  