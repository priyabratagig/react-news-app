import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  BOLLYWOODTRENDINGSTORIES_ERR,
  BOLLYWOODTRENDINGSTORIES_SET,
  BOLLYWOODTRENDINGSTORIES_REQ,
} from "./actionTypes";

export const requestBollywoodTrendingStories = (items) => ({
  type: BOLLYWOODTRENDINGSTORIES_REQ,
  payload: items,
});
export const succeedBollywoodTrendingStories = (data = []) => ({
  type: BOLLYWOODTRENDINGSTORIES_SET,
  payload: data,
});
export const failBollywoodTrendingStories = (error = []) => ({
  type: BOLLYWOODTRENDINGSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getBollywoodTrendingStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'bollywood AND NOT expresso',
    },
  }),
  fail: failBollywoodTrendingStories,
  sucess: succeedBollywoodTrendingStories,
});
