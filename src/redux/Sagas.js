import { actionChannel, call, delay, take } from 'redux-saga/effects';
import { BOLLYWOODSTORIES_REQ, getBollywoodStories } from './Bollywood';
import { BOLLYWOODTRENDINGSTORIES_REQ, getBollywoodTrendingStories } from './BollywoodTrending';
import { BUSINESSTORIES_REQ, getBusinessStories } from './Business';
import { ENTERTAINMENTSTORIES_REQ, getEntertainmentStories } from './Entertainment';
import { FITNESSSTORIES_REQ, getFitnessStories } from './Fitness';
import { FITNESSTRENDINGSTORIES_REQ, getFitnessTrendingStories } from './FitnessTrending';
import { FOODSTORIES_REQ, getFoodStories } from './Food';
import { FOODTRENDINGSTORIES_REQ, getFoodTrendingStories } from './FoodTrending';
import { getHollywoodStories, HOLLYWOODSTORIES_REQ } from './Hollywood';
import { getHollywoodTrendingStories, HOLLYWOODTRENDINGTORIES_REQ } from './HollywoodTrending';
import { getInternationalStories, INTERNATIONALSTORIES_REQ } from './International';
import { getNationalStories, NATIONALSTORIES_REQ } from './National';
import { getTechStories, TECHSTORIES_REQ } from './ScienceAndTechnology';
import { getTechTrendingStories, TECHTRENDINGSTORIES_REQ } from './ScienceAndTechnologyTrending';
import { getTopStories, TOPSTORIES_REQ } from './TopStories';

const selectAPI = (type) => {
    switch (type) {
        case TOPSTORIES_REQ:
            return getTopStories;
        case INTERNATIONALSTORIES_REQ:
            return getInternationalStories;
        case NATIONALSTORIES_REQ:
            return getNationalStories;
        case BUSINESSTORIES_REQ:
            return getBusinessStories;
        case ENTERTAINMENTSTORIES_REQ:
            return getEntertainmentStories;
        case TECHSTORIES_REQ:
            return getTechStories;
        case TECHTRENDINGSTORIES_REQ:
            return getTechTrendingStories;
        case BOLLYWOODSTORIES_REQ:
            return getBollywoodStories;
        case BOLLYWOODTRENDINGSTORIES_REQ:
            return getBollywoodTrendingStories;
        case HOLLYWOODSTORIES_REQ:
            return getHollywoodStories;
        case HOLLYWOODTRENDINGTORIES_REQ:
            return getHollywoodTrendingStories;
        case FITNESSSTORIES_REQ:
            return getFitnessStories;
        case FITNESSTRENDINGSTORIES_REQ:
            return getFitnessTrendingStories;
        case FOODSTORIES_REQ:
            return getFoodStories;
        case FOODTRENDINGSTORIES_REQ:
            return getFoodTrendingStories;
        default: return;
    }
};
export default function* mySaga() {
    const allActionChannel = yield actionChannel('*');
    while (true) {
        const { type, payload } = yield take(allActionChannel);
        const API = selectAPI(type);
        if (typeof API !== 'function') continue;
        yield call(API, payload);
        yield delay(1000);
    }
}
