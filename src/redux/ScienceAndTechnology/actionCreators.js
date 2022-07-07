import { requestPostsSagaAPICreator } from "../SagaAPICreators";
import {
  TECHSTORIES_ERR,
  TECHSTORIES_SET,
  TECHSTORIES_REQ,
} from "./actionTypes";

export const requestTechStories = (items) => ({
  type: TECHSTORIES_REQ,
  payload: items,
});
export const succeedTechStories = (data = []) => ({
  type: TECHSTORIES_SET,
  payload: data,
});
export const failTechStoies = (error = []) => ({
  type: TECHSTORIES_ERR,
  payload: error,
});

// Async action generators

export const getTechStories = requestPostsSagaAPICreator({
  requestPayload: (items) => ({
    url: '/search',
    params: {
      lang: 'en',
      max: items,
      q: 'technology OR science AND NOT expresso',
    },
  }),
  fail: failTechStoies,
  sucess: succeedTechStories,
});
