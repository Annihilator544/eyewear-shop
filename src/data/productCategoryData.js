import imgAllProducts from '../assets/img/unsplash/frame-9.jpg';
import imgwhite from '../assets/img/unsplash/sun-1.jpg';
import imgblack from '../assets/img/unsplash/frame-7.jpg';

import imgCompressedAllProducts from '../assets/img/unsplash-compressed/frame-9.jpg';
import imgCompressedwhite from '../assets/img/unsplash-compressed/sun-1.jpg';
import imgCompressedblack from '../assets/img/unsplash-compressed/frame-7.jpg';

import { allProductsData, whiteData, blackData } from './productData';

export const allProductsCategoryData = {
  documentTitle: 'COLLECTION | Shop all products - Grayscale Clothes Store',
  banner: {
    title: 'All Products',
    description:
      'Featuring our iconic clothes, this collection draws inspiration from the unique DNA of downtown living. The clothes are designed to evoke the energy, creativity, and excitement that are synonymous with urban life, while also offering the comfort and functionality',
    img: imgAllProducts,
    imgCompressed: imgCompressedAllProducts,
    imgAlt: 'Female model wearing clothes',
  },
  products: allProductsData,
};

export const blackCategoryData = {
  documentTitle: 'OPTICAL | Trendy clothes & Styles - Grayscale Clothes Store',
  banner: {
    title: 'CLothes Shop',
    description:
      'Introducing our latest line of clothes, designed to elevate your everyday look with style and sophistication. From classic and timeless designs to bold and daring styles, these clothes have something for every taste and preference. Explore the collection and find the perfect clothes to reflect your personal style and elevate your Clothes game.',
    img: imgblack,
    imgCompressed: imgCompressedblack,
    imgAlt: 'Male model wearing clothes',
  },
  products: blackData,
};

export const whiteCategoryData = {
  documentTitle: 'white | Trendy clothes & Styles - Grayscale Clothes Store',
  banner: {
    title: 'Sunnies Store',
    description:
      "Our latest line of white is the perfect combination of fashion and function. Designed with both style and comfort in mind, these clothes are the ultimate accessory for any adventure.  With high-quality materials and attention to detail, these clothes are not only stylish but also durable enough to withstand whatever your day throws your way. So whether you're lounging by the pool or exploring the great outdoors, our white will keep you looking and feeling your best.",
    img: imgwhite,
    imgCompressed: imgCompressedwhite,
    imgAlt: 'Female model on boat wearing white',
  },
  products: whiteData,
};
