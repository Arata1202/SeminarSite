'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const revalidate = 60;

export default function Page() {
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

  const slides = [
    {
      mobile: '/images/top/mobile/1.png',
      tablet: '/images/top/tablet/1.png',
      desktop: '/images/top/pc/1.png',
    },
    {
      mobile: '/images/top/mobile/2.png',
      tablet: '/images/top/tablet/2.png',
      desktop: '/images/top/pc/2.png',
    },
    // {
    //   mobile: '/images/top/mobile/1.jpeg',
    //   tablet: '/images/top/tablet/1.jpeg',
    //   desktop: '/images/top/pc/1.jpeg',
    //   text: '9月の夏合宿ではBBQを楽しみました！',
    // },
  ];

  const products = [
    {
      id: 1,
      name: '活動内容',
      href: '/activity',
      imageSrc: '/images/top/square/A89123FE-0501-4FA6-9AF3-83E03DF091E8_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
      id: 1,
      name: '組織',
      href: '/member',
      imageSrc: '/images/top/square/3703F8E0-4296-4C78-9178-DAF83E946772_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
      id: 1,
      name: '選考',
      href: '/selection',
      imageSrc: '/images/top/square/093A6628-2096-42B9-84B6-32C34F9D1D19_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
      id: 1,
      name: 'お問い合わせ',
      href: '/contact',
      imageSrc: '/images/top/square/2A3A4EC7-EE88-443A-8542-EFA5040521E5_1_201_a.jpeg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
  ];

  return (
    <>
      <div style={{ marginTop: '80px' }}>
        <div className="flex justify-center gap-x-6 bg-green-700 px-6 py-2.5 sm:px-3.5">
          <p className="text:sm sm:text-2xl font-bold leading-6 text-white">
            ようこそ、東洋大学 鈴木ゼミナールへ
          </p>
        </div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <picture>
                <source media="(max-width: 600px)" srcSet={slide.mobile} />
                <source media="(min-width: 601px) and (max-width: 1024px)" srcSet={slide.tablet} />
                <source media="(min-width: 1025px)" srcSet={slide.desktop} />
                <img
                  src={slide.desktop}
                  alt=""
                  className="w-full max-w-none flex-none bg-gray-50 object-cover"
                />
              </picture>
              {/* <div className="absolute bottom-8 right-8 SlideText font-bold z-100 text-white">
                <p>{slide.text}</p>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ padding: '0 24px 24px 24px', marginBottom: '120px' }}>
        <div className="relative bg-white">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl main_side">
            <div className="TopSubTitle mt-20 font-bold text-center">消費者行動 × 企業戦略</div>
            <div className="TopSubTitleText m-auto mt-5">
              鈴木ゼミナールでは、日ごろの購買行動について解明を試み、『消費者の視点』と、消費者を引きつけて商品を買ってもらうための戦略を策定する『企業の視点』の双方を理解することに努めています。経営学部内のゼミや他大学との交流を通じて、消費者行動学を追求します。
            </div>
            <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="h-full w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <a href={product.href}>
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center"
                      />
                    </a>
                    <div className="ActivityText absolute top-5 left-5 text-2xl font-bold text-white">
                      <p>{product.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
