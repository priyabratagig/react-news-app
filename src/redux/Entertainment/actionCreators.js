import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  ENTERTAINMENTSTORIES_ERR,
  ENTERTAINMENTSTORIES_SET,
  ENTERTAINMENTSTORIES_REQ,
} from "./actionTypes";

export const requestEntertainmentStories = (items) => ({
  type: ENTERTAINMENTSTORIES_REQ,
  payload: items,
});
export const succeedEntertainmentStories = (data = []) => ({
  type: ENTERTAINMENTSTORIES_SET,
  payload: data,
});
export const failEntertainmentStoies = (error = []) => ({
  type: ENTERTAINMENTSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getEntertainmentStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'entertainment AND NOT expresso'
    },
  }),
  fail: failEntertainmentStoies,
  sucess: succeedEntertainmentStories,
});
