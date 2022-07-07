import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  TOPSTORIES_ERR,
  TOPSTORIES_SET,
  TOPSTORIES_REQ,
} from "./actionTypes";

export const requestTopStories = (items) => ({
  type: TOPSTORIES_REQ,
  payload: items,
});
export const succeedTopStories = (data = []) => ({
  type: TOPSTORIES_SET,
  payload: data,
});
export const failTopStoriesStoies = (error = []) => ({
  type: TOPSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getTopStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/top-headlines',
    params: {
      lang: 'en',
      max: items,
    },
  }),
  fail: failTopStoriesStoies,
  sucess: succeedTopStories,
});
