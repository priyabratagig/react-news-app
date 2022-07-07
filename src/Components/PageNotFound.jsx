import React from 'react'
import { Link } from 'react-router-dom';
import FourOFourImage from '../static/404image.svg'
export const PageNotFound = () => {
    return (
        <div title='404 page not found' className='h-screen w-screen relative'>
            <section className='absolute top-1/2 left-1/2 trna -translate-x-[50%] -translate-y-[50%] grid grid-cols-[1fr_2fr]'>
                <figure className='self-center'>
                    <img src={FourOFourImage} alt="404 robot" />
                </figure>
                <main className='flex-2 text-3xl md:text-5xl xl:text-6xl self-center font-light'>
                    <p>***</p>
                    <p>404</p>
                    <p>Page Not Found</p>
                </main>
                <span className="col-span-2 text-center mt-8">
                    <Link to='/' className="inline-block w-fit text-lg md:text-2xl font-medium bg-indigo-600 text-white px-6 py-4 rounded-full relative -left-[15%]">Go back</Link>
                </span>
            </section>
        </div>
    )
}

export default PageNotFound