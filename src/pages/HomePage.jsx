import { useEffect } from 'react';

import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import FeaturedProducts from '../components/FeaturedProducts';
import ScrollToTop from '../components/ScrollToTop';

function HomePage() {
  useEffect(() => {
    document.title = 'Grayscale Clothes Online Store';
  }, []);

  return (
    <div className="screen-home">
      <Hero />
      <FeaturedCollection />
      <ScrollToTop />
    </div>
  );
}
export default HomePage;
