import Link from 'next/link';
import styles from './index.module.css';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';
import HoverScale from '@/components/Common/Animation/HoverScale';

type Props = {
  items: any[];
};

export default function Navigation({ items }: Props) {
  return (
    <ScrollAnimation variant="staggerContainer" duration={1.0}>
      <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {items.map((item) => (
          <ScrollAnimation key={item.name} variant="staggerItem" duration={1.0}>
            <HoverScale scale={1.08} rotateOnHover={true}>
              <div className="group relative">
                <div className="h-full w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <Link href={`/${item.path}`}>
                    <img
                      alt="ナビゲーション画像"
                      src={`/images/top/square/${item.imagePath}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </Link>
                  <div
                    className={`${styles.title} absolute top-5 left-5 text-2xl font-bold text-white`}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            </HoverScale>
          </ScrollAnimation>
        ))}
      </div>
    </ScrollAnimation>
  );
}
