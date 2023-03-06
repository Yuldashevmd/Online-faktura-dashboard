import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getUser = createApi({
  reducerPath: "getUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (limit) => `users?${limit ? `_limit=${limit}`:''}`,
    }),
  }),
});

export const { useGetUserQuery } = getUser;
