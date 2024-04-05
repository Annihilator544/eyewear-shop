import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

import ImageWrapper from './ImageWrapper';

import img1 from '../assets/img/unsplash/ad-3.jpg';
import imgCompressed1 from '../assets/img/unsplash-compressed/ad-3.jpg';
import img2 from '../assets/img/unsplash/frame-12.jpg';
import imgCompressed2 from '../assets/img/unsplash-compressed/frame-12.jpg';

function FeaturedCollection() {
  return (
    // <section className="featured-coll bg-black">
    //   <div className="featured-coll__col-1">
    //     <div className="featured-coll__text-wrapper">
    //       <h4 className="featured-coll__title">Amora</h4>
    //       <p className="featured-coll__details">
    //         Crafted with care, each pair of Amora glasses is a unique statement
    //         piece that combines contemporary design with classic elegance. The
    //         collection features a range of frames in various colors and styles,
    //         all made from high-quality materials that are built to last.
    //       </p>
    //       <Link to="/products" className="featured-coll__link">
    //         BROWSE AMORA
    //       </Link>
    //     </div>
    //     <ImageWrapper className="featured-coll__img-wrapper">
    //       <ProgressiveImage src={img2} placeholder={imgCompressed2}>
    //         {(src, loading) => (
    //           <img
    //             src={src}
    //             alt="Sample of a model"
    //             className={`featured-coll__img model ${
    //               loading && 'img--loading'
    //             }`}
    //             loading="lazy"
    //           />
    //         )}
    //       </ProgressiveImage>
    //     </ImageWrapper>
    //   </div>
    //   <div className="featured-coll__col-2">
    //     <ImageWrapper className="featured-coll__img-wrapper">
    //       <ProgressiveImage src={img1} placeholder={imgCompressed1}>
    //         {(src, loading) => (
    //           <img
    //             src={src}
    //             alt="Sunglass product in the featured collection"
    //             className={`featured-coll__img main ${
    //               loading && 'img--loading'
    //             }`}
    //             loading="lazy"
    //           />
    //         )}
    //       </ProgressiveImage>
    //     </ImageWrapper>
    //     <Link to="/products" className="featured-coll__btn-link">
    //       SEE THE COLLECTION
    //     </Link>
    //   </div>
    // </section>
    <div>

    <div className='h-screen bg-black flex flex-col justify-center items-center text-gray-400 text-6xl font-extralight font-sans'>
Black, White & Elegant
    </div>
        <div className='h-screen bg-newCollection flex flex-col justify-center items-center text-3xl font-light  bg-cover bg-fixed text-white font-sans '>
        <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Our clothes are comfortable',
    1000,
    'Our clothes are elegant',
    1000,
    'Our clothes are unisex',
    1000,
    'Our clothes are aspirational',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>


        </div>
    </div>
  );
}
export default FeaturedCollection;
