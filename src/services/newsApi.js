import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const cryptoNewHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "1c9e431f21msh2868453846c019cp1388c2jsnb84b2004b77b",
};

const createRequest = (url) => ({
  url,
  headers: cryptoNewHeaders,
});

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count = 19 }) => {
        return createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        );
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = newsApi;
