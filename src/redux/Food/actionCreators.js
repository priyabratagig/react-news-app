import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  FOODSTORIES_ERR,
  FOODSTORIES_SET,
  FOODSTORIES_REQ,
} from "./actionTypes";

export const requestFoodStories = (items) => ({
  type: FOODSTORIES_REQ,
  payload: items,
});
export const succeedFoodStories = (data = []) => ({
  type: FOODSTORIES_SET,
  payload: data,
});
export const failFoodStoies = (error = []) => ({
  type: FOODSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getFoodStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'food AND health AND NOT expresso'
    },
  }),
  fail: failFoodStoies,
  sucess: succeedFoodStories,
});
