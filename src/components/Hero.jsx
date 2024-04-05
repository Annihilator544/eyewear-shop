import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';

// eslint-disable-next-line no-unused-vars
import flickityFade from 'flickity-fade';
import ProgressiveImage from 'react-progressive-graceful-image';

import heroData from '../data/heroData';

const flickityOptions = {
  fade: true,
  wrapAround: true,
  initialIndex: 0,
  autoPlay: 15000,
  pauseAutoPlayOnHover: false,
};

function Hero() {
  return (

    <div className ="bg-hero-pattern h-screen bg-cover flex flex-col justify-center items-center text-white bg-blend-overlay bg-fixed backdrop-grayscale text-7xl bg-top">
      <div className='backdrop-grayscale w-full flex flex-col justify-center items-center h-full '>

      Grayscale
      </div>
    </div>
  );
}
export default Hero;
