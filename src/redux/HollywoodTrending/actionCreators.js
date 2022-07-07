import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  HOLLYWOODTRENDINGTORIES_ERR,
  HOLLYWOODTRENDINGTORIES_SET,
  HOLLYWOODTRENDINGTORIES_REQ,
} from "./actionTypes";

export const requestHollywoodTrendingStories = (items) => ({
  type: HOLLYWOODTRENDINGTORIES_REQ,
  payload: items,
});
export const succeedHollywoodTrendingStories = (data = []) => ({
  type: HOLLYWOODTRENDINGTORIES_SET,
  payload: data,
});
export const failHollywoodTrendingStoies = (error = []) => ({
  type: HOLLYWOODTRENDINGTORIES_ERR,
  payload: error,
});

// Async action generators

export const getHollywoodTrendingStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'hollywood AND NOT expresso'
    },
  }),
  fail: failHollywoodTrendingStoies,
  sucess: succeedHollywoodTrendingStories,
});
