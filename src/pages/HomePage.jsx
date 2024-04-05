import { useEffect } from 'react';

import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import BlogContent from '../components/BlogContent';
import FeaturedProducts from '../components/FeaturedProducts';
import ScrollToTop from '../components/ScrollToTop';

import blogData from '../data/homePageBlogData';

function HomePage() {
  useEffect(() => {
    document.title = 'Grayscale Clothes Online Store';
  }, []);

  return (
    <div className="screen-home">
      <Hero />
      <FeaturedCollection />
      <FeaturedProducts />
      <ScrollToTop />
    </div>
  );
}
export default HomePage;
