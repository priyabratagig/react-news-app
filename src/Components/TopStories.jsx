import React, { useRef } from "react";
import { ImageStoryMemo } from "./Abstracts/ImageStory";
import { useCarousel, usePostFetch } from "../CustomHooks";
import { topStories } from "../redux";
import { useEffect } from "react";
import { tailwindClass } from "../tailwind/expandClasses";


const topSection = ({ collapsed, className }) => {
  let result = 'min-h-[60vh] grid';
  result += ' ' + (collapsed ? '' : tailwindClass`md:grid-cols-3 md:grid-rows-2 md:gap-2`);
  return result + ' ' + className;
}
const article = ({ collapsed, idx }) => {
  let result = 'row-start-1 col-start-1';
  if (collapsed) return result;
  result += ' ' + tailwindClass`md:row-start-auto md:col-start-auto`;
  result += ' ' + (idx === 0 ? tailwindClass`md:col-span-2 md:row-span-2` : '');
  return result;
}

export const TopStories = ({ collapsed = false, className = '', transition = '' }) => {
  const [posts] = usePostFetch(topStories, collapsed ? 6 : 3);
  const { carouselIni, carouselRun, carouselShiftSlide } = useCarousel();

  const slidesRef = useRef(null);
  const slideControlsRef = useRef(null);
  const currentSlideRef = useRef(0);

  useEffect(() => {
    if (document.body.offsetWidth >= 768 && !collapsed) return undefined;
    carouselIni({
      slides: [...slidesRef.current.querySelectorAll('article')],
      slideContorls: collapsed ? null : [...slideControlsRef.current.querySelectorAll('input')],
      transition: transition || collapsed ? 'left' : 'top',
    });
    if (collapsed) return undefined;
    carouselRun();
  });

  return (
    <section className={topSection({ collapsed, className })} ref={slidesRef}>
      {
        [...Array(3)].map((_, idx) => {
          idx = collapsed ? idx + 3 : idx;
          posts[idx].error = posts[idx].error && idx !== 0 && !collapsed ?
            posts[idx].error.slice(0, 150) : posts[idx].error;
          return <article
            key={posts[idx].title ? posts[idx].title.slice(15) + posts[idx].title.slice(-15) : idx}
            className={article({ collapsed, idx })} >
            <ImageStoryMemo
              {...posts[idx]}
              className="h-full w-full"
              titleMiddle={collapsed} />
          </article>;
        })
      }
      {!collapsed && document.body.offsetWidth < 768 &&
        <div ref={slideControlsRef} className='absolute bottom-4 right-4'>
          <input type="radio" className="block h-5 w-5" onClick={() => carouselShiftSlide(0)} />
          <input type="radio" className="block h-5 w-5 my-4" onClick={() => carouselShiftSlide(1)} />
          <input type="radio" className="block h-5 w-5" onClick={() => carouselShiftSlide(2)} />
        </div>
      }
      {collapsed &&
        <span className="absolute top-1/2 -translate-y-1/2m left-4 text-slate-100 bg-slate-400 bg-opacity-50 text-4xl rounded-lg"
          onClick={() => {
            currentSlideRef.current = (currentSlideRef.current || 3) - 1;
            carouselShiftSlide(currentSlideRef.current);
          }}>{'<-'}
        </span>
      }
      {collapsed &&
        <span className="absolute top-1/2 -translate-y-1/2m right-4 text-slate-100 bg-slate-400 bg-opacity-50 text-4xl rounded-lg"
          onClick={() => {
            currentSlideRef.current = (currentSlideRef.current + 1) % 3;
            carouselShiftSlide(currentSlideRef.current);
          }}>{'->'}
        </span>
      }
    </section >
  );
};
export default TopStories;
