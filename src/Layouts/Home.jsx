import React from 'react';
import { business, entertainment, international, national } from '../redux';
import { PostsContainer, basicPosts, trendingPosts, AdvertiseIframe, TopStories } from '../Components';
import { viewModeDesktop } from './Abstracts/PostsWithTrendings';
export const Home = () => (
    <>
        <TopStories className='my-16' />
        <PostsContainer
            title='International'
            content={international}
            items='4'
            vertical={!viewModeDesktop}>
            {basicPosts({ className: viewModeDesktop ? '' : 'my-6' })}
        </PostsContainer>
        <section className='md:grid md:grid-cols-[2fr_1fr] my-12'>
            <div className='flex flex-col gap-y-12 justify-between'>
                <PostsContainer
                    title='National'
                    content={national}
                    items='4'
                    vertical withBorder expansive>
                    {basicPosts({ imageSide: true, className: viewModeDesktop ? 'pl-4 pr-8' : 'pt-8 pb-8' })}
                </PostsContainer>
                {viewModeDesktop && <TopStories collapsed />}
            </div>
            <div>
                {viewModeDesktop && <AdvertiseIframe className='min-h-[100vh] w-full my-12' />}
                <PostsContainer
                    title='Entertainment'
                    content={entertainment}
                    className='row-span-2 col-start-2'
                    items='4'
                    vertical withBorder>
                    {trendingPosts({ textSmall: true, imageSide: true, className: viewModeDesktop ? 'pl-4' : 'pt-8 pb-8' })}
                </PostsContainer>
            </div>
        </section>
        <PostsContainer
            title='Business'
            content={business}
            items='3'
            className='place-self-center my-12'
            vertical={!viewModeDesktop} withBorder={viewModeDesktop}>
            {!viewModeDesktop && <hr />}
            {basicPosts({ noImage: true, className: viewModeDesktop ? '' : 'my-6' })}
        </PostsContainer>
    </>
)

export default Home