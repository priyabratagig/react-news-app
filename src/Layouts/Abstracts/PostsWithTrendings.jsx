import React from 'react'
import { PostsContainer, basicPosts, trendingPosts } from '../../Components'
import { entertainment, national } from '../../redux';

export const viewModeDesktop = document.body.offsetWidth >= 768;

export const PostsWithTrendings = ({ title = 'National', content = national, contentItems = '4', trending = entertainment, trendingItems = '5' }) => (
    <section className='grid md:grid-cols-[2fr_1fr] my-12'>
        <PostsContainer
            title={title}
            content={content}
            items={contentItems || '4'}
            className='row-start-2 md:row-start-[unset]'
            vertical withBorder expansive>
            {basicPosts({ imageSide: true, className: viewModeDesktop ? 'pl-4 pr-8' : 'pt-8 pb-8' })}
        </PostsContainer>
        <PostsContainer
            title='Trending'
            content={trending}
            className='md:row-span-2 md:col-start-2'
            items={trendingItems || '4'}
            vertical withBorder>
            {trendingPosts({ textSmall: true, imageSide: true, className: viewModeDesktop ? 'pl-4' : 'pt-8 pb-8' })}
        </PostsContainer>
    </section>
);

export default PostsWithTrendings;