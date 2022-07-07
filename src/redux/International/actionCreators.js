import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  INTERNATIONALSTORIES_ERR,
  INTERNATIONALSTORIES_SET,
  INTERNATIONALSTORIES_REQ,
} from "./actionTypes";

export const requestInternationalStories = (items) => ({
  type: INTERNATIONALSTORIES_REQ,
  payload: items,
});
export const succeedInternationalStories = (data = []) => ({
  type: INTERNATIONALSTORIES_SET,
  payload: data,
});
export const failInternationalStoies = (error = []) => ({
  type: INTERNATIONALSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getInternationalStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'international affairs AND NOT expresso'
    },
  }),
  fail: failInternationalStoies,
  sucess: succeedInternationalStories,
});
