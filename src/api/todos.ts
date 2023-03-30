import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoInterface } from "@/store/todosSlice";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation({
      query: (body: TodoInterface) => ({
        url: "/todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id: string) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    completeTodo: builder.mutation({
      query: (body: { id: string; completed: boolean; title: string }) => ({
        url: `/todos/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useCompleteTodoMutation,
} = todosApi;
