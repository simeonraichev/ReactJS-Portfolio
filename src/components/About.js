import React from 'react';

import CountUp from 'react-countup';

import { useInView} from 'react-intersection-observer';

import { motion} from 'framer-motion';

import {fadeIn} from '../variants';
import userEvent from '@testing-library/user-event';


const About = () => {
  const[ref, inView] = useInView({
    threshold: 0.5,
  });
  return( 
    <section  className='section' id='about' ref={ref}>
      <div className='container mx-auto'></div>
        <div>
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>

          <div>
            <h2>About me.</h2>
            <h3>I am an 18 year old student who graduated from SoftUni in 2022</h3>
            <p>I have been programming since I was a child. Have worked with many different languages and technologies</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {
                    inView ? <CountUp start={0} end={6} duration={3}/> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {
                    inView ? <CountUp start={0} end={6} duration={3}/> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {
                    inView ? <CountUp start={0} end={6} duration={3}/> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      About
    </section>
  );
};

export default About;
