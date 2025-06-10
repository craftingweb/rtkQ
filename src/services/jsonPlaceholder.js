import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const jsonPlaceholder = createApi({
  reducerPath: jsonPlaceholder,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "posts" }),
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: "post",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostsMutation } = jsonPlaceholder;
