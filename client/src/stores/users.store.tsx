import { create } from 'zustand';

export const useTasksStore = create(set => ({
    user: undefined,
    setUser: (user: {id: string, username: string}) => set({ user })
  }));
  