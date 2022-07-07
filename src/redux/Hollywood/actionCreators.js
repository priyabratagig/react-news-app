import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  HOLLYWOODSTORIES_ERR,
  HOLLYWOODSTORIES_SET,
  HOLLYWOODSTORIES_REQ,
} from "./actionTypes";

export const requestHollywoodStories = (items) => ({
  type: HOLLYWOODSTORIES_REQ,
  payload: items,
});
export const succeedHollywoodStories = (data = []) => ({
  type: HOLLYWOODSTORIES_SET,
  payload: data,
});
export const failHollywoodStoies = (error = []) => ({
  type: HOLLYWOODSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getHollywoodStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'hollywood AND news AND NOT expresso',
    },
  }),
  fail: failHollywoodStoies,
  sucess: succeedHollywoodStories,
});
