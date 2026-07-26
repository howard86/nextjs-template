import type { HelloResponse } from "@/app/api/hello/route";
import localApi from "@/common/services/local";

export const nameApi = localApi.injectEndpoints({
  endpoints: (builder) => ({
    getName: builder.query<HelloResponse, void>({
      query: () => "/hello",
    }),
  }),
});

export const { useGetNameQuery } = nameApi;
