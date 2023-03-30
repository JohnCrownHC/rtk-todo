import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { todosSlice } from '@/store/todosSlice';
import { todosApi } from '@/api/todos';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
