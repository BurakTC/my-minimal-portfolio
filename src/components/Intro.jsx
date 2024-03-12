import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center
        flex-col text-center pt-20 pb-6 ">
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>Burak can</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Backend & Software developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>Hello, I'm Burakcan, a professional with a diverse background.
                I began my career in mechanics, gaining valuable experience in various roles.
                Driven by passion, I transitioned into the field of Computer Science.
                This fusion of mechanical expertise and a newfound interest in IT has equipped me with a unique skill set, allowing me to approach challenges with a versatile perspective.
                I am excited about the intersection of these two worlds and the opportunities it presents.</p>
        </div>
    )
}

export default Intro;