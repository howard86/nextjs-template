import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const localApi = createApi({
  reducerPath: "localApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: () => ({}),
});

export default localApi;
