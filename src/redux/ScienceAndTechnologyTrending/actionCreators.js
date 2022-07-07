import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  TECHTRENDINGSTORIES_ERR,
  TECHTRENDINGSTORIES_REQ,
  TECHTRENDINGSTORIES_SET
} from "./actionTypes";

export const requestTechTrendingStories = (items) => ({
  type: TECHTRENDINGSTORIES_REQ,
  payload: items,
});
export const succeedTechTrendingStories = (data = []) => ({
  type: TECHTRENDINGSTORIES_SET,
  payload: data,
});
export const failTechStoies = (error = []) => ({
  type: TECHTRENDINGSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getTechTrendingStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'tech AND science AND NOT expresso'
    },
  }),
  fail: failTechStoies,
  sucess: succeedTechTrendingStories,
});
