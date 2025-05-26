import { create } from 'zustand';

export const useQuizStore = create((set) => ({
  answers: {},
  setAnswer: (name, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [name]: value,
      },
    })),
  resetAnswers: () => set({ answers: {} }),
}));
