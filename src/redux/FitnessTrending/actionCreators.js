import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  FITNESSTRENDINGSTORIES_ERR,
  FITNESSTRENDINGSTORIES_SET,
  FITNESSTRENDINGSTORIES_REQ,
} from "./actionTypes";

export const requestFitnessTrendingStories = (items) => ({
  type: FITNESSTRENDINGSTORIES_REQ,
  payload: items,
});
export const succeedFitnessTrendingStories = (data = []) => ({
  type: FITNESSTRENDINGSTORIES_SET,
  payload: data,
});
export const failFitnessTrendingStoies = (error = []) => ({
  type: FITNESSTRENDINGSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getFitnessTrendingStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'fitness AND entertainment AND NOT expresso'
    },
  }),
  fail: failFitnessTrendingStoies,
  sucess: succeedFitnessTrendingStories,
});
