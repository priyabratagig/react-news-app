import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  FITNESSSTORIES_ERR,
  FITNESSSTORIES_SET,
  FITNESSSTORIES_REQ,
} from "./actionTypes";

export const requestFitnessStories = (items) => ({
  type: FITNESSSTORIES_REQ,
  payload: items,
});
export const succeedFitnessStories = (data = []) => ({
  type: FITNESSSTORIES_SET,
  payload: data,
});
export const failFitnessStoies = (error = []) => ({
  type: FITNESSSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getFitnessStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'fitness AND health AND NOT expresso'
    },
  }),
  fail: failFitnessStoies,
  sucess: succeedFitnessStories,
});
