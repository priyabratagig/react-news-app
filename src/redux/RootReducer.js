import { combineReducers } from "redux";
import TOPSTORY from './TopStories/reducer';
import INTERNATIONAL from './International/reducer';
import NATIONAL from './National/reducer';
import ENTERTAINMENT from './Entertainment/reducer';
import BUSINESS from './Business/reducer';
import TECH from './ScienceAndTechnology/reducer';
import BOLLYWOOD from './Bollywood/reducer';
import BOLLYWOODTRENDING from './BollywoodTrending/reducer';
import HOLLYWOOD from './Hollywood/reducer';
import HOLLYWOODTRENDING from './HollywoodTrending/reducer';
import FITNESS from './Fitness/reducer';
import FITNESSTRENDING from './FitnessTrending/reducer';
import FOOD from './Food/reducer';
import FOODTRENDING from './FoodTrending/reducer';
import TECHTRENDING from './ScienceAndTechnologyTrending/reducer';


// State Names

export const topStories = 'topStories';
export const international = 'international';
export const national = 'national';
export const entertainment = 'entertainment';
export const business = 'business';
export const scienceAndTechnology = 'scienceAndTechnology';
export const scienceAndTechnologyTrending = 'scienceAndTechnologyTrending';
export const bollywood = 'bollywood';
export const bollywoodTrending = 'bollywoodTrending';
export const hollywood = 'hollywood';
export const hollywoodTrending = 'hollywoodTredning';
export const fitness = 'fitness';
export const fitnessTrending = 'fitnessTrending';
export const food = 'food';
export const foodTrending = 'foodTrending';


const rootReducer = combineReducers({
  [topStories]: TOPSTORY,
  [international]: INTERNATIONAL,
  [national]: NATIONAL,
  [entertainment]: ENTERTAINMENT,
  [business]: BUSINESS,
  [scienceAndTechnology]: TECH,
  [scienceAndTechnologyTrending]: TECHTRENDING,
  [bollywood]: BOLLYWOOD,
  [bollywoodTrending]: BOLLYWOODTRENDING,
  [hollywood]: HOLLYWOOD,
  [hollywoodTrending]: HOLLYWOODTRENDING,
  [fitness]: FITNESS,
  [fitnessTrending]: FITNESSTRENDING,
  [foodTrending]: FOODTRENDING,
  [food]: FOOD,
});
export default rootReducer;