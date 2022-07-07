import React, { useState } from 'react'
import { usePostFetch } from '../../CustomHooks';
import Post, { PostMemo } from './Post';
import { tailwindClass } from '../../tailwind/expandClasses';

const articleTitle = tailwindClass`text-2xl font-medium w-max after:border-red-500 after:border-b-2 after:border-solid after:w-1/2 after:mt-2 mb-6`
const articlesMian = ({ vertical, withBorder }) => {
    let result = 'grid gap-2';
    result += ' ' + (vertical ? tailwindClass`min-h-[60vh]` : tailwindClass`grid-cols-[repeat(auto-fit_,_minmax(0_,_1fr))] min-h-[40vh]`);
    result += ' ' + (withBorder && !vertical ? tailwindClass`border-y-2 border-y-slate-300 border-solid py-6` : '');
    return result;
}
const articlePost = ({ vertical, withBorder, postsCount }) => (idx) => {
    let result = '';
    result += ' ' + (withBorder ? 'border-solid border-slate-400' : '');
    result += ' ' + (withBorder && vertical ? 'border-t-2 pt-2' : '');
    result += ' ' + (withBorder && !vertical && postsCount - 1 !== idx ? 'border-r-2 pr-2' : '');
    return result;
};

export function PostsContainer({ title = "", content = "", items = 4, className = '', children, render, vertical = false, withBorder = false, expansive = false }) {
    const [postsCount, setPostsCount] = useState(Math.floor(items) || 4);
    const [posts] = usePostFetch(content, postsCount);
    const loader = () => {
        if (posts.length + 3 === postsCount) { //to re-request with preious items if not fetched
            setPostsCount(postsCount - 3);
            setTimeout(() => setPostsCount(postsCount));
            return;
        }
        setPostsCount(postsCount + 3)
    };
    return (
        <article className={`px-4 ${className}`}>
            <h1 className={articleTitle}>{title}</h1>
            <main className={articlesMian({ vertical, withBorder })} style={{}}>
                {typeof children === 'function' ?
                    children({ posts, items: postsCount, className: articlePost({ vertical, withBorder, postsCount }), expansive }) :
                    Array.isArray(children) ? children.map(child => {
                        return typeof child === 'function' ? child({ posts, items: postsCount, className: articlePost({ vertical, withBorder, postsCount }), expansive }) :
                            child || ''
                    }) :
                        children || ''}
                {typeof render === 'function' ?
                    render({ posts, items: postsCount, className: articlePost({ vertical, withBorder, postsCount }), expansive }) :
                    Array.isArray(render) ? render.map(child => {
                        return typeof child === 'function' ? child({ posts, items: postsCount, className: articlePost({ vertical, withBorder, postsCount }), expansive }) :
                            child || ''
                    }) :
                        render || ''}
            </main>
            {expansive &&
                <button onClick={loader} className="text-gray-500">
                    <span className="text-red-400 text-2xl">↓</span>
                    <span className="align-text-bottom">Load More</span>
                </button>
            }
        </article>
    )
};

export default PostsContainer;

// render function creators
export const basicPosts = ({ imageSide = false, noImage = false, textSmall = false, className: _className = '' } = {}) =>
    ({ posts, items, className, expansive }) => [...Array(items)].map((_, idx) => {
        if (expansive) return (<PostMemo
            key={posts[idx].title ? posts[idx].title.slice(15) + posts[idx].title.slice(-15) : idx}
            {...posts[idx]}
            className={`${className(idx)} ${_className}`}
            imageSide={imageSide} noImage={noImage} textSmall={textSmall} />);
        return (<Post
            key={posts[idx].title ? posts[idx].title.slice(15) + posts[idx].title.slice(-15) : idx}
            {...posts[idx]}
            className={`${className(idx)} ${_className}`}
            imageSide={imageSide} noImage={noImage} textSmall={textSmall} />);
    });

export const trendingPosts = ({ imageSide = false, noImage = false, textSmall = false, className: _className = '' } = {}) =>
    ({ posts, items, className, expansive }) => {
        const components = [...Array(items - 1)].map((_, idx) => {
            if (expansive) return (<PostMemo
                key={posts[idx + 1].title ? posts[idx + 1].title.slice(15) + posts[idx + 1].title.slice(-15) : idx + 1}
                {...posts[idx + 1]}
                className={`${className(idx + 1)} ${_className}`}
                imageSide={imageSide} noImage={noImage} textSmall={textSmall} />);
            return (<Post
                key={posts[idx + 1].title ? posts[idx + 1].title.slice(15) + posts[idx + 1].title.slice(-15) : idx + 1}
                {...posts[idx + 1]}
                className={`${className(idx + 1)} ${_className}`}
                imageSide={imageSide} noImage={noImage} textSmall={textSmall} />);
        });
        const headPost = expansive ? (<PostMemo
            key={posts[0].title ? posts[0].title.slice(15) + posts[0].title.slice(15) : 0}
            {...posts[0]}
            textSmall={textSmall} />) : (<Post
                key={posts[0].title ? posts[0].title.slice(15) + posts[0].title.slice(15) : 0}
                {...posts[0]}
                textSmall={textSmall} />);
        components.unshift(headPost);
        return components
    };