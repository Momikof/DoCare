import { create } from 'zustand';

interface IsCaregiver {
  isCaregiver: boolean;
  setIsCaregiver: (isCaregiver: boolean) => void
}

export const useIsCaregiverStore = create<IsCaregiver>((set) => ({
    isCaregiver: false,
    setIsCaregiver: (isCaregiver: boolean) => set({ isCaregiver })
  }));
  