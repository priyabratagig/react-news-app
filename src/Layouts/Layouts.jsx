import React from 'react'
import PostsWithTrendings from './Abstracts/PostsWithTrendings'
import {
    bollywood,
    bollywoodTrending,
    business,
    fitness,
    fitnessTrending,
    food,
    foodTrending,
    hollywood,
    hollywoodTrending,
    scienceAndTechnology,
    scienceAndTechnologyTrending
} from '../redux';

export const Bollywood = () => (
    <PostsWithTrendings
        title='Bollywood'
        content={bollywood}
        contentItems='4'
        trending={bollywoodTrending}
        trendingItems='5' />
);

export const Business = () => (
    <PostsWithTrendings
        title='Bollywood'
        content={business}
        contentItems='4'
        trending={business}
        trendingItems='5' />
);

export const Hollywood = () => (
    <PostsWithTrendings
        title='Hollywood'
        content={hollywood}
        contentItems='4'
        trending={hollywoodTrending}
        trendingItems='5' />
);

export const ScienceAndTechnology = () => (
    <PostsWithTrendings
        title='Science and Technology'
        content={scienceAndTechnology}
        contentItems='4'
        trending={scienceAndTechnologyTrending}
        trendingItems='5' />
);

export const Fitness = () => (
    <PostsWithTrendings
        title='Fitness'
        content={fitness}
        contentItems='4'
        trending={fitnessTrending}
        trendingItems='5' />
);

export const Food = () => (
    <PostsWithTrendings
        title='Food'
        content={food}
        contentItems='4'
        trending={foodTrending}
        trendingItems='5' />
);