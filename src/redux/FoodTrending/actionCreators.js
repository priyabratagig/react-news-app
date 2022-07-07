import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  FOODTRENDINGSTORIES_ERR,
  FOODTRENDINGSTORIES_SET,
  FOODTRENDINGSTORIES_REQ,
} from "./actionTypes";

export const requestFoodTrendingStories = (items) => ({
  type: FOODTRENDINGSTORIES_REQ,
  payload: items,
});
export const succeedFoodTrendingStories = (data = []) => ({
  type: FOODTRENDINGSTORIES_SET,
  payload: data,
});
export const failFoodTrendingStoies = (error = []) => ({
  type: FOODTRENDINGSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getFoodTrendingStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'food AND entertainment AND NOT expresso',
    },
  }),
  fail: failFoodTrendingStoies,
  sucess: succeedFoodTrendingStories,
});
