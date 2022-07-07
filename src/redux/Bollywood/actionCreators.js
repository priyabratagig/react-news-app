import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  BOLLYWOODSTORIES_ERR,
  BOLLYWOODSTORIES_SET,
  BOLLYWOODSTORIES_REQ,
} from "./actionTypes";

export const requestBollywoodStories = (items) => ({
  type: BOLLYWOODSTORIES_REQ,
  payload: items,
});
export const succeedBollywoodStories = (data = []) => ({
  type: BOLLYWOODSTORIES_SET,
  payload: data,
});
export const failBollywoodStoies = (error = []) => ({
  type: BOLLYWOODSTORIES_ERR,
  payload: error,
});

// Async action generators
export const getBollywoodStories = requestPostsSagaAPICreator({
  requestPayload: items => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'bollywood AND news AND NOT expresso',
    },
  }),
  fail: failBollywoodStoies,
  sucess: succeedBollywoodStories,
});
// https://gnews.io/api/v4/search?token=b70ea884a9dcbfe2bfc35e9ce11550fb
