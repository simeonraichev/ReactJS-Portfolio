import React from 'react';

import Image from '../assets/avatar.svg';

import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <div className='section' id='home'>
    <div className='container mx-auto'>
      <div>
        <div>
          <h1>SIMEON <span>RAYCHEV</span></h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a </span>
            <TypeAnimation sequence={['Student',2000, 'Developer',2000, 'Trader',2000]} 
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}/>
          </div>
          <p className='mx-8-w-lg mx-auto lg:mx-0'>A passionate frontend and backend student from Sofia, Bulgaria.</p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#'>
              <FaYoutube/>
            </a>
            <a href='#'>
              <FaGithub/>
            </a>
            <a href='#'>
              <FaDribbble/>
            </a>
          </div>
        </div>
        <div>
          <img src={Image}></img>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
