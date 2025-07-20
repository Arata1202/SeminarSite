'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

type Props = {
  items: any[];
};

export default function LargeSlider({ items }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <ScrollAnimation variant="fadeInScale" duration={1.3}>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.mobile} className="relative">
            <picture>
              <source media="(max-width: 600px)" srcSet={item.mobile} />
              <source media="(min-width: 601px) and (max-width: 1024px)" srcSet={item.tablet} />
              <source media="(min-width: 1025px)" srcSet={item.desktop} />
              <img
                src={item.desktop}
                alt="スライダー画像"
                className="w-full max-w-none flex-none bg-gray-50 object-cover"
              />
            </picture>
          </div>
        ))}
      </Slider>
    </ScrollAnimation>
  );
}
