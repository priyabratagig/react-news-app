import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  NATIONALSTORIES_ERR,
  NATIONALSTORIES_SET,
  NATIONALSTORIES_REQ,
} from "./actionTypes";

export const requestNationalStories = (items) => ({
  type: NATIONALSTORIES_REQ,
  payload: items,
});
export const succeedNationalStories = (data = []) => ({
  type: NATIONALSTORIES_SET,
  payload: data,
});
export const failNationalStoies = (error = []) => ({
  type: NATIONALSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getNationalStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'India AND news AND NOT expresso',
    },
  }),
  fail: failNationalStoies,
  sucess: succeedNationalStories,
});
