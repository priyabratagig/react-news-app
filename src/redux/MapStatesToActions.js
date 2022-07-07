import {
    topStories,
    international,
    national,
    entertainment,
    business,
    bollywood,
    bollywoodTrending,
    hollywood,
    hollywoodTrending,
    scienceAndTechnology,
    fitness,
    food,
    scienceAndTechnologyTrending,
    foodTrending,
    fitnessTrending
} from './RootReducer'
import { requestTopStories } from "./TopStories";
import { requestInternationalStories } from "./International";
import { requestNationalStories } from "./National";
import { requestEntertainmentStories } from "./Entertainment";
import { requestBusinessStories } from "./Business";
import { requestBollywoodStories } from "./Bollywood";
import { requestBollywoodTrendingStories } from "./BollywoodTrending"
import { requestHollywoodStories } from "./Hollywood";
import { requestHollywoodTrendingStories } from "./HollywoodTrending"
import { requestTechStories } from "./ScienceAndTechnology";
import { requestTechTrendingStories } from "./ScienceAndTechnologyTrending";
import { requestFoodStories } from "./Food";
import { requestFoodTrendingStories } from './FoodTrending';
import { requestFitnessStories } from "./Fitness";
import { requestFitnessTrendingStories } from "./FitnessTrending";

export const mapStateToAsyncAction = stateName => {
    switch (stateName) {
        case topStories:
            return requestTopStories;
        case international:
            return requestInternationalStories;
        case national:
            return requestNationalStories;
        case entertainment:
            return requestEntertainmentStories;
        case business:
            return requestBusinessStories;
        case bollywood:
            return requestBollywoodStories;
        case bollywoodTrending:
            return requestBollywoodTrendingStories;
        case hollywood:
            return requestHollywoodStories;
        case hollywoodTrending:
            return requestHollywoodTrendingStories;
        case scienceAndTechnology:
            return requestTechStories;
        case scienceAndTechnologyTrending:
            return requestTechTrendingStories;
        case fitness:
            return requestFitnessStories;
        case fitnessTrending:
            return requestFitnessTrendingStories;
        case food:
            return requestFoodStories;
        case foodTrending:
            return requestFoodTrendingStories;
        default:
            return () => { };
    }
}