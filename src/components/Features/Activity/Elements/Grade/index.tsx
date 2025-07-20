import styles from './index.module.css';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

type Props = {
  title: string;
  data: any[];
  imagePath: string;
};

export default function Grade({ title, data, imagePath }: Props) {
  return (
    <>
      <ScrollAnimation variant="fadeInScale" delay={0.2}>
        <div className="mt-10 xl:mx-auto xl:max-w-7xl relative">
          <img
            alt={title}
            src={`/images/activity/${imagePath}`}
            className="w-full object-cover rounded-2xl"
          />
          <div className={`${styles.titleContainer} absolute`}>
            <p className={styles.title}>{title}</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fadeInUp" delay={0.5}>
        <div className="mt-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {data.map((item, index) => (
                <ScrollAnimation key={item.name} variant="fadeInUp" delay={0.6 + index * 0.1}>
                  <div className="text-left">
                    <time
                      dateTime={item.dateTime}
                      className="flex items-center text-sm font-semibold leading-6 text-green-600"
                    >
                      <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none">
                        <circle r={2} cx={2} cy={2} fill="currentColor" />
                      </svg>
                      {item.date}
                      <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-300 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" />
                    </time>
                    <p
                      className={`${styles.description} mt-6 text-lg font-semibold leading-8 tracking-tight`}
                    >
                      {item.name}
                    </p>
                    <p className="mt-1 leading-7">{item.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
