import { create } from "zustand";

// Define type for your store
type CounterStore = {
  count: number;
  //This is synchronous action
  increment: () => void;
  //This is asynchronous action (For example if you are an API call to DB and you want to put results in a state)
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

// All hooks ( even custom ) will always start with use ( same applies for zustand )
export const useCounterStore = create<CounterStore>((set) => ({
  // In zustand the way we update this count variable is you make use of "set" Function that create function provides you.
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
