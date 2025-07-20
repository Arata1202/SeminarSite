import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import styles from './index.module.css';
import { PEOPLE } from '@/constants/member';
import PageTitle from '@/components/Common/PageTitle';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

export default function Role() {
  return (
    <>
      <PageTitle title="役割" Icon={CheckBadgeIcon} />
      <ScrollAnimation variant="staggerContainer" duration={1.0}>
        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {PEOPLE.map((item, index) => (
            <ScrollAnimation key={item.name} variant="staggerItem" delay={index * 0.3}>
              <li className="h-full rounded-2xl px-8 py-10 border border-gray-300 flex flex-col">
                <img
                  alt="人物"
                  src={item.path}
                  className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 flex-shrink-0"
                />
                <div
                  className={`${styles.title} mt-6 font-semibold leading-7 tracking-tight flex-shrink-0`}
                >
                  {item.name}
                </div>
                <p className="mt-2 leading-6 text-left flex-grow">{item.description}</p>
              </li>
            </ScrollAnimation>
          ))}
        </ul>
      </ScrollAnimation>
    </>
  );
}
