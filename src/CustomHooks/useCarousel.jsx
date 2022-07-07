import { useEffect, useMemo } from "react";

export const useCarousel = () => {
    const { animationInit, animationRun, getCurrAnimationId: getAnimationId, setNewAnimationID, animationStop, carouselReset, getAnimationDuration } = useMemo(() => {
        let initilized = false;
        let animationInterval = undefined;
        let _slides = [];
        let _slideContorls = null;
        let _startFrom = 0;
        let _transition = 'top';
        let _transitionDuration = 2;
        // get duration
        const getAnimationDuration = (duration) => {
            _transitionDuration = typeof duration === 'number' ? duration / 2 : _transitionDuration || 2;
            return _transitionDuration * 2 * 1000
        };
        //get running animation id
        const getCurrAnimationId = () => animationInterval;
        //set strat point
        const setStart = from => {
            if (typeof from !== 'number' || from < 0 || _slides.length - 1 < from) {
                console.error(`Invalid start point
            Expected integer 0 to index of last slide`)
                return false;
            }
            _startFrom = from;
        };
        //clerar animation and make undefined
        const clearAnimation = () => {
            clearInterval(animationInterval);
            animationInterval = undefined;
        };
        //presetings before carusole animation effect
        const animationInit = ({ slides, slideContorls = null, startFrom = 0, transition, animationDuration }) => {
            //remove previous animation
            clearAnimation();
            //stoirng slides and contorls when specifed
            _slides = slides !== undefined ? slides : _slides;
            _slideContorls = slideContorls !== null ? slideContorls : _slideContorls;
            // storing transion property name and duration
            _transition = typeof transition === 'string' ? transition : _transition || 'top';
            getAnimationDuration(animationDuration);
            // setting starting postion
            setStart(startFrom);
            //presetting parent's positon
            //child's position, visibility, transition, top and opacity
            try {
                _slides[0].parentElement.style.position = 'relative';
                _slides[0].parentElement.style.overflow = 'hidden';
                if (_startFrom >= _slides.length) {
                    console.error('Provided start point is out of range');
                    _startFrom = 0;
                };
                Array.prototype.forEach.call(_slides, (slide, index) => {
                    // slide.style.visibility = '';
                    slide.style.position = 'relative'
                    if (index === _startFrom)
                        slide.style[_transition] = '0';
                    else if (((_startFrom || _slides.length) - 1) === index)
                        slide.style[_transition] = '-100%';
                    else if (((_startFrom + 1) % _slides.length) === index)
                        slide.style[_transition] = '100%';
                    else
                        slide.style[_transition] = '0px';
                    slide.style.opacity = index === _startFrom ? '1' : '0';
                    if (_slideContorls !== null) _slideContorls[index].checked = index === _startFrom;
                    slide.style.transition = `${_transition} ${_transitionDuration}s, opacity ${_transitionDuration}s`;
                });
            }
            catch (error) {
                console.error('Cancelling Animation Initilization...');
                console.error(error);
                carouselReset();
            };
            initilized = true;
        };
        //continuously changing images animation
        //with top, opacity and visibility properties
        const animationRun = () => {
            if (!initilized) {
                console.error(`Cann't run animation before initilization call CarouselIni() to initilize or re-initilize
                provide: slides, slideControls (optional), startFrom (optional), transtion poperty name (optional), animation duration (optional)`);
                clearAnimation();
                return false;
            }
            try {
                const currentSlide = _startFrom;
                const nextSlide = (_startFrom + 1) % _slides.length;
                const nextNextSlide = (_startFrom + 2) % _slides.length;
                //setp 1
                //push up and fade out current slide
                // above the view
                _slides[currentSlide].style[_transition] = '-100%';
                _slides[currentSlide].style.opacity = '0';
                if (_slideContorls !== null) _slideContorls[currentSlide].checked = false;
                //setp 2
                //push up and fade in next slide
                //in the view
                _slides[nextSlide].style.opacity = '1';
                _slides[nextSlide].style[_transition] = '0';
                if (_slideContorls !== null) _slideContorls[nextSlide].checked = true;
                //setp 3
                // pull down upcoming slide
                //bellow the view
                _slides[nextNextSlide].style[_transition] = '100%';
                _slides[nextNextSlide].style.opacity = '0';
                // shift pointer to upcoming slide
                _startFrom = (currentSlide + 1) % _slides.length;
            }
            catch (error) {
                console.error('Revoking Animation...');
                console.error(error);
                carouselReset();
            };
        };
        //stopinng the current animation interval and timeouts
        const animationStop = () => {
            //clearing current animation
            clearAnimation();
            //clearing all styles
            try {
                _slides[0].parentNode.style.position = '';
                _slides[0].parentNode.style.overflow = '';
                Array.prototype.forEach.call(_slides, slide => {
                    slide.style.transition = '';
                    slide.style.position = '';
                    slide.style[_transition] = '';
                    slide.style.opacity = '';
                });
            }
            catch (error) {
                if (Array.prototype.some.call(_slides, slide => !(slide.closest('body') instanceof HTMLElement))) return;
                console.error('Error Stoping Animation...');
                console.error(error);
                carouselReset();
            };
        }
        //set animation
        const setNewAnimationID = id => {
            if (animationInterval !== undefined) animationStop();
            animationInterval = id;
            return animationInterval;
        }
        //end runnig animation and repostion
        //remove slides
        const carouselReset = () => {
            if (animationInterval !== undefined) animationStop();
            //release slides
            initilized = false;
            _slides = [];
            _slideContorls = null;
            _startFrom = 0;
            _transition = 'top';
            _transitionDuration = 2;
        }
        return { animationInit, animationRun, getCurrAnimationId, setNewAnimationID, animationStop, carouselReset, getAnimationDuration }
    }, []);
    // reset on re-render and unmount
    useEffect(() => carouselReset);
    // carousel initilization 
    const carouselIni = ({ slides, slideContorls = null, startFrom = 0, transition = 'top', animationDuration = 4 }) => {
        //reset if animation already running
        if (getAnimationId() !== undefined) carouselReset();
        //handel if arguments are not objet type
        try {
            //return error message if slide is not iterable object
            if (slides === undefined) {
                console.error(`aguments[0]: should be array of DOM siblings`);
                return false;
            }
            if (typeof slides[Symbol.iterator] !== 'function') {
                console.error(`aguments[0]: Object is not Iterable`);
                return false;
            };
            //return error message if given slide contril is not iterable object
            if (slideContorls !== null && typeof slideContorls[Symbol.iterator] !== 'function') {
                console.error(`aguments[1]: Object is not Iterable`);
                return false;
            };
            //return error message if any of slides is not existing dom element
            if (slides.some(slide => !(slide.closest('body') instanceof HTMLElement))) {
                console.error(`aguments[0]: contains non-dom object`);
                return false;
            };
            //return error message if any of given slide controls is not dom element
            if (slideContorls !== null && slideContorls.some(slideContorl => !(slideContorl.closest('body') instanceof HTMLElement))) {
                console.error(`aguments[0]: contains non-dom object`);
                return false;
            };
            //return error message if slides are not child of same parent
            if (slides.some(slide => !(slides[0].parentElement.contains(slide)))) {
                console.error(`aguments[0]: elements are not children of same parent`);
                return false;
            };
            //return error message if slide controls are not child of same parent
            if (slideContorls !== null && slideContorls.some(slideContorl => !(slideContorls[0].parentElement.contains(slideContorl)))) {
                console.error(`aguments[0]: elements are not children of same parent`);
                return false;
            };
        }
        catch (error) {
            if (error instanceof TypeError)
                console.error('Recived Non-Object')
            console.error(error);
        }
        animationInit({ slides, slideContorls, startFrom, transition, animationDuration });
    };
    //start carousel
    const carouselRun = (animationDuration) => {
        //return error message if carousel already started
        if (getAnimationId() !== undefined) {
            console.error(`carouselRun() should not be called while an animation is running
            call carouselStop() before re-starting carousel`);
            return false;
        };
        //start carousel all condition met;
        return setNewAnimationID(setInterval(animationRun, getAnimationDuration(animationDuration)));
    };
    //slide shifter, start form any point
    const carouselShiftSlide = (toIndex) => {
        const isAnimationRunning = getAnimationId() !== undefined;
        if (isAnimationRunning) animationStop();
        animationInit({ startFrom: toIndex });
        if (!isAnimationRunning) return undefined;
        return setNewAnimationID(setInterval(animationRun, getAnimationDuration()));
    }
    //stop carousle
    const carouselStop = animationStop;
    return { carouselIni, carouselRun, carouselStop, carouselShiftSlide }
}
export default useCarousel;
// useCarousel coustom hook, will return an object of fucntions that can start, stop and shift current slide
// Functions:
// carouselIni: (arguments) DOM element that are siblings, DOM element that are siblings (optional), number for start position (optional), string transition poperty name (optional), number as animation duration. To initilize carousle.
// carouselRun: (arguments) number as animation duration (optional). Run the carousel.
// carouselShiftSlide: (arguments) Slide index from 0 to index of last slide. Shift slides back and forward during the animation.
// carouselStop: Removes the animation and resets styles.