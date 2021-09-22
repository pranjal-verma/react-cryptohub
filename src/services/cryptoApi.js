// const axios = require("axios").default;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "1c9e431f21msh2868453846c019cp1388c2jsnb84b2004b77b",
};

// {
//   method: "GET",

//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "1c9e431f21msh2868453846c019cp1388c2jsnb84b2004b77b",
//   },
// };
const baseUrl = "https://coinranking1.p.rapidapi.com/";
const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCoinDetail: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCoinDetailQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
