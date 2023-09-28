import { create } from 'zustand';

export const useIsCaregiverStore = create(set => ({
    isCaregiver: undefined,
    setIsCaregiver: (isCaregiver: boolean) => set({ isCaregiver })
  }));
  