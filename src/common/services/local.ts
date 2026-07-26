import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const localApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: () => ({}),
  reducerPath: "localApi",
});

export default localApi;
