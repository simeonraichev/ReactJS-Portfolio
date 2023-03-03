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
    <section  className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='about' ref={ref}>
      <div className='container mx-auto'></div>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div variants={fadeIn('right',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.3}} className='flex-1 text-center bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>

          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.3}} className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I am an 18 year old student who graduated from SoftUni in 2022</h3>
            <p className='mb-6'>I have been programming since I was a child. Have learned and worked with many different languages and technologies</p>
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
                    inView ? <CountUp start={1} end={1000} duration={0.7}/> : null
                  }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div className='flex gap-x-8'>
                <button className='btn btn-lg'>Contact me</button>
                <a href='#' className='text-gradient btn-link'></a>
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default About;
