import {
  BUSINESSTORIES_ERR,
  BUSINESSTORIES_SET,
  BUSINESSTORIES_REQ,
} from "./actionTypes";
import { requestPostsSagaAPICreator } from "../SagaAPICreators";

export const requestBusinessStories = (items) => ({
  type: BUSINESSTORIES_REQ,
  payload: items,
});
export const succeedBusinessStories = (data = []) => ({
  type: BUSINESSTORIES_SET,
  payload: data,
});
export const failBusinessStoies = (error = "Error") => ({
  type: BUSINESSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getBusinessStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'business AND India AND NOT expresso',
    },
  }),
  fail: failBusinessStoies,
  sucess: succeedBusinessStories,
});
